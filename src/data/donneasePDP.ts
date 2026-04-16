// DonnEase PDP static data — single source of truth

export const colorImages: Record<string, { src: string; alt: string; label: string; swatch: string }> = {
  black: {
    src: '/images/donnease-15-20-black.png',
    alt: 'DonnEase adaptive compression sock in black',
    label: 'Black',
    swatch: 'bg-gray-900',
  },
  tan: {
    src: '/images/donnease-15-20-tan.PNG',
    alt: 'DonnEase adaptive compression sock in tan',
    label: 'Tan',
    swatch: 'bg-[#D2B48C]',
  },
  white: {
    src: '/images/donnease-15-20-white.PNG',
    alt: 'DonnEase adaptive compression sock in white',
    label: 'White',
    swatch: 'bg-white border border-gray-300',
  },
};

export const compressionLevels = [
  { value: '8-15', label: '8-15 mmHg', sublabel: 'Gentle Wellness' },
  { value: '15-20', label: '15-20 mmHg', sublabel: 'Everyday Support' },
  { value: '20-30', label: '20-30 mmHg', sublabel: 'Medical Grade' },
] as const;

export const sizes = ['S', 'M', 'L', 'XL', 'XXL'] as const;

export interface BenefitItem {
  iconName: 'Maximize' | 'Hand' | 'Activity' | 'Feather';
  title: string;
  desc: string;
}

export const benefits: BenefitItem[] = [
  {
    iconName: 'Maximize',
    title: 'Wide-mouth opening',
    desc: '3x standard width for easier foot entry. Less bending, less stretching, less grip force required.',
  },
  {
    iconName: 'Hand',
    title: 'Numbered guide system',
    desc: 'Built-in 1-2-3 markers guide your hands to the right position every time. No guessing, no fumbling.',
  },
  {
    iconName: 'Activity',
    title: 'Medical-grade graduated compression',
    desc: 'Choose your level: 8-15, 15-20, or 20-30 mmHg. Same compression providers recommend, easier to put on.',
  },
  {
    iconName: 'Feather',
    title: 'Breathable, moisture-wicking construction',
    desc: '78% nylon / 22% spandex blend with seamless toe. Built for 12+ hour all-day wear comfort.',
  },
];

export interface CrossSellBundle {
  title: string;
  desc: string;
  price: string;
  originalPrice: string;
  savings: string;
  image: string;
  alt: string;
  badge: string | null;
  link: string;
}

export const crossSellBundles: CrossSellBundle[] = [
  {
    title: 'Starter Kit',
    desc: '1 DonnEase\u2122 + 1 Standard Compression Sock',
    price: '$65',
    originalPrice: '$73',
    savings: 'Save $8',
    image: '/images/donnease-15-20-black.png',
    alt: 'AccessAble Starter Kit: 1 DonnEase plus 1 standard compression sock',
    badge: null,
    link: '/collections/bundles',
  },
  {
    title: 'Daily Freedom Bundle',
    desc: '3 DonnEase\u2122 Adaptive Compression Socks',
    price: '$99',
    originalPrice: '$117',
    savings: 'Save $18',
    image: '/images/donnease-15-20-tan.PNG',
    alt: 'AccessAble Daily Freedom Bundle: 3 DonnEase adaptive compression socks',
    badge: 'Most Popular',
    link: '/collections/bundles',
  },
  {
    title: 'Complete Independence Kit',
    desc: '3 DonnEase\u2122 + 2 Standard Compression Socks',
    price: '$165',
    originalPrice: '$185',
    savings: 'Save $20',
    image: '/images/donnease-15-20-white.PNG',
    alt: 'AccessAble Complete Independence Kit: 3 DonnEase plus 2 standard compression socks',
    badge: 'Best Value',
    link: '/collections/bundles',
  },
];

export const trustBadges = [
  { iconName: 'Shield' as const, label: 'Made in USA, FDA-Registered Facility' },
  { iconName: 'Lightbulb' as const, label: 'Patent-Pending Technology' },
  { iconName: 'Heart' as const, label: 'Medical-Grade Graduated Compression' },
  { iconName: 'Clock' as const, label: '30-Day Guarantee' },
];
