// Structured content for Lovable-sourced stub articles.
// Note: mobility-aids and travel-tips entries were removed as part of the
// Phase 1 stub replacement (the corresponding pages were deleted; netlify.toml
// 301-redirects from the old slugs to their new full-content articles).
// compression-101 was the last remaining stub; it shipped 2026-05-04 as a full
// inlined-content .astro page (Stage 7 launch-plan §1 article #5 reframe), so
// the registry-driven content pattern is no longer used. The empty record and
// type definitions stay in place as scaffolding in case a future article opts
// into the structured-content pattern; new articles default to the inline
// .astro pattern modeled on caregiver-guide-compression-socks.astro.

export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'bullets' | 'steps' | 'video';
  text?: string;
  items?: string[];
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleSource {
  title: string;
  url: string;
  organization: string;
}

export interface ArticleData {
  title: string;
  category: string;
  readTime: string;
  datePublished: string;
  isHealthRelated: boolean;
  featuredImage: string;
  description: string;
  content: ContentBlock[];
  relatedArticles: string[];
  faqs?: ArticleFAQ[];
  sources?: ArticleSource[];
}

export const articleContent: Record<string, ArticleData> = {};
