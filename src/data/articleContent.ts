// Structured content for Lovable-sourced articles (compression-101, mobility-aids, travel-tips)

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
    relatedArticles: ['mobility-aids', 'travel-tips', 'donnease-adaptive-compression-guide'],
    faqs: [
      { question: 'How long should I wear compression socks?', answer: 'Wear time depends entirely on your individual situation and your healthcare provider\'s guidance. Some people wear compression during waking hours and remove them at night. Others may have different schedules based on their specific needs. If you\'re using compression based on a provider\'s recommendation, follow their specific instructions for duration and frequency of wear.' },
      { question: 'Can I wear compression socks to bed?', answer: 'Compression socks are typically designed for daytime use and are usually removed at night. However, some medical situations may require overnight wear. Never wear compression socks overnight without consulting your healthcare provider first. They can advise you based on your specific health situation and needs.' },
    ],
    sources: [
      { title: 'Compression Stockings', url: 'https://www.mayoclinic.org/diseases-conditions/varicose-veins/expert-answers/compression-stockings/faq-20058172', organization: 'Mayo Clinic' },
      { title: 'Compression Therapy Basics', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4804256/', organization: 'National Center for Biotechnology Information' },
      { title: 'Graduated Compression Stockings', url: 'https://medlineplus.gov/ency/patientinstructions/000600.htm', organization: 'MedlinePlus (National Library of Medicine)' },
      { title: 'Compression Garment Guidelines', url: 'https://www.heart.org/en/health-topics/venous-thromboembolism/prevent-and-treat-blood-clots/compression-stockings', organization: 'American Heart Association' },
    ],
  },

  'mobility-aids': {
    title: 'Mobility Aids & Sock Compatibility',
    category: 'Mobility & Independence',
    readTime: '7 min',
    datePublished: '2024-01-20',
    isHealthRelated: false,
    featuredImage: '/images/mobility-aids.png',
    description: 'Practical guidance for using compression socks with wheelchairs, walkers, and canes. Learn how DonnEase\u2122 Socks make independent application easier.',
    content: [
      { type: 'heading', text: 'Using Compression Socks with Mobility Aids' },
      { type: 'paragraph', text: 'Compression socks can be worn comfortably with wheelchairs, walkers, canes, and other mobility aids. When using a wheelchair, ensure the sock cuff doesn\'t create pressure points against wheelchair components. Socks should fit smoothly under clothing without bunching. For walker and cane users, compression socks provide all-day comfort during extended standing or walking periods. Choose knee-high styles that stay in place without sliding down, and ensure the heel is properly positioned for optimal comfort throughout the day.' },
      { type: 'heading', text: 'DonnEase\u2122 Socks for Easier Application' },
      { type: 'paragraph', text: 'DonnEase\u2122 Socks are compression socks specifically designed with adaptive features for easier independent application. These socks feature a wide-mouth opening, approximately 3x wider than standard compression sock openings, which reduces the ankle flexibility needed to slide your foot in. Built-in numbered markers provide textured grip zones that are easier to grip than slippery compression material, especially for hands with limited strength or dexterity.' },
      { type: 'steps', items: [
        'Start seated on a bed or stable chair.',
        'Hold the sock by the numbered markers with the wide opening facing you.',
        'Slide your foot into the wide opening. Notice the reduced resistance compared to standard compression.',
        'Once your foot is positioned, grip the numbered markers and pull upward to slide the sock up your leg.',
        'Smooth any wrinkles and adjust for comfort. The markers sit flush and stay in place during wear.',
      ]},
      { type: 'paragraph', text: 'The adaptive design allows many users with limited hand strength, reduced flexibility, or balance concerns to put on medical-grade compression independently.' },
      { type: 'video', text: 'Using DonnEase\u2122 Socks with Limited Dexterity' },
    ],
    relatedArticles: ['compression-101', 'travel-tips', 'caregiver-guide-compression-socks'],
  },

  'travel-tips': {
    title: 'Travel Tips for Circulation Health',
    category: 'Lifestyle & Travel',
    readTime: '6 min',
    datePublished: '2024-02-01',
    isHealthRelated: true,
    featuredImage: '/images/travel-tips.png',
    description: 'Compression sock tips for long flights and road trips. Packing guide, in-flight comfort, and circulation support during travel.',
    content: [
      { type: 'heading', text: 'Why Compression Matters During Travel' },
      { type: 'paragraph', text: 'Extended periods of sitting during long flights or car trips can create comfort challenges for your legs. Limited movement in confined spaces means your legs remain in one position for hours. Many travelers use compression socks for comfort during flights and long drives, particularly on trips exceeding four hours. Some healthcare providers recommend compression for travel, especially for individuals with specific health considerations. If you have any medical conditions or concerns about travel and leg comfort, consult your healthcare provider before your trip.' },
      { type: 'heading', text: 'Packing Tips' },
      { type: 'bullets', items: [
        'Pack compression socks in carry-on',
        'Bring DonnEase\u2122 Socks for convenience',
        'Wear compression during flight',
        'Stay hydrated',
      ]},
    ],
    relatedArticles: ['compression-101', 'how-to-put-on-compression-socks-easily', 'mobility-aids'],
    sources: [
      { title: 'Travelers\' Health: Deep Vein Thrombosis & Pulmonary Embolism', url: 'https://wwwnc.cdc.gov/travel/page/dvt', organization: 'Centers for Disease Control and Prevention' },
      { title: 'Healthy Travel: Before You Go', url: 'https://www.cdc.gov/travel/page/before-you-go', organization: 'Centers for Disease Control and Prevention' },
      { title: 'Long Distance Travel and Venous Thromboembolism', url: 'https://www.who.int/news-room/questions-and-answers/item/long-distance-travel-and-venous-thromboembolism', organization: 'World Health Organization' },
    ],
  },
};
