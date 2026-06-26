"use client";

import { useEffect, useState } from "react";

/* Logo that walks a list of real sources, then falls back to initials. */
export function LogoMark({
  sources,
  initials,
  size = 28,
  rounded = "rounded-md",
}: {
  sources: string[];
  initials: string;
  size?: number;
  rounded?: string;
}) {
  const [i, setI] = useState(0);
  const failed = i >= sources.length;
  if (failed) {
    return (
      <span
        className={`flex items-center justify-center ${rounded} bg-accent/20 text-[0.7rem] font-bold text-accent`}
        style={{ width: size, height: size }}
      >
        {initials}
      </span>
    );
  }
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={sources[i]}
      alt="Logo"
      width={size}
      height={size}
      onError={() => setI((n) => n + 1)}
      className={`${rounded} bg-white object-contain p-0.5`}
      style={{ width: size, height: size }}
    />
  );
}

/* Real website screenshot. Tries multiple free providers (mShots → thum.io),
   shows a shimmer and retries while the capture is generated. */
export function SiteShot({
  domain,
  alt,
  width = 1280,
  className = "",
}: {
  domain: string;
  alt: string;
  width?: number;
  className?: string;
}) {
  const target = `https://${domain}`;
  const providers = [
    (r: number) =>
      `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
        target
      )}?w=${width}&r=${r}`,
    () => `https://image.thum.io/get/width/${width}/${target}`,
  ];

  const [provider, setProvider] = useState(0);
  const [retry, setRetry] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (loaded || failed || provider !== 0) return;
    // mShots may need a few seconds — re-poke, then switch provider
    const timers = [3000, 6000, 9000].map((t, idx) =>
      setTimeout(() => setRetry((r) => Math.max(r, idx + 1)), t)
    );
    return () => timers.forEach(clearTimeout);
  }, [loaded, failed, provider]);

  const next = () => {
    if (provider === 0 && retry >= 3) setProvider(1);
    else if (provider === 0) setRetry((r) => r + 1);
    else setFailed(true);
  };

  const src = providers[provider](retry);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-bg">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
        </div>
      )}
      {!failed ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth > 200) setLoaded(true);
            else next();
          }}
          onError={next}
          className={`h-full w-full object-cover object-top transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-secondary px-4 text-center text-xs text-muted">
          Screenshot wird im persönlichen Report ergänzt
        </div>
      )}
    </div>
  );
}
