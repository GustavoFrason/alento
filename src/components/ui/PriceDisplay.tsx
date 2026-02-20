import { formatCurrency } from "@/utils/format";

interface PriceDisplayProps {
  price: number;
  compareAtPrice?: number;
  showInstallments?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function PriceDisplay({
  price,
  compareAtPrice,
  showInstallments = false,
  size = "md",
  className = "",
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const installments = (price / 12);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        <span className={`${sizeClasses[size]} font-bold text-navy`}>
          {formatCurrency(price)}
        </span>
        {compareAtPrice && (
          <span className="text-sm text-gray-400 line-through">
            {formatCurrency(compareAtPrice)}
          </span>
        )}
      </div>
      {showInstallments && (
        <p className="text-xs text-gray-400 mt-1">
          ou até 12x de {formatCurrency(installments)}
        </p>
      )}
    </div>
  );
}
