import { syne, space } from "../app/layout";

export default function SectionTitle({
  number,
  title,
  className = "",
  numberClass = "",
  titleClass = "",
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* NUMBER */}
      <span
        className={`
          ${syne.className}
          text-6xl
          font-extrabold
          text-orange-600
          tracking-tight
          ${numberClass}
        `}
      >
        {number}
      </span>

      {/* LINE */}
      <div className="w-12 h-[5px] bg-orange-600" />

      {/* TITLE */}
    {title && (
      <span
        className={`
          ${space.className}
          uppercase
          tracking-widest
          font-extrabold
          text-orange-600
          ${titleClass || "text-sm"}
        `}
      >
        {title}
      </span>
    )}
    </div>
  );
}
