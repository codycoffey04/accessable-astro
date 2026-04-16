import { useState, useEffect, useMemo } from 'react';

export interface SerializedProduct {
  handle: string;
  title: string;
  displayTitle: string;
  productType: string;
  price: string;
  image: string;
  imageAlt: string;
  compressionLevels: string[];
  sizes: string[];
}

interface Props {
  products: SerializedProduct[];
}

const COMPRESSION_OPTIONS = [
  { value: '8-15', label: '8-15 mmHg (Gentle)' },
  { value: '15-20', label: '15-20 mmHg (Moderate)' },
  { value: '20-30', label: '20-30 mmHg (Firm)' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A-Z' },
];

export default function CollectionFilters({ products }: Props) {
  const [compressionFilter, setCompressionFilter] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Read compression param from URL on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const comp = params.get('compression');
    if (comp) {
      setCompressionFilter(comp.split('|'));
    }
  }, []);

  const toggleCompression = (value: string) => {
    setCompressionFilter((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    // Filter by compression level
    if (compressionFilter.length > 0) {
      result = result.filter((p) =>
        p.compressionLevels.some((cl) => compressionFilter.includes(cl))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-desc':
        result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'name':
        result.sort((a, b) => a.displayTitle.localeCompare(b.displayTitle));
        break;
      default:
        break;
    }

    return result;
  }, [products, compressionFilter, sortBy]);

  const FilterControls = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Compression Level</h3>
        <div className="space-y-2">
          {COMPRESSION_OPTIONS.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer min-h-[44px]">
              <input
                type="checkbox"
                checked={compressionFilter.includes(opt.value)}
                onChange={() => toggleCompression(opt.value)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {compressionFilter.length > 0 && (
        <button
          onClick={() => setCompressionFilter([])}
          className="text-sm text-primary underline"
        >
          Clear filters
        </button>
      )}
    </div>
  );

  return (
    <div>
      {/* Top bar: sort + mobile filter trigger */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
        </p>
        <div className="flex items-center gap-3">
          {/* Mobile filter button */}
          <button
            className="lg:hidden inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Filters
          </button>

          {/* Sort dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md border px-3 py-2 text-sm bg-background"
            aria-label="Sort products"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <FilterControls />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">No products match your filters.</p>
              <button
                onClick={() => setCompressionFilter([])}
                className="text-primary underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <div key={product.handle} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden group">
                  <a href={product.productType === 'Donning Sock' ? '/collections/donnease' : `/products/${product.handle}`}>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.imageAlt || product.displayTitle}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/compression-sock-black-product.jpg';
                        }}
                      />
                    </div>
                  </a>
                  <div className="p-4">
                    <a href={product.productType === 'Donning Sock' ? '/collections/donnease' : `/products/${product.handle}`}>
                      <h3 className="font-medium mb-2 hover:text-primary transition-colors line-clamp-2">
                        {product.displayTitle}
                      </h3>
                    </a>
                    <div className="flex items-center justify-between">
                      <p className="font-bold">
                        ${parseFloat(product.price).toFixed(2)}
                      </p>
                      <a
                        href="https://signup.accessablecompression.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3"
                      >
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Join Waitlist
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-accent"
                aria-label="Close filters"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FilterControls />
          </div>
        </div>
      )}
    </div>
  );
}
