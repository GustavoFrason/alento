interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-5xl font-serif font-medium text-navy mb-3 italic tracking-wide">{title}</h2>
      {subtitle && <p className="text-gray-500 text-lg">{subtitle}</p>}
    </div>
  );
}
