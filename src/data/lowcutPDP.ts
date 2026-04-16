// Low-Cut Pro Footie PDP static data.
//
// AUDIENCE: Pro / B2B only (not consumer DTC).
// Per April 16 product-scope clarification, the Low-Cut Pro Footie is a
// healthcare-facility and team-order SKU, positioned alongside AccessAble
// Pro. Not linked from the consumer Shop dropdown (Header.astro / MobileNav.tsx
// byProduct) or the Footer Shop column. Reachable via /pro, direct link, or
// search until consumer availability is decided.
//
// Compliance-first copy: support / aid / assistance language, no cure / treat / heal.
//
// PLACEHOLDER PRICING:
// The $18 price in this file and in the .astro JSON-LD block is a MSRP
// placeholder pending B2B pricing structure confirmation with Chuck (Runway
// Knitting). Bulk/team volume pricing is expected to deviate from the
// declared MSRP. Confirm + update before any Pro partner is quoted from
// this page.
//
// DRIFT RISK (flagged by Codex adversarial review April 16):
// Colors, sizes, compression spec, price, and availability are hard-coded
// here AND in the JSON-LD block of src/pages/collections/low-cut-footie.astro.
// Should be refactored post-launch alongside donneasePDP.ts and
// standardPDP.ts to read from the Shopify product record at build time.
//
// IMAGE PLACEHOLDERS:
// No Low-Cut Footie product photography exists yet. The color images below
// reference the existing knee-high compression-sock-*-product.jpg files as
// placeholders so the page renders. Replace with actual low-cut footie
// photography before launch.

export const colorImages: Record<string, { src: string; alt: string; label: string; swatch: string }> = {
  black: {
    src: '/images/compression-sock-black-product.jpg',
    alt: 'AccessAble Low-Cut Pro Footie in black (placeholder image pending product photography)',
    label: 'Black',
    swatch: 'bg-gray-900',
  },
  white: {
    src: '/images/compression-sock-white-product.jpg',
    alt: 'AccessAble Low-Cut Pro Footie in white (placeholder image pending product photography)',
    label: 'White',
    swatch: 'bg-white border border-gray-300',
  },
};

// Single-level compression. Displayed as a fixed spec pill on the PDP, not
// a selector, because the Low-Cut Footie only ships in 8-15 mmHg.
export const compressionSpec = {
  value: '8-15',
  label: '8-15 mmHg',
  sublabel: 'Gentle Wellness',
} as const;

export const sizes = ['S', 'M', 'L', 'XL', 'XXL'] as const;

export interface BenefitItem {
  iconName: 'Shield' | 'Activity' | 'Feather' | 'Heart';
  title: string;
  desc: string;
}

export const benefits: BenefitItem[] = [
  {
    iconName: 'Feather',
    title: 'Discreet low-cut silhouette',
    desc: 'Ankle-height cut stays hidden under clinical clogs, nursing sneakers, and dress shoes. Works with scrubs, uniforms, and professional footwear.',
  },
  {
    iconName: 'Activity',
    title: 'Mild graduated 8-15 mmHg compression',
    desc: 'Light calibrated pressure, strongest at the arch and tapering through the ankle. Designed for twelve-hour shifts where full knee-high compression would be too warm or too visible.',
  },
  {
    iconName: 'Heart',
    title: 'Built for industrial laundering',
    desc: 'Premium nylon and spandex blend with a seamless toe construction. Engineered to hold compression through high-temperature hospital laundry cycles and daily rotation.',
  },
  {
    iconName: 'Shield',
    title: 'Made in USA, FDA-registered facility',
    desc: 'Manufactured at a U.S. hosiery facility with over twenty years of compression-garment experience. Single-facility sourcing for clinical procurement requirements.',
  },
];

export interface WhoItsForItem {
  title: string;
  desc: string;
}

export const whoItsFor: WhoItsForItem[] = [
  {
    title: 'Nursing and clinical staff',
    desc: 'RNs, LPNs, CNAs, and techs on twelve-hour shifts who want mild compression that disappears under clinical clogs and nursing footwear.',
  },
  {
    title: 'PTs, OTs, and therapy teams',
    desc: 'Rehabilitation and therapy professionals on their feet through back-to-back sessions.',
  },
  {
    title: 'Healthcare facilities and teams',
    desc: 'Hospitals, clinics, and clinical schools ordering for departments, units, or student cohorts. Contact Pro for bulk pricing and sizing coordination.',
  },
  {
    title: 'Clinical program students and educators',
    desc: 'Nursing, PT, OT, and allied-health programs outfitting cohorts with consistent, discreet compression during clinical rotations.',
  },
];

export const trustBadges = [
  { iconName: 'Shield' as const, label: 'Made in USA, FDA-Registered Facility' },
  { iconName: 'Heart' as const, label: 'Graduated 8-15 mmHg Compression' },
  { iconName: 'Feather' as const, label: 'Seamless Toe, Industrial-Laundry Tested' },
  { iconName: 'Clock' as const, label: 'Bulk Pricing Available' },
];
