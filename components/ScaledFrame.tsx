"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders an iframe at a fixed design width (default 1280px) and scales it
 * down to fit the container — so a desktop layout previews correctly inside
 * a narrow card. Height follows the container's chosen aspect.
 */
export default function ScaledFrame({
  src,
  designWidth = 1280,
  designHeight = 820,
  className = "",
}: {
  src: string;
  designWidth?: number;
  designHeight?: number;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / designWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div
      ref={wrapRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: designHeight * scale }}
    >
      <iframe
        src={src}
        title="Website Vorschau"
        loading="lazy"
        scrolling="no"
        className="origin-top-left border-0"
        style={{
          width: designWidth,
          height: designHeight,
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
}
