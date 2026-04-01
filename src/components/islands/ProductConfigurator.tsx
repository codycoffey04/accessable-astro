/**
 * ProductConfigurator — React island for variant selection + add-to-cart
 * Rendered client:visible on the PDP for interactivity.
 */
import { useState } from 'react';
import type { ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';

interface Props {
  product: ShopifyProduct;
  productType: string;
}

const COLOR_MAP: Record<string, string> = {
  black: '#000000',
  navy: '#001f3f',
  charcoal: '#36454f',
  beige: '#f5f5dc',
  gray: '#808080',
  grey: '#808080',
  white: '#ffffff',
};

export default function ProductConfigurator({ product, productType }: Props) {
  const firstVariant = product.node.variants.edges[0]?.node ?? null;
  const [selectedVariant, setSelectedVariant] = useState<any>(firstVariant);
  const addItem = useCartStore((s) => s.addItem);

  const findVariant = (optionName: string, optionValue: string) => {
    // Find a variant matching the chosen option, keeping other options the same
    const currentOpts = selectedVariant?.selectedOptions ?? [];
    return product.node.variants.edges.find((v) => {
      return v.node.selectedOptions.every((opt) => {
        if (opt.name === optionName) return opt.value === optionValue;
        const cur = currentOpts.find((c: any) => c.name === opt.name);
        return cur ? cur.value === opt.value : true;
      });
    });
  };

  const handleOptionChange = (optionName: string, value: string) => {
    const match = findVariant(optionName, value);
    if (match) setSelectedVariant(match.node);
  };

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions,
    });
  };

  const currentPrice = parseFloat(
    selectedVariant?.price?.amount ?? product.node.priceRange.minVariantPrice.amount,
  ).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Price */}
      <p className="text-3xl font-bold">${currentPrice}</p>

      {/* Option selectors */}
      {product.node.options.map((option) => {
        const nameLower = option.name.toLowerCase();
        const isColor =
          nameLower.includes('color') || nameLower.includes('colour') || nameLower.includes('pattern');
        const isCompression =
          nameLower.includes('compression') || nameLower.includes('level') || nameLower.includes('mmhg');
        const currentValue =
          selectedVariant?.selectedOptions?.find((o: any) => o.name === option.name)?.value ?? '';

        /* Color swatches */
        if (isColor) {
          return (
            <fieldset key={option.name} className="space-y-2">
              <legend className="text-sm font-medium">{option.name}</legend>
              <div className="flex flex-wrap gap-3">
                {option.values.map((value) => {
                  const hex = COLOR_MAP[value.toLowerCase().split(' ')[0]] ?? '#cccccc';
                  const selected = currentValue === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleOptionChange(option.name, value)}
                      className={`flex flex-col items-center gap-2 p-2 rounded-lg border-2 transition-colors ${
                        selected ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'border-gray-200 hover:border-[var(--color-primary)]/50'
                      }`}
                      aria-label={`Select ${value}`}
                      aria-pressed={selected}
                    >
                      <span
                        className="block w-12 h-12 rounded-full border-2 border-gray-200"
                        style={{ backgroundColor: hex }}
                        aria-hidden="true"
                      />
                      <span className="text-xs font-medium">{value}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          );
        }

        /* Compression level — radio buttons */
        if (isCompression && productType !== 'Bundle') {
          return (
            <fieldset key={option.name} className="space-y-2">
              <legend className="text-sm font-medium">
                {option.name}{' '}
                <a href="/learn/compression-101" className="text-xs underline text-[var(--color-primary)] ml-1">
                  Guide
                </a>
              </legend>
              <div className="flex gap-4 flex-wrap" role="radiogroup" aria-label={`Select ${option.name}`}>
                {option.values.map((value) => {
                  const selected = currentValue === value;
                  return (
                    <label
                      key={value}
                      className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border-2 transition-colors ${
                        selected ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5' : 'border-gray-200 hover:border-[var(--color-primary)]/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={option.name}
                        value={value}
                        checked={selected}
                        onChange={() => handleOptionChange(option.name, value)}
                        className="sr-only"
                      />
                      <span className="text-sm">{value}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          );
        }

        /* Default: select dropdown (Size, etc.) */
        return (
          <div key={option.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor={`opt-${option.name}`} className="text-sm font-medium">
                {option.name}
              </label>
              {nameLower.includes('size') && (
                <a href="/learn/size-guide" className="text-xs underline text-[var(--color-primary)]">
                  Size Guide
                </a>
              )}
            </div>
            <select
              id={`opt-${option.name}`}
              value={currentValue}
              onChange={(e) => handleOptionChange(option.name, e.target.value)}
              className="w-full h-12 px-3 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              aria-label={`Select ${option.name}`}
            >
              {option.values.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        );
      })}

      {/* CTA Buttons */}
      <div className="space-y-3 pt-2">
        {/* Primary: Join Waitlist (pre-launch) */}
        <a
          href="https://signup.accessablecompression.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-12 text-lg font-semibold rounded-lg bg-[var(--color-primary)] text-white hover:opacity-90 transition-opacity"
        >
          Join the Waitlist
        </a>

        {/* Secondary: Add to Cart (hidden until launch — uncomment when ready) */}
        {/* <button
          type="button"
          onClick={handleAddToCart}
          disabled={!selectedVariant}
          className="flex items-center justify-center w-full h-12 text-lg font-semibold rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-colors disabled:opacity-50"
        >
          Add to Cart
        </button> */}
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium border border-gray-300 rounded-full">
            30-Day Fit Guarantee
          </span>
        </div>
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium border border-gray-300 rounded-full">
            Free Exchanges
          </span>
        </div>
      </div>
    </div>
  );
}
