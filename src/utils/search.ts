import type { ImportedProduct } from "@/lib/types";

/**
 * Searches and filters imported products based on a query string.
 * Matches against title, brand, category, description, and tags.
 */
export function searchProducts(products: ImportedProduct[], query: string): ImportedProduct[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();

  return products.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(normalizedQuery);
    const brandMatch = product.brand?.toLowerCase().includes(normalizedQuery);
    const categoryMatch = product.category.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = product.description?.toLowerCase().includes(normalizedQuery);
    const tagsMatch = product.tags?.some((tag) => tag.toLowerCase().includes(normalizedQuery));

    return titleMatch || brandMatch || categoryMatch || descriptionMatch || tagsMatch;
  });
}
