import { formatCurrency } from "@/utils/format";

interface PriceDisplayProps {
  price: number;
  compareAtPrice?: number;
  showInstallments?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  invertColors?: boolean;
}

export function PriceDisplay({
  price,
  compareAtPrice,
  showInstallments = false,
  size = "md",
  className = "",
  invertColors = false,
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const installments = (price / 12);
  const textColor = invertColors ? "text-white" : "text-navy dark:text-brand-champagne";
  const mutedColor = invertColors ? "text-white/40" : "text-gray-400 dark:text-white/40";

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        <span className={`${sizeClasses[size]} font-bold ${textColor}`}>
          {formatCurrency(price)}
        </span>
        {compareAtPrice && (
          <span className={`text-sm ${mutedColor} line-through`}>
            {formatCurrency(compareAtPrice)}
          </span>
        )}
      </div>
      {showInstallments && (
        <p className={`text-xs ${mutedColor} mt-1`}>
          ou até 12x de {formatCurrency(installments)}
        </p>
      )}
    </div>
  );
}
