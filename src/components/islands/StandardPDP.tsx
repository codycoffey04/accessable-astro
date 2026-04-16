import { useState } from 'react';
import { colorImages, compressionLevels, sizes } from '@/data/standardPDP';

export default function StandardPDP() {
  const [selectedColor, setSelectedColor] = useState<string>('black');
  const [selectedCompression, setSelectedCompression] = useState<string>('15-20');
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
              Medical-Grade
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
            AccessAble Standard Compression Socks
          </h1>
          <p className="text-lg text-[#374151]">
            Quality graduated compression for daily wear.
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-[32px] font-bold text-primary">$34</span>
            <span className="text-lg text-[#374151]">/pair</span>
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

          {/* Compression Level Selector (2 levels, not 3) */}
          <div>
            <p className="text-sm font-medium text-[#374151] mb-3">Compression Level</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Select compression level">
              {compressionLevels.map((level) => (
                <button
                  key={level.value}
                  onClick={() => setSelectedCompression(level.value)}
                  aria-label={`Select ${level.label} ${level.sublabel}`}
                  aria-pressed={selectedCompression === level.value}
                  className={`p-4 rounded-lg border-2 text-center transition-all min-h-[48px] ${
                    selectedCompression === level.value
                      ? 'border-[#C9A844] bg-[#C9A844]/5 shadow-md'
                      : 'border-[#E5E7EB] opacity-70 hover:opacity-100 hover:border-gray-400'
                  }`}
                >
                  <span className="block font-semibold text-primary">{level.label}</span>
                  <span className="block text-xs text-[#374151] mt-0.5">{level.sublabel}</span>
                </button>
              ))}
            </div>
            <p className="text-sm italic text-[#6B7280] mt-2">
              Not sure which level? Consult your healthcare provider for guidance.
            </p>
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

          {/* CTA Button */}
          <button
            className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold rounded-lg inline-flex items-center justify-center"
            style={{ padding: '18px 48px', fontSize: '18px' }}
            onClick={() => window.open('https://signup.accessablecompression.com', '_blank', 'noopener,noreferrer')}
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Join Waitlist: Get 20% Off at Launch
          </button>
          <p className="text-sm text-[#6B7280] text-center mt-2">
            Limited early access. Ships Spring 2026.
          </p>

          {/* Quick trust signals */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-[#374151]">
            <span>Free Shipping</span>
            <span aria-hidden="true">|</span>
            <span>30-Day Guarantee</span>
            <span aria-hidden="true">|</span>
            <span>FSA/HSA Eligible</span>
          </div>
        </div>
      </div>
    </div>
  );
}
