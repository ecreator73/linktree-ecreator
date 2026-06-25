import Image from "next/image";

export default function Logo({
  className = "",
  priority = false,
  width = 520,
}: {
  className?: string;
  priority?: boolean;
  width?: number;
}) {
  // Original eCreator logo, full lockup with tagline.
  const height = Math.round(width / 2.835); // matches source aspect ratio (4167×1470)
  return (
    <Image
      src="/ecreator-logo.png"
      alt="eCreator — We create customers, not clicks."
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes="(max-width: 640px) 80vw, 520px"
    />
  );
}
