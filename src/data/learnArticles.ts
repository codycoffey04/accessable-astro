// Learn Hub article registry.
// Source of truth for the hub index, related-article resolution, and the
// audience/basePath routing required by Article Standards v1.0 §0–§3.
//
// Every entry MUST populate `imageAlt` (descriptive, mobility-context-
// appropriate). Title-as-alt fallback is banned per the Codex adversarial
// review — the layout asserts at build time and the build will fail if
// imageAlt is empty.

export type LearnArticleAudience = 'consumer' | 'pro' | 'both';
export type LearnArticleBasePath = '/learn' | '/pro/learn';

export interface LearnArticle {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime: string;
  featured?: boolean;
  featuredImage: string;
  imageAlt: string;
  audience: LearnArticleAudience;
  basePath?: LearnArticleBasePath;
  /** True if this slug is a pillar piece for its cluster. */
  pillar?: boolean;
  /** When set, links the article to its pillar by slug. */
  pillarSlug?: string;
  /** ISO date — surfaces as the canonical "last reviewed" date in layout. */
  lastReviewed?: string;
  /** Optional word count emitted in Article schema. */
  wordCount?: number;
  /** Whether the article is publicly live. REQUIRED on every entry — there is
   *  no default. An omitted flag would silently advertise a draft and remove
   *  the hub's `noindex` placeholder gate (Codex round-9 footgun). Set true
   *  only when the corresponding `<basePath>/<slug>.astro` page exists. */
  published: boolean;
}

export const articles: LearnArticle[] = [
  // ── Featured: SCI piece (strongest E-E-A-T showcase) ─────────────────────
  {
    title: 'Compression Socks for Spinal Cord Injury: A Complete Guide from Someone Who Gets It',
    slug: 'compression-socks-spinal-cord-injury',
    category: 'Condition-Specific',
    excerpt:
      'A spinal cord injury compression sock guide from a C4 SCI founder. Covers DVT risk, edema management, adaptive donning techniques, skin safety, and choosing the right compression level after SCI.',
    readTime: '14 min',
    featured: true,
    featuredImage: '/images/compression-socks-spinal-cord-injury.png',
    imageAlt:
      'A wheelchair user putting on adaptive compression socks independently using the DonnEase numbered guide system',
    audience: 'consumer',
    basePath: '/learn',
    pillar: false,
    lastReviewed: '2026-04-28',
    wordCount: 4030,
    published: true,
  },

  // ── Mobility & Independence cluster ──────────────────────────────────────
  {
    title: 'How to Put On Compression Socks: The Complete Guide',
    slug: 'how-to-put-on-compression-socks-easily',
    category: 'Mobility & Independence',
    excerpt:
      'Five proven methods to put on compression socks: standard, seated, one-handed, low-dexterity, and caregiver-assisted. The only donning guide that covers every situation.',
    readTime: '12 min',
    featuredImage: '/images/how-to-put-on-compression-socks-easily.png',
    imageAlt:
      'DonnEase adaptive compression sock laid flat with the numbered guide markers visible, ready for donning',
    audience: 'consumer',
    basePath: '/learn',
    pillar: true,
    lastReviewed: '2026-04-28',
    wordCount: 2992,
    published: true,
  },
  {
    title: 'The DonnEase™ Guide: How Adaptive Compression Socks Work',
    slug: 'donnease-adaptive-compression-guide',
    category: 'Mobility & Independence',
    excerpt:
      'How DonnEase™ adaptive compression socks use a numbered guide system (#2, #3, blue dot) to make independent donning possible for limited mobility, arthritis, and stroke.',
    readTime: '10 min',
    featuredImage: '/images/donnease-adaptive-compression-guide.jpeg',
    imageAlt:
      'Close-up of the DonnEase numbered guide system on a compression sock, showing the blue orientation dot, the #3 pull-to-ankle marker, and the #2 pull-to-knee marker',
    audience: 'consumer',
    basePath: '/learn',
    pillarSlug: 'how-to-put-on-compression-socks-easily',
    lastReviewed: '2026-04-28',
    wordCount: 2228,
    published: true,
  },
  {
    title: "Caregiver's Guide to Putting On Compression Socks",
    slug: 'caregiver-guide-compression-socks',
    category: 'Mobility & Independence',
    excerpt:
      'How to put compression socks on someone else: seated and bedridden techniques, communication tips, and adaptive tools for family caregivers. The guide nobody else wrote.',
    readTime: '14 min',
    featuredImage: '/images/caregiver-guide-compression-socks.png',
    imageAlt:
      'A caregiver helping someone seated in a chair put on an adaptive compression sock, demonstrating the seated donning technique',
    audience: 'consumer',
    basePath: '/learn',
    pillarSlug: 'how-to-put-on-compression-socks-easily',
    lastReviewed: '2026-04-28',
    wordCount: 3022,
    published: true,
  },
  {
    title: 'Mobility Aids and Compression Socks: A Guide for Wheelchair, Walker, and Cane Users',
    slug: 'mobility-aids-and-compression-socks',
    category: 'Mobility & Independence',
    excerpt:
      'Putting on compression socks when you use a wheelchair, walker, or cane. Wheelchair-specific donning, pressure-point management, and adaptive techniques for limited mobility.',
    readTime: '8 min',
    featuredImage: '/images/mobility-aids.png',
    imageAlt:
      'A wheelchair user with compression socks on, showing how the sock cuff sits without creating pressure points against the wheelchair frame',
    audience: 'consumer',
    basePath: '/learn',
    pillarSlug: 'how-to-put-on-compression-socks-easily',
    lastReviewed: '2026-04-28',
    published: false,
  },
  {
    title: 'How to Put On Compression Socks With One Hand',
    slug: 'compression-socks-one-handed-application',
    category: 'Mobility & Independence',
    excerpt:
      'A dedicated one-handed donning guide for compression socks. Practical techniques for stroke survivors, hemiplegia, SCI, and anyone learning to dress with one functional hand.',
    readTime: '8 min',
    featuredImage: '/images/compression-socks-one-handed-application.png',
    imageAlt:
      'A person using one hand to position a compression sock over the toes while the other arm rests in a sling, demonstrating one-handed donning technique',
    audience: 'consumer',
    basePath: '/learn',
    pillarSlug: 'how-to-put-on-compression-socks-easily',
    lastReviewed: '2026-04-28',
    published: false,
  },

  // ── Compression Basics cluster ───────────────────────────────────────────
  {
    title: "Compression Socks 101: A Buyer's Guide for People Whose Hands Don't Cooperate",
    slug: 'compression-101',
    category: 'Compression Basics',
    excerpt:
      "Compression socks 101 buyer's guide. mmHg levels, fit, donning ease, wash care, HSA/FSA. For people whose hands don't cooperate with the standard sock.",
    readTime: '10 min',
    featuredImage: '/images/compression-101.png',
    imageAlt:
      "Title-card placeholder hero: the article title 'Compression Socks 101: A Buyer's Guide for People Whose Hands Don't Cooperate' rendered in white serif on a charcoal background, with a brand-gold accent line and a small 'AccessAble Learn Hub' label below the title",
    audience: 'consumer',
    basePath: '/learn',
    pillar: true,
    lastReviewed: '2026-05-04',
    wordCount: 2070,
    published: true,
  },

  // ── Condition-Specific cluster ───────────────────────────────────────────
  {
    title: 'Compression Socks After Stroke: An Adaptive Donning Guide for Hemiplegia and Hemiparesis',
    slug: 'compression-socks-after-stroke',
    category: 'Condition-Specific',
    excerpt:
      'Compression sock guidance for stroke survivors with hemiplegia or hemiparesis. Adaptive donning techniques, caregiver guidance, and how to choose a sock when one hand is functional.',
    readTime: '12 min',
    featuredImage: '/images/compression-socks-after-stroke.png',
    imageAlt:
      'A stroke survivor seated with a caregiver, demonstrating the seated donning technique with adaptive compression socks',
    audience: 'consumer',
    basePath: '/learn',
    pillarSlug: 'compression-socks-spinal-cord-injury',
    lastReviewed: '2026-04-28',
    published: false,
  },
  {
    title: 'Compression for Edema and Swelling: A Plain-Language Guide',
    slug: 'compression-socks-edema-and-swelling',
    category: 'Condition-Specific',
    excerpt:
      'How graduated compression may help support healthy circulation and ease swelling associated with fluid retention. Hedged, sourced, and written for everyday readers, not clinicians.',
    readTime: '12 min',
    featuredImage: '/images/compression-socks-edema-and-swelling.png',
    imageAlt:
      'A close-up of a foot showing visible swelling around the ankle, alongside a compression sock about to be donned',
    audience: 'consumer',
    basePath: '/learn',
    lastReviewed: '2026-04-28',
    published: false,
  },

  // ── Lifestyle & Travel cluster ───────────────────────────────────────────
  {
    title: 'Compression Socks for Travel: Long Flights, Road Trips, and Adaptive Travel Tips',
    slug: 'compression-socks-for-travel',
    category: 'Lifestyle & Travel',
    excerpt:
      'A travel-day compression guide for long flights, road trips, and time changes. Adaptive packing tips, hedged DVT-risk language, and what to do if your hands tire mid-flight.',
    readTime: '8 min',
    featuredImage: '/images/travel-tips.png',
    imageAlt:
      'A traveler’s carry-on bag with adaptive compression socks visible on top, alongside a passport and water bottle',
    audience: 'consumer',
    basePath: '/learn',
    lastReviewed: '2026-04-28',
    published: false,
  },

  // ── Pro Learn cluster (lives at /pro/learn/<slug>) ────────────────────────
  {
    title: "Clinician's Guide to Adaptive Compression Socks",
    slug: 'clinician-guide-adaptive-compression',
    category: 'Pro Resources',
    excerpt:
      'A clinical reference for OTs, PTs, and nursing leadership: when adaptive compression is indicated, how to fit, and what the donning-non-compliance literature says about prescription failure.',
    readTime: '14 min',
    featuredImage: '/images/clinician-guide-adaptive-compression.png',
    imageAlt:
      'An occupational therapist demonstrating adaptive compression sock fitting to a patient in a clinical setting',
    audience: 'pro',
    basePath: '/pro/learn',
    pillar: true,
    lastReviewed: '2026-04-28',
    published: false,
  },
  {
    title: 'Compression Socks for Nurses and 12-Hour-Shift Healthcare Workers',
    slug: 'compression-socks-for-nurses',
    category: 'Pro Resources',
    excerpt:
      'A shift-worker compression guide for nurses, CNAs, PTs, OTs, and EMTs. How to choose the right mmHg for your shift pattern and what AccessAble’s 8-15 mmHg line was built to do.',
    readTime: '12 min',
    featuredImage: '/images/compression-socks-for-nurses.png',
    imageAlt:
      'A nurse on a hospital floor wearing compression socks visible above the shoes, mid-shift in scrubs',
    audience: 'pro',
    basePath: '/pro/learn',
    pillarSlug: 'clinician-guide-adaptive-compression',
    lastReviewed: '2026-04-28',
    published: false,
  },
];

export const categoryMap: Record<string, string> = {
  mobility: 'Mobility & Independence',
  compression: 'Compression Basics',
  'condition-specific': 'Condition-Specific',
  lifestyle: 'Lifestyle & Travel',
  pro: 'Pro Resources',
};

// Convenience filters for hub pages.
export const consumerArticles = articles.filter(
  (a) => a.audience === 'consumer' || a.audience === 'both',
);

export const proArticles = articles.filter(
  (a) => a.audience === 'pro' || a.audience === 'both',
);

export const publishedConsumerArticles = consumerArticles.filter(
  (a) => a.published !== false,
);

export const publishedProArticles = proArticles.filter((a) => a.published !== false);
