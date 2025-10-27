"use client";
import { useState } from "react";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import type { Product } from "@/lib/types";

interface ProductFiltersProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
  onSearch: (query: string) => void;
}

type SortOption = "relevance" | "price-asc" | "price-desc" | "name-asc" | "name-desc";
type FilterOption = "all" | "promoção" | "novidade" | "mais-vendido" | "pronta";

export function ProductFilters({ products, onFilterChange, onSearch }: ProductFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("all");
  const [selectedSort, setSelectedSort] = useState<SortOption>("relevance");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique values for filters
  const colors = Array.from(new Set(products.map(p => p.color))).sort();
  const styles = Array.from(new Set(products.map(p => p.style))).sort();

  const filterOptions: { value: FilterOption; label: string; count: number }[] = [
    { value: "all", label: "Todos", count: products.length },
    { value: "promoção", label: "Promoção", count: products.filter(p => p.tags?.includes("promoção")).length },
    { value: "novidade", label: "Novidade", count: products.filter(p => p.tags?.includes("novidade")).length },
    { value: "mais-vendido", label: "Mais Vendido", count: products.filter(p => p.tags?.includes("mais-vendido")).length },
    { value: "pronta", label: "Pronta Entrega", count: products.filter(p => p.tags?.includes("pronta")).length },
  ];

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "relevance", label: "Relevância" },
    { value: "price-asc", label: "Menor Preço" },
    { value: "price-desc", label: "Maior Preço" },
    { value: "name-asc", label: "Nome A-Z" },
    { value: "name-desc", label: "Nome Z-A" },
  ];

  const applyFilters = () => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.color?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.style?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Tag filter
    if (selectedFilter !== "all") {
      filtered = filtered.filter(product => 
        product.tags?.includes(selectedFilter)
      );
    }

    // Color filter
    if (selectedColor !== "all") {
      filtered = filtered.filter(product => product.color === selectedColor);
    }

    // Style filter
    if (selectedStyle !== "all") {
      filtered = filtered.filter(product => product.style === selectedStyle);
    }

    // Sort
    switch (selectedSort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "relevance":
      default:
        filtered.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
        break;
    }

    onFilterChange(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
    applyFilters();
  };

  const handleFilterChange = (filter: FilterOption) => {
    setSelectedFilter(filter);
    applyFilters();
  };

  const handleSortChange = (sort: SortOption) => {
    setSelectedSort(sort);
    applyFilters();
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedFilter("all");
    setSelectedColor("all");
    setSelectedStyle("all");
    setSelectedSort("relevance");
    onSearch("");
    onFilterChange(products);
  };

  const hasActiveFilters = selectedFilter !== "all" || selectedColor !== "all" || selectedStyle !== "all" || searchQuery;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
      {/* Search Bar */}
      <div className="relative mb-8">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar guirlandas..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-olive focus:border-olive transition-all bg-white shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => handleSearch("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Filter Toggle for Mobile */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-olive text-white rounded-lg hover:bg-olive/90 transition-colors"
        >
          <FaFilter />
          Filtros
        </button>
      </div>

      {/* Filters */}
      <div className={`${isFilterOpen ? "block" : "hidden"} md:block`}>
        <div className="grid md:grid-cols-4 gap-4 mb-4">
          {/* Tag Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoria
            </label>
            <select
              value={selectedFilter}
              onChange={(e) => handleFilterChange(e.target.value as FilterOption)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent"
            >
              {filterOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
          </div>

          {/* Color Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Cor
            </label>
            <select
              value={selectedColor}
              onChange={(e) => {
                setSelectedColor(e.target.value);
                applyFilters();
              }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-olive focus:border-olive transition-all bg-white shadow-sm"
            >
              <option value="all">Todas as cores</option>
              {colors.map(color => (
                <option key={color} value={color} className="capitalize">
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Style Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Estilo
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => {
                setSelectedStyle(e.target.value);
                applyFilters();
              }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-olive focus:border-olive transition-all bg-white shadow-sm"
            >
              <option value="all">Todos os estilos</option>
              {styles.map(style => (
                <option key={style} value={style} className="capitalize">
                  {style}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ordenar
            </label>
            <select
              value={selectedSort}
              onChange={(e) => handleSortChange(e.target.value as SortOption)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="flex justify-end">
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaTimes />
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
