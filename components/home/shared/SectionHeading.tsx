type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <span className={`eyebrow ${light ? "text-orange" : ""}`}>
        {eyebrow}
      </span>

      <h2
        className={`section-heading mt-5 ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`section-description mt-5 ${
            light ? "text-white/70" : ""
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}