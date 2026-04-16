// Standard Compression Sock PDP static data.
// Positioning: quality graduated compression without adaptive-donning features.
// Compliance-first copy: support / aid / assistance language, no cure / treat / heal.
//
// DRIFT RISK (flagged by Codex adversarial review April 16):
// Colors, compression levels, sizes, price, and availability are hard-coded
// here AND in the JSON-LD block of src/pages/collections/standard-compression.astro.
// A Shopify-side change to the corresponding product will not propagate here.
// This mirrors the existing donneasePDP.ts pattern; both PDPs should be
// refactored post-launch to read from the Shopify product record at build
// time so pricing and variant data cannot drift. Until then, any Shopify
// edit to this product requires a manual sync of this file + the .astro
// schema block.

export const colorImages: Record<string, { src: string; alt: string; label: string; swatch: string }> = {
  black: {
    src: '/images/compression-sock-black-product.jpg',
    alt: 'AccessAble Standard Compression Sock in black',
    label: 'Black',
    swatch: 'bg-gray-900',
  },
  tan: {
    src: '/images/compression-sock-tan-product.jpg',
    alt: 'AccessAble Standard Compression Sock in tan',
    label: 'Tan',
    swatch: 'bg-[#D2B48C]',
  },
  white: {
    src: '/images/compression-sock-white-product.jpg',
    alt: 'AccessAble Standard Compression Sock in white',
    label: 'White',
    swatch: 'bg-white border border-gray-300',
  },
};

// Standard SKU: 15-20 mmHg and 20-30 mmHg only. 8-15 mmHg is DonnEase-only.
export const compressionLevels = [
  { value: '15-20', label: '15-20 mmHg', sublabel: 'Everyday Support' },
  { value: '20-30', label: '20-30 mmHg', sublabel: 'Medical Grade' },
] as const;

export const sizes = ['S', 'M', 'L', 'XL', 'XXL'] as const;

export interface BenefitItem {
  iconName: 'Activity' | 'Shield' | 'Feather' | 'Heart';
  title: string;
  desc: string;
}

export const benefits: BenefitItem[] = [
  {
    iconName: 'Activity',
    title: 'Medical-grade graduated compression',
    desc: 'Calibrated 15-20 and 20-30 mmHg graduated pressure, strongest at the ankle and decreasing up the calf. Same compression ranges healthcare providers commonly recommend for daily wear.',
  },
  {
    iconName: 'Shield',
    title: 'Premium knit, made in USA',
    desc: 'Manufactured at a U.S. FDA-registered hosiery facility with over twenty years of compression-garment experience. Reinforced heel and toe. Built to hold compression wash after wash.',
  },
  {
    iconName: 'Feather',
    title: 'Seamless toe, moisture-wicking fabric',
    desc: '78% nylon and 22% spandex blend with a seamless toe construction. Designed to support all-day comfort without pressure points or bunching.',
  },
  {
    iconName: 'Heart',
    title: 'Designed for everyday comfort',
    desc: 'Circulation support during long sits, long flights, and long shifts. Suited to daily wearers who do not need adaptive donning features.',
  },
];

export interface WhoItsForItem {
  title: string;
  desc: string;
}

export const whoItsFor: WhoItsForItem[] = [
  {
    title: 'Daily compression wearers',
    desc: 'Desk workers, remote workers, and anyone spending long hours seated who wants steady graduated pressure for comfort.',
  },
  {
    title: 'Travelers',
    desc: 'Long flights, long drives, and cross-country trips where circulation support can aid comfort and recovery.',
  },
  {
    title: 'Standing professions',
    desc: 'Retail, hospitality, service, and healthcare workers on their feet for six-hour-plus shifts.',
  },
  {
    title: 'Mild circulation support',
    desc: 'Daily wearers seeking calibrated compression at the category standard, without adaptive donning complexity.',
  },
];

export const trustBadges = [
  { iconName: 'Shield' as const, label: 'Made in USA, FDA-Registered Facility' },
  { iconName: 'Heart' as const, label: 'Medical-Grade Graduated Compression' },
  { iconName: 'Feather' as const, label: 'Seamless Toe, Moisture-Wicking' },
  { iconName: 'Clock' as const, label: '30-Day Guarantee' },
];
