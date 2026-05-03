// Structured content for Lovable-sourced stub articles.
// Note: mobility-aids and travel-tips entries were removed as part of the
// Phase 1 stub replacement (the corresponding pages were deleted; netlify.toml
// 301-redirects from the old slugs to their new full-content articles).
// Only compression-101 remains here, scheduled for buyer's-guide reframe (task #13).

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

export const articleContent: Record<string, ArticleData> = {
  'compression-101': {
    title: 'Compression 101: What You Need to Know',
    category: 'Compression Basics',
    readTime: '5 min',
    datePublished: '2024-01-15',
    isHealthRelated: true,
    featuredImage: '/images/compression-101.png',
    description: 'Graduated compression, mmHg ratings, and sizing basics. Everything you need to understand compression socks before you buy or use them.',
    content: [
      { type: 'heading', text: 'What is Graduated Compression?' },
      { type: 'paragraph', text: 'Graduated compression technology uses elastic fabric that applies different levels of pressure at different points on your leg. The pressure is strongest at the ankle and gradually decreases up the calf. This pressure gradient is measured in millimeters of mercury (mmHg), the same unit used to measure blood pressure.' },
      { type: 'heading', text: 'Understanding mmHg Levels' },
      { type: 'paragraph', text: 'Compression socks are available in different pressure levels. 15-20 mmHg is considered mild compression, often used for everyday comfort during long periods of sitting or standing. 20-30 mmHg is moderate compression, commonly recommended by healthcare providers for post-surgical recovery or specific medical situations. Your healthcare provider can determine which compression level is appropriate for your needs.' },
      { type: 'video', text: 'Understanding Compression Levels' },
      { type: 'heading', text: 'Who Benefits from Compression?' },
      { type: 'bullets', items: [
        'People with mobility challenges',
        'Travelers on long flights',
        'Service workers who stand all day',
        'Post-surgery recovery',
      ]},
      { type: 'paragraph', text: 'Healthcare providers may recommend compression socks for various situations, including post-surgical recovery, managing certain medical conditions, or for comfort during extended periods of limited mobility. Some people also choose to wear compression socks during travel or work for all-day comfort. Always consult your healthcare provider before starting compression use, especially if you have any medical conditions or concerns.' },
    ],
    relatedArticles: ['donnease-adaptive-compression-guide', 'how-to-put-on-compression-socks-easily', 'caregiver-guide-compression-socks'],
    faqs: [
      { question: 'How long should I wear compression socks?', answer: 'Wear time depends entirely on your individual situation and your healthcare provider\'s guidance. Some people wear compression during waking hours and remove them at night. Others may have different schedules based on their specific needs. If you\'re using compression based on a provider\'s recommendation, follow their specific instructions for duration and frequency of wear.' },
      { question: 'Can I wear compression socks to bed?', answer: 'Compression socks are typically designed for daytime use and are usually removed at night. However, some medical situations may require overnight wear. Never wear compression socks overnight without consulting your healthcare provider first. They can advise you based on your specific health situation and needs.' },
    ],
    sources: [
      { title: 'Compression Stockings', url: 'https://www.mayoclinic.org/diseases-conditions/varicose-veins/expert-answers/compression-stockings/faq-20058172', organization: 'Mayo Clinic' },
      { title: 'Graduated Compression Stockings', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4081237/', organization: 'NCBI / CMAJ 2014' },
      { title: 'Graduated Compression Stockings', url: 'https://medlineplus.gov/ency/patientinstructions/000600.htm', organization: 'MedlinePlus (National Library of Medicine)' },
      { title: 'Compression Garment Guidelines', url: 'https://www.heart.org/en/health-topics/venous-thromboembolism/prevent-and-treat-blood-clots/compression-stockings', organization: 'American Heart Association' },
    ],
  },

};
