// Schema.org JSON-LD generators — single source of truth for accessablecompression.com.
// Article Standards v1.0 §3 governs basePath plumbing, feature-flag gates, and @id references.

const SITE = 'https://accessablecompression.com';
const LOGO_URL = `${SITE}/images/logo-main-optimized.png`;
const ORG_ID = `${SITE}/#organization`;
const FOUNDER_ID = `${SITE}/about#founder`;

// Entity-readiness gates per docs/learn-hub-article-standards.md §3.
// Each is a single-line flip when the underlying prerequisite ships.
const LLC_FORMED = false; // gates Organization legalName + foundingDate
// Forward-declared for downstream callers (copy-review tooling, future MedicalWebPage swap).
// Keep as `export` so anything outside this module reads the same source of truth.
export const MEDICAL_WEBPAGE_ENABLED = false;
export const FDA_LISTING_READY = false;

export type SchemaBasePath = '/learn' | '/pro/learn';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateProductSchema = (product: any) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.node.title,
  image: product.node.images.edges.map((img: any) => img.node.url),
  description: product.node.description,
  sku: product.node.variants.edges[0]?.node.id || '',
  material: '78% Nylon, 22% Spandex',
  color: ['Black', 'White', 'Gray', 'Navy'],
  size: ['S', 'M', 'L', 'XL', 'XXL'],
  brand: {
    '@type': 'Brand',
    name: 'AccessAble',
  },
  offers: {
    '@type': 'Offer',
    price: product.node.priceRange.minVariantPrice.amount,
    priceCurrency: product.node.priceRange.minVariantPrice.currencyCode,
    availability: product.node.variants.edges[0]?.node.availableForSale
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock',
  },
});

interface FAQ {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: FAQ[], pageUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  url: pageUrl,
  mainEntity: faqs.map((faq, idx) => ({
    '@type': 'Question',
    '@id': `${pageUrl}#faq-${idx + 1}`,
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: SITE,
  name: 'AccessAble',
  description: 'Adaptive compression socks designed for independence. Built from lived experience.',
  publisher: {
    '@id': ORG_ID,
  },
  inLanguage: 'en-US',
});

export interface ArticleSchemaInput {
  headline: string;
  /**
   * Display string for visible "By <author>" rendering elsewhere on the page.
   * NOT emitted directly in the Article schema — author is always serialized as
   * `{ "@id": FOUNDER_ID }` so the inline Person object lives in
   * `generateFounderPersonSchema()` and is referenced once.
   */
  author: string;
  slug: string;
  basePath: SchemaBasePath;
  /**
   * Reserved: kept on the input contract so callers (ArticleLayout) can pass it
   * for forward compatibility with the MEDICAL_WEBPAGE_ENABLED gate. Not emitted
   * in the current Article shape.
   */
  isHealthRelated?: boolean;
  reviewedBy?: { name: string; credential?: string };
  datePublished: string;
  /** Defaults to datePublished when omitted. */
  dateModified?: string;
  image: string;
  description: string;
  articleBody?: string;
  wordCount?: number;
}

export const generateArticleSchema = (input: ArticleSchemaInput) => {
  const articleUrl = `${SITE}${input.basePath}/${input.slug}`;
  const dateModified = input.dateModified ?? input.datePublished;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    author: { '@id': FOUNDER_ID },
    datePublished: input.datePublished,
    dateModified,
    image: input.image,
    description: input.description,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'AccessAble',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    url: articleUrl,
  };

  if (input.articleBody !== undefined) schema.articleBody = input.articleBody;
  if (input.wordCount !== undefined) schema.wordCount = input.wordCount;
  if (input.reviewedBy) {
    schema.reviewedBy = {
      '@type': 'Person',
      name: input.reviewedBy.name,
      ...(input.reviewedBy.credential ? { jobTitle: input.reviewedBy.credential } : {}),
    };
  }

  return schema;
};

export const generateOrganizationSchema = () => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'AccessAble',
    url: SITE,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE}/#logo`,
      url: LOGO_URL,
      caption: 'AccessAble logo',
    },
    image: `${SITE}/og-default.png`,
    description:
      'Adaptive compression socks designed for independence. Built from lived experience with spinal cord injury and mobility challenges.',
    slogan: 'Compression built for independence.',
    founder: {
      '@id': FOUNDER_ID,
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 1,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'support@accessablecompression.com',
        contactType: 'customer service',
        availableLanguage: ['en'],
        areaServed: 'US',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'adaptive clothing',
      'graduated compression therapy',
      'compression socks',
      'mobility aids',
      'spinal cord injury accessibility',
      'assistive donning techniques',
      'dexterity limitations',
      'edema management garments',
    ],
    knowsLanguage: 'en-US',
    currenciesAccepted: 'USD',
    priceRange: '$18-$99',
    brand: {
      '@type': 'Brand',
      name: 'AccessAble',
    },
    mainEntityOfPage: `${SITE}/about`,
  };

  // Entity-readiness gate: legalName + foundingDate only emit when LLC has filed.
  // The flag exists precisely to keep legal-entity falsehoods out of JSON-LD.
  if (LLC_FORMED) {
    schema.legalName = 'AccessAble LLC';
    schema.foundingDate = '2026-04-16';
  }

  return schema;
};

export const generateFounderPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Cody Coffey',
  jobTitle: 'Founder',
  description:
    'Founder of AccessAble. Designs adaptive compression socks informed by lived experience with C4 incomplete spinal cord injury.',
  worksFor: {
    '@id': ORG_ID,
  },
  knowsAbout: [
    'adaptive garment design',
    'compression therapy',
    'mobility aid usability',
    'spinal cord injury lived experience',
    'dexterity-limited donning design',
  ],
  url: `${SITE}/about`,
});

interface Collection {
  name: string;
  description: string;
  url: string;
}

export const generateCollectionSchema = (collection: Collection) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: collection.name,
  description: collection.description,
  url: collection.url,
});

/**
 * Hub-page Blog schema. Both `/learn` and `/pro/learn` are Blog entities; they
 * have different identities (consumer Learn Hub vs Pro Resources), so the
 * config object lets the caller override `name` and `description` to match
 * the visible page identity. Defaults are the consumer Learn Hub values.
 */
export const generateBlogSchema = (
  config: {
    basePath?: SchemaBasePath;
    name?: string;
    description?: string;
  } = {},
) => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: config.name ?? 'AccessAble Learn Hub',
  description:
    config.description ??
    'Expert guides for independent living, mobility, compression, and everyday comfort.',
  url: `${SITE}${config.basePath ?? '/learn'}`,
  publisher: {
    '@type': 'Organization',
    name: 'AccessAble',
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
  },
});

interface HowToStep {
  text: string;
  name?: string;
}

interface HowToSection {
  name: string;
  steps: HowToStep[];
}

export const generateHowToSchema = (howTo: {
  name: string;
  description: string;
  image?: string;
  sections: HowToSection[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  description: howTo.description,
  image: howTo.image,
  step: howTo.sections.map((section) => ({
    '@type': 'HowToSection',
    name: section.name,
    itemListElement: section.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name || `Step ${idx + 1}`,
      text: step.text,
    })),
  })),
});

export const generateAboutPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About AccessAble',
  description:
    'Purpose-built compression and mobility aids designed for independence, dignity, and real-world use.',
  url: `${SITE}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: 'AccessAble',
    url: SITE,
    logo: LOGO_URL,
  },
});

// ─── Learn Hub breadcrumb chain ──────────────────────────────────────────────
// Single source of truth for both the JSON-LD BreadcrumbList and the visible
// HTML breadcrumb nav. Centralized here because the two surfaces drifting apart
// is exactly the failure mode this helper prevents (consumer chain has 3 nodes,
// Pro chain has 4 with different labels per launch plan §3 line 145).

export interface LearnHubBreadcrumbInput {
  title: string;
  slug: string;
  basePath: SchemaBasePath;
}

export interface LearnHubBreadcrumbItem {
  name: string;
  href: string;
  isCurrent: boolean;
}

interface BreadcrumbChainNode {
  name: string;
  /** Path portion only; full URL is computed at the JSON-LD emission step. */
  path: string;
}

const learnHubBreadcrumbChain = (input: LearnHubBreadcrumbInput): BreadcrumbChainNode[] => {
  if (input.basePath === '/pro/learn') {
    return [
      { name: 'Home', path: '/' },
      { name: 'AccessAble Pro', path: '/pro' },
      { name: 'Resources', path: '/pro/learn' },
      { name: input.title, path: `/pro/learn/${input.slug}` },
    ];
  }
  return [
    { name: 'Home', path: '/' },
    { name: 'Learn Hub', path: '/learn' },
    { name: input.title, path: `/learn/${input.slug}` },
  ];
};

export const generateLearnHubBreadcrumb = (input: LearnHubBreadcrumbInput) => {
  const chain = learnHubBreadcrumbChain(input);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: chain.map((node, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: node.name,
      // Home renders as bare SITE (no trailing slash) to match the emitted shape
      // in the pre-rebuild dist; every other node concatenates SITE + path.
      item: node.path === '/' ? SITE : `${SITE}${node.path}`,
    })),
  };
};

export const getLearnHubBreadcrumbItems = (
  input: LearnHubBreadcrumbInput,
): LearnHubBreadcrumbItem[] => {
  const chain = learnHubBreadcrumbChain(input);
  return chain.map((node, index) => ({
    name: node.name,
    href: node.path,
    isCurrent: index === chain.length - 1,
  }));
};
