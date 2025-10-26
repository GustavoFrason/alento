interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-playfair text-[--color-olive] mb-2">{title}</h2>
      {subtitle && <p className="text-[--color-gray]">{subtitle}</p>}
    </div>
  );
}
