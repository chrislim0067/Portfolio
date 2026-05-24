import Image from "next/image";

type EntityLogoProps = {
  name: string;
  logos: Record<string, string>;
  imageClassName?: string;
};

export function EntityLogo({
  name,
  logos,
  imageClassName = "object-contain",
}: EntityLogoProps) {
  const logoSrc = logos[name];

  if (logoSrc) {
    return (
      <div className="experience-company-logo">
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          fill
          className={imageClassName}
          sizes="48px"
        />
      </div>
    );
  }

  return (
    <div
      className="experience-company-logo experience-company-logo--fallback"
      aria-hidden
    >
      <span>{name.charAt(0)}</span>
    </div>
  );
}
