// Schema.org JSON-LD generators — single source of truth
// Ported from lib/schema.ts with window.location.origin → SITE constant

const SITE = 'https://accessablecompression.com';
const LOGO_URL = `${SITE}/images/logo-main-optimized.png`;

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

export const generateFAQSchema = (faqs: FAQ[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

interface Article {
  headline: string;
  author?: string;
  datePublished: string;
  image: string;
  description: string;
}

export const generateArticleSchema = (article: Article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  author: {
    '@type': 'Person',
    name: article.author || 'AccessAble Team',
  },
  datePublished: article.datePublished,
  image: article.image,
  description: article.description,
  publisher: {
    '@type': 'Organization',
    name: 'AccessAble',
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
  },
});

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'AccessAble',
  url: SITE,
  logo: LOGO_URL,
  description: 'Adaptive compression socks designed for independence. Built from lived experience.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@accessablecompression.com',
    contactType: 'customer service',
  },
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

export const generateBlogSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'AccessAble Learn Hub',
  description: 'Expert guides for independent living, mobility, compression, and everyday comfort.',
  url: `${SITE}/learn`,
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
  description: 'Purpose-built compression and mobility aids designed for independence, dignity, and real-world use.',
  url: `${SITE}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: 'AccessAble',
    url: SITE,
    logo: LOGO_URL,
  },
});
