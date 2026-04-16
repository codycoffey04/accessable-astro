import { useState } from 'react';
import { colorImages, compressionSpec, sizes } from '@/data/lowcutPDP';

export default function LowCutPDP() {
  const [selectedColor, setSelectedColor] = useState<string>('black');
  const [selectedSize, setSelectedSize] = useState<string>('');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* LEFT COLUMN: Image Gallery */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center bg-[#FAF8F3] rounded-lg overflow-hidden">
            <img
              src={colorImages[selectedColor].src}
              alt={colorImages[selectedColor].alt}
              className="w-full h-full object-contain p-4"
            />
            <span className="absolute top-3 left-3 z-10 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
              AccessAble Pro
            </span>
          </div>
          {/* Thumbnail row */}
          <div className="flex gap-3 mt-4">
            {Object.entries(colorImages).map(([color, data]) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                aria-label={`View ${data.label} color`}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedColor === color
                    ? 'border-[#C9A844] ring-2 ring-[#C9A844]/30'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img src={data.src} alt={data.alt} className="w-full h-full object-contain bg-[#FAF8F3]" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Sidebar */}
        <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
          {/* Product Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">
            AccessAble Low-Cut Pro Footie
          </h1>
          <p className="text-lg text-[#374151]">
            Discreet ankle-height compression for twelve-hour clinical shifts.
          </p>

          {/* Price (placeholder MSRP, B2B pricing TBD) */}
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-[32px] font-bold text-primary">$18</span>
            <span className="text-lg text-[#374151]">/pair MSRP</span>
            <span className="text-xs text-muted-foreground italic">(bulk pricing on request)</span>
          </div>

          {/* Fixed Compression Spec (no selector, single level) */}
          <div className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 border border-border">
            <span className="text-sm font-semibold text-foreground">{compressionSpec.label}</span>
            <span className="text-xs text-muted-foreground">{compressionSpec.sublabel}</span>
          </div>

          {/* Color Swatches */}
          <div>
            <p className="text-sm font-medium text-[#374151] mb-3">
              Color: <span className="font-semibold">{colorImages[selectedColor].label}</span>
            </p>
            <div className="flex gap-3" role="radiogroup" aria-label="Select color">
              {Object.entries(colorImages).map(([color, data]) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select ${data.label}`}
                  aria-pressed={selectedColor === color}
                  className={`w-[60px] h-[60px] rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? 'border-[#C9A844] ring-2 ring-[#C9A844]/30 shadow-md'
                      : 'border-gray-300 hover:border-gray-400'
                  } ${data.swatch}`}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-[#374151]">Size</p>
              <a href="/pages/size-guide" className="text-primary underline font-medium min-h-[48px] inline-flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18" />
                </svg>
                View Size Guide
              </a>
            </div>
            <div className="flex gap-2" role="radiogroup" aria-label="Select size">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  aria-label={`Select size ${s}`}
                  aria-pressed={selectedSize === s}
                  className={`min-w-[64px] h-12 px-4 rounded-lg border-2 font-medium transition-all ${
                    selectedSize === s
                      ? 'border-[#C9A844] bg-[#C9A844]/5 text-primary'
                      : 'border-gray-200 text-[#374151] hover:border-gray-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* CTA: Pro bulk-pricing request, not consumer cart */}
          <a
            href="/pro/bulk"
            className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold rounded-lg inline-flex items-center justify-center"
            style={{ padding: '18px 48px', fontSize: '18px' }}
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            Request Team Pricing
          </a>
          <p className="text-sm text-[#6B7280] text-center mt-2">
            Available through AccessAble Pro. Bulk and team orders only at launch.
          </p>

          {/* Quick trust signals */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-[#374151]">
            <span>Made in USA</span>
            <span aria-hidden="true">|</span>
            <span>FDA-Registered Facility</span>
            <span aria-hidden="true">|</span>
            <span>Bulk Pricing Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
