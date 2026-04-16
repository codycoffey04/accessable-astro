// Learn Hub article list and categories

export interface LearnArticle {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime: string;
  featured?: boolean;
  featuredImage: string;
}

export const articles: LearnArticle[] = [
  {
    title: 'How to Put On Compression Socks: The Complete Guide',
    slug: 'how-to-put-on-compression-socks-easily',
    category: 'Mobility & Independence',
    excerpt: 'Five proven methods to put on compression socks: standard, seated, one-handed, low-dexterity, and caregiver-assisted. The only donning guide that covers every situation.',
    readTime: '12 min',
    featured: true,
    featuredImage: '/images/how-to-put-on-compression-socks-easily.png',
  },
  {
    title: 'The DonnEase\u2122 Guide: How Adaptive Compression Socks Work',
    slug: 'donnease-adaptive-compression-guide',
    category: 'Mobility & Independence',
    excerpt: 'How DonnEase\u2122 adaptive compression socks use a numbered guide system (#2, #3, blue dot) to make independent donning possible for limited mobility, arthritis, and stroke.',
    readTime: '10 min',
    featuredImage: '/images/donnease-adaptive-compression-guide.jpeg',
  },
  {
    title: 'Caregiver\'s Guide to Putting On Compression Socks',
    slug: 'caregiver-guide-compression-socks',
    category: 'Mobility & Independence',
    excerpt: 'How to put compression socks on someone else: seated and bedridden techniques, communication tips, and adaptive tools for family caregivers. The guide nobody else wrote.',
    readTime: '14 min',
    featuredImage: '/images/caregiver-guide-compression-socks.png',
  },
  {
    title: 'Compression Socks for Spinal Cord Injury: A Complete Guide from Someone Who Gets It',
    slug: 'compression-socks-spinal-cord-injury',
    category: 'Condition-Specific',
    excerpt: 'A spinal cord injury compression sock guide from a C4 SCI founder. Covers DVT risk, edema management, adaptive donning techniques, skin safety, and choosing the right compression level after SCI.',
    readTime: '14 min',
    featuredImage: '/images/compression-socks-spinal-cord-injury.png',
  },
  {
    title: 'Compression 101: What You Need to Know',
    slug: 'compression-101',
    category: 'Compression Basics',
    excerpt: 'Graduated compression, mmHg ratings, sizing basics. Everything you need to understand compression socks before you buy or use them. No medical degree required.',
    readTime: '5 min',
    featuredImage: '/images/compression-101.png',
  },
  {
    title: 'Mobility Aids & Sock Compatibility',
    slug: 'mobility-aids',
    category: 'Mobility & Independence',
    excerpt: 'Practical guidance for using compression socks with wheelchairs, walkers, and canes. Learn how DonnEase\u2122 Socks make independent application easier.',
    readTime: '7 min',
    featuredImage: '/images/mobility-aids.png',
  },
  {
    title: 'Travel Tips for Compression Users',
    slug: 'travel-tips',
    category: 'Lifestyle & Travel',
    excerpt: 'Making compression work with your daily life, whether you\'re traveling, working on your feet all day, or managing compression alongside an active routine.',
    readTime: '6 min',
    featuredImage: '/images/travel-tips.png',
  },
];

export const categoryMap: Record<string, string> = {
  'mobility': 'Mobility & Independence',
  'compression': 'Compression Basics',
  'condition-specific': 'Condition-Specific',
  'lifestyle': 'Lifestyle & Travel',
};
