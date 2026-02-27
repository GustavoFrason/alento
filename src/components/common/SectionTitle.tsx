interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-5xl font-serif font-medium text-navy dark:text-brand-gold mb-3 italic tracking-wide transition-colors duration-500">{title}</h2>
      {subtitle && <p className="text-gray-500 dark:text-white/40 text-lg transition-colors duration-500">{subtitle}</p>}
    </div>
  );
}
