/**
 * Product-specific copy configuration
 * Extracted from Lovable ProductDetail.tsx — icons replaced with string names
 * for mapping to inline SVGs in Astro templates.
 */

export interface KeyBenefit {
  icon: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  context?: string;
}

export interface HowToStep {
  number: number;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
}

export interface Material {
  label: string;
  description: string;
}

export interface BundleConfig {
  name: string;
  savingsCallout: string;
  badge?: string;
  whatsIncluded: string[];
  customizationNote?: string;
  bestFor: string[];
  price: string;
  originalPrice: string;
  savings: string;
}

export interface WhyBundleBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface BundleFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductCopyConfig {
  subheadline: string;
  keyBenefits: KeyBenefit[];
  supportingDescription: string;
  whyItsNeeded?: {
    title: string;
    intro: string;
    challenge: string[];
    howItHelps: string[];
    goal: string;
  };
  whoItsFor?: {
    title: string;
    intro: string;
    useCases: UseCase[];
    closing: string;
  };
  howToUse?: {
    title: string;
    steps: HowToStep[];
    videoLink: { url: string; text: string } | null;
    tips?: string[];
  };
  whatMakesDifferent?: {
    title: string;
    tableHeaders: string[];
    rows: string[][];
    closing: string;
  };
  proofAndTrust?: {
    title: string;
    testimonials: Testimonial[];
    clinicalInput?: string;
    trustIndicators?: string[];
    ratings?: Record<string, string>;
  };
  materialsAndCare?: {
    title: string;
    materials: Material[];
    care: {
      cleaning: string[];
      storage: string[];
      durability: string;
    };
  };
  faqs?: FAQ[];
  // Bundle-specific
  bundles?: Record<string, BundleConfig>;
  whyBundle?: {
    title: string;
    benefits: WhyBundleBenefit[];
  };
  comparisonTable?: {
    title: string;
    headers: string[];
    rows: string[][];
    bottomLine: string;
  };
  whyBundlesExist?: {
    title: string;
    problem: { title: string; description: string };
    solution: { title: string; description: string };
    bridge: { title: string; description: string };
    reasons: string[];
    closing: string;
  };
  bundleFeatures?: {
    title: string;
    features: BundleFeature[];
  };
}

export const PRODUCT_COPY_CONFIG: Record<string, ProductCopyConfig> = {
  'Compression Socks': {
    subheadline: "Medical-grade graduated compression with adaptive features for independent use.",
    keyBenefits: [
      { icon: 'maximize', text: "Wide-Toe Design \u2013 Extra room at toes means you don\u2019t need to stretch the opening as far. Less grip strength required." },
      { icon: 'hand', text: "Numbered Guide System \u2013 Built-in numbered markers (#2, #3, blue dot) let you pull the sock on without gripping slippery compression fabric." },
      { icon: 'activity', text: "8-15, 15-20, or 20-30 mmHg Graduated Compression \u2013 Multiple medical-grade levels available. Same compression providers recommend, easier to put on." },
      { icon: 'ruler', text: "S-XXL Sizing with Wide-Calf Options \u2013 Designed to accommodate different body types and mobility needs. No \u2018one-size\u2019 compromises." }
    ],
    supportingDescription: "Designed for hands with limited strength or flexibility. Graduated compression technology that actually works with your body, not against it. From hospital discharge to daily routine."
  },
  'Donning Sock': {
    subheadline: "Compression sock designed for easier independent donning with limited hand strength or flexibility.",
    keyBenefits: [
      { icon: 'hand', text: "Wide-mouth opening \u2013 3x wider than standard compression for easier foot entry" },
      { icon: 'shield', text: "Built-in numbered markers \u2013 Textured grip zones with #2, #3, and blue dot guides for better grip with limited hand strength" },
      { icon: 'package', text: "8-15, 15-20, or 20-30 mmHg graduated compression \u2013 Multiple medical-grade levels with adaptive features" },
      { icon: 'feather', text: "Seated-friendly design \u2013 Put on while seated, no standing balance required" },
      { icon: 'zap', text: "No separate tools needed \u2013 Adaptive features built into the sock itself" }
    ],
    supportingDescription: "Put on compression socks yourself without separate devices, excessive bending, or asking for help. Designed for anyone who finds traditional compression sock donning difficult due to limited mobility, flexibility, or hand strength.",
    whyItsNeeded: {
      title: "Designed to Restore Independence",
      intro: "Medical-grade compression socks are often recommended by healthcare providers, but traditional compression requires grip strength and flexibility many people don\u2019t have.",
      challenge: [
        "Standard compression openings are too narrow for limited ankle flexibility",
        "Tight compression fabric requires grip strength you may not have",
        "Pulling socks up your leg strains hands with arthritis or reduced dexterity",
        "Separate donning devices are clunky, clinical-looking, and require storage"
      ],
      howItHelps: [
        "Wide-mouth opening (3x standard width) reduces force needed to stretch sock over foot",
        "Built-in numbered markers give you textured grip zones to hold instead of slippery compression material",
        "Designed to be put on while seated\u2014no standing balance needed",
        "No separate tools to buy, store, or learn to use"
      ],
      goal: "Put on medical-grade compression yourself, on your schedule, without separate devices."
    },
    whoItsFor: {
      title: "Designed for Real-World Mobility Needs",
      intro: "Many people use DonnEase\u2122 Socks for different reasons:",
      useCases: [
        { title: "Limited Hip or Knee Flexibility", description: "If bending to reach your feet is uncomfortable or restricted, the wide opening reduces how far you need to reach. Put them on while seated with less forward bending." },
        { title: "Arthritis or Limited Grip Strength", description: "The built-in numbered markers and textured grip zones require less grip force than pulling bare compression fabric. Wider grip surface, less hand fatigue." },
        { title: "Post-Surgical Recovery", description: "When you\u2019re not cleared to bend past 90 degrees (common after hip or knee replacement), the wide opening and numbered markers let you follow your provider\u2019s restrictions while maintaining compression compliance." },
        { title: "Stroke or Neurological Conditions", description: "When one-handed dressing is necessary or coordination is affected, the wide opening and numbered markers make independent donning more accessible." },
        { title: "Wheelchair Users", description: "Put on compression socks before transferring, or while seated in your chair. Wide opening works from seated position without needing significant forward bend." },
        { title: "Chronic Mobility Challenges", description: "For anyone who finds traditional compression sock donning physically difficult\u2014regardless of the specific reason." },
        { title: "Balance Concerns", description: "Designed to be put on while seated. No standing on one foot required." }
      ],
      closing: "These socks don\u2019t require a medical diagnosis. They\u2019re for anyone who needs medical-grade compression but has limited hand strength or flexibility."
    },
    howToUse: {
      title: "Step-by-Step Instructions",
      steps: [
        { number: 1, title: "Start Seated", description: "Sit on the edge of your bed or a stable chair. You\u2019ll put the sock on from this seated position\u2014no standing required." },
        { number: 2, title: "Position the Sock Opening", description: "Hold the sock by the numbered markers at the top. Look for the #2 marker (\u2018PULL TO KNEE\u2019) and the blue dot (top of foot). The wide-mouth opening should face you. Notice how much wider it is than standard compression socks." },
        { number: 3, title: "Slide Your Foot In", description: "Guide your toes into the wide opening. The extra width means less ankle flexibility is needed. Push your foot forward until your heel is positioned correctly." },
        { number: 4, title: "Pull Up Using the Markers", description: "Grip the textured zones near the numbered markers. Pull #3 (\u2018PULL TO ANKLE\u2019) first, then #2 (\u2018PULL TO KNEE\u2019) to guide the sock up your leg. The markers give you something substantial to grip instead of slippery compression fabric." },
        { number: 5, title: "Adjust and Smooth", description: "Once the sock is up your leg, smooth any wrinkles and adjust for comfort. The numbered markers are integrated into the fabric and stay in place during wear." }
      ],
      videoLink: null,
      tips: [
        "Always start seated. A chair or bed edge works well. No standing balance needed.",
        "Use the numbered markers for grip. They\u2019re designed for limited hand strength\u2014textured grip zones instead of bare compression material.",
        "Practice with regular socks first if you want to get familiar with the motion, but most users don\u2019t need practice.",
        "The wide opening is your advantage. Don\u2019t try to force your foot through like standard compression\u2014it\u2019s designed to slide in easily."
      ]
    },
    whatMakesDifferent: {
      title: "AccessAble DonnEase\u2122 Sock vs. Standard Compression",
      tableHeaders: ["Feature", "Standard Compression Socks", "AccessAble DonnEase\u2122 Sock"],
      rows: [
        ["Opening Width", "Narrow, requires significant ankle flexibility", "3x wider opening for easier foot entry"],
        ["Grip Points", "Bare compression fabric (slippery, hard to grip)", "Built-in numbered markers with textured grip zones"],
        ["Donning Method", "Often requires separate donning device or assistance", "Designed for independent donning, no separate tools needed"],
        ["Seated Donning", "Difficult\u2014requires significant forward bend", "Designed for seated use with less forward bend"],
        ["Hand Strength Required", "High grip force needed to stretch fabric", "Reduced grip force\u2014numbered markers and grip zones distribute effort"],
        ["Compression Level", "Varies by product", "8-15, 15-20, or 20-30 mmHg graduated compression"]
      ],
      closing: "Designed with feedback from occupational therapists and people who\u2019ve struggled with traditional compression socks."
    },
    proofAndTrust: {
      title: "What People Are Saying",
      testimonials: [
        { quote: "I was ready to give up on compression socks. This tool changed that. I can do it myself now.", author: "Wear Tester", context: "Pre-launch participant" },
        { quote: "My hip surgery restrictions meant I couldn\u2019t bend to reach my feet. This got me through recovery without needing help every morning.", author: "Wear Tester", context: "Pre-launch participant" },
        { quote: "I recommend this to patients who need to maintain independence with lower-body dressing. The ergonomic handle makes a real difference for arthritic hands.", author: "Occupational Therapist Advisor", context: "Clinical Advisor" }
      ],
      clinicalInput: "Designed with guidance from occupational therapists who work with patients recovering from surgery, managing arthritis, and adapting to mobility changes.",
      trustIndicators: [
        "Currently in wear testing with 40+ participants",
        "30-day satisfaction guarantee",
        "Durable construction rated for daily use"
      ]
    },
    materialsAndCare: {
      title: "What It\u2019s Made Of",
      materials: [
        { label: "Fabric Blend", description: "78% Nylon / 22% Spandex with moisture-wicking properties. Durable, breathable, and comfortable for all-day wear." },
        { label: "Compression Level", description: "Available in 8-15, 15-20, or 20-30 mmHg graduated compression\u2014medical-grade performance with adaptive features built in." },
        { label: "Numbered Markers", description: "Built-in #2, #3, and blue dot guide markers with textured grip zones. Reinforced construction for durability and easy grip." },
        { label: "Wide Opening", description: "3x wider than standard compression socks. Reduces force needed to stretch sock over foot." },
        { label: "Sizing", description: "Available in S through XXL with wide-calf options. Extended sizing for inclusive fit." }
      ],
      care: {
        cleaning: [
          "Machine wash cold on gentle cycle",
          "Air dry or tumble dry low",
          "Do not use bleach or fabric softener",
          "The adaptive features (wide opening, numbered markers) are part of the sock construction and don\u2019t require special care"
        ],
        storage: [
          "Store in a dry place",
          "Keep pairs together for easy rotation"
        ],
        durability: "With daily wear and proper care, compression socks typically maintain effectiveness for 3-6 months. The adaptive features are built into the construction and last as long as the sock itself."
      }
    },
    faqs: [
      { question: "Is this the same compression level as regular medical-grade socks?", answer: "Yes. DonnEase\u2122 Socks are available in 8-15, 15-20, and 20-30 mmHg graduated compression\u2014the same medical-grade levels as standard compression socks. The difference is in the adaptive features (wide opening, numbered guide system), not the compression efficacy." },
      { question: "Can I use these while seated in a wheelchair?", answer: "Yes. Many wheelchair users find the wide opening and numbered markers make it possible to put on compression socks before transferring or while seated. The design reduces the forward bend typically required." },
      { question: "Do the numbered markers stay in place or do I remove them?", answer: "The numbered markers are integrated into the sock fabric and stay in place during wear. They\u2019re part of the sock\u2019s construction and aren\u2019t visible or uncomfortable during daily use." },
      { question: "Will this work with one hand?", answer: "The wide opening and numbered markers make one-handed donning easier than standard compression socks, though some two-handed coordination may still be helpful depending on your specific limitations." },
      { question: "Are these machine washable?", answer: "Yes. Machine wash cold on gentle cycle. The adaptive features (wide opening, numbered markers) are part of the sock construction and don\u2019t require special care. Air dry or tumble dry low." },
      { question: "How long do they last?", answer: "With daily wear and proper care, compression socks typically maintain effectiveness for 3-6 months. The adaptive features are built into the construction and last as long as the sock itself." },
      { question: "What if they don\u2019t work for me?", answer: "We offer a 30-day fit guarantee. If the DonnEase\u2122 Socks don\u2019t meet your needs, return them for a full refund or exchange. Contact our team if you\u2019d like sizing help before returning." },
      { question: "Do I need to buy anything else to use these?", answer: "No. The DonnEase\u2122 Sock is designed to be used independently\u2014no separate tools or devices required. The adaptive features are built into the sock itself." }
    ]
  },
  'Bundle': {
    subheadline: "Complete kits designed for mobility and dexterity challenges. Medical-grade compression with adaptive features\u2014bundled for convenience and value.",
    keyBenefits: [
      { icon: 'package', text: "Pre-coordinated solutions \u2013 No guessing which products work together" },
      { icon: 'check-circle', text: "Always have a clean pair \u2013 Multiple socks mean continuous wear during laundry" },
      { icon: 'award', text: "Better value \u2013 Save up to 12% vs. buying items separately" },
      { icon: 'hand', text: "Independent donning \u2013 DonnEase\u2122 Socks with adaptive features + standard Compression Socks" },
      { icon: 'ruler', text: "Extended sizing included \u2013 S through XXL, wide-calf options available" }
    ],
    supportingDescription: "Get started with everything you need in one order. DonnEase\u2122 Socks with adaptive features for easier donning, plus standard Compression Socks for variety. No separate trips. No wondering if you bought the right combination. Just independence, delivered.",
    bundles: {
      'starter-kit': {
        name: "Starter Kit",
        savingsCallout: "Save 11% vs. buying separately",
        whatsIncluded: [
          "1 pair DonnEase\u2122 Adaptive Compression Socks (you select compression level, size, and color)",
          "1 pair AccessAble Compression Socks (you select compression level, size, and color)",
          "Digital Care Guide \u2013 How to care for compression socks"
        ],
        bestFor: [
          "First-time adaptive compression users",
          "Testing if DonnEase\u2122 wide opening and numbered guide system work for you",
          "Single-person use with frequent laundry access"
        ],
        price: "$65",
        originalPrice: "$73",
        savings: "$8 (11%)"
      },
      'daily-wear-bundle': {
        name: "Daily Freedom Bundle",
        savingsCallout: "Save 15% vs. buying separately",
        badge: "Most Popular",
        whatsIncluded: [
          "3 pairs DonnEase\u2122 Adaptive Compression Socks (you select compression levels, sizes, and colors)",
          "Digital Care Guide \u2013 Washing, drying, and maintenance instructions"
        ],
        customizationNote: "Each pair can be a different compression level, size, and color",
        bestFor: [
          "Daily compression wear with backup pairs",
          "Having a clean pair during laundry rotation",
          "Households with one primary user",
          "Gift-giving (caregiver to family member)"
        ],
        price: "$99",
        originalPrice: "$117",
        savings: "$18 (15%)"
      },
      'complete-independence-kit': {
        name: "Complete Independence Kit",
        savingsCallout: "Save 11% vs. buying separately",
        badge: "Best Value",
        whatsIncluded: [
          "3 pairs DonnEase\u2122 Adaptive Compression Socks (you select compression levels, sizes, and colors)",
          "2 pairs AccessAble Compression Socks (you select compression levels, sizes, and colors)",
          "Digital Care Guide \u2013 Complete maintenance and usage instructions",
          "Priority support access \u2013 Direct line to our team for sizing or usage questions"
        ],
        customizationNote: "Each pair can be a different compression level, size, and color. All selectors keyboard-navigable with clear ARIA labels.",
        bestFor: [
          "Extended wear schedules (daily compression)",
          "Minimizing laundry frequency",
          "Households with multiple users",
          "Maximum independence and flexibility",
          "Comparing adaptive vs. standard compression features"
        ],
        price: "$165",
        originalPrice: "$185",
        savings: "$20 (11%)"
      }
    },
    whyBundle: {
      title: "Why Bundle?",
      benefits: [
        { icon: 'package', title: "Convenience", description: "Everything coordinated in one order. No guessing which products work together. Start using them the day they arrive." },
        { icon: 'check-circle', title: "Rotation", description: "Multiple pairs mean you always have clean socks ready. Wash one pair while wearing another. No gaps in your compression routine." },
        { icon: 'award', title: "Better Value", description: "Save up to 12% compared to buying items separately. Better price per pair, plus you get both DonnEase\u2122 Socks and Compression Socks in one coordinated bundle." },
        { icon: 'hand', title: "Independence", description: "The combination of DonnEase\u2122 Socks (adaptive features) + Compression Socks (standard premium) = maximum flexibility. Try both to see which works best for your needs." },
        { icon: 'shield', title: "Backup Coverage", description: "Extra pairs mean you\u2019re not stuck if one pair is in the wash, lost, or needs replacement. Continuity matters." },
        { icon: 'heart', title: "Gift-Ready", description: "Pre-coordinated kits make thoughtful, practical gifts for family members who need compression. Everything they need to get started." }
      ]
    },
    comparisonTable: {
      title: "Bundles vs. Buying Separately",
      headers: ["What You Get", "Buy Separately", "Starter Kit", "Daily Freedom", "Complete Independence"],
      rows: [
        ["DonnEase\u2122 Socks (pairs)", "1 pair", "1 pair", "3 pairs", "3 pairs"],
        ["Compression Socks (pairs)", "1 pair", "1 pair", "\u2014", "2 pairs"],
        ["Total Pairs", "\u2014", "2 pairs", "3 pairs", "5 pairs"],
        ["Care Guide", "Not included", "Included", "Included", "Included"],
        ["Priority Support", "Standard", "Standard", "Standard", "Included"],
        ["Savings", "\u2014", "Save 11%", "Save 15%", "Save 11%"]
      ],
      bottomLine: "The more you bundle, the more you save\u2014and the more flexibility you have for daily wear."
    },
    whyBundlesExist: {
      title: "Independence + Rotation Logic",
      problem: {
        title: "The Independence Problem:",
        description: "Medical-grade compression socks are often prescribed for daily wear. But if you only have one pair and it\u2019s in the wash, you\u2019re stuck. If putting them on is difficult, you might skip days\u2014which defeats the purpose."
      },
      solution: {
        title: "The Rotation Solution:",
        description: "Multiple pairs mean continuous wear. One pair on your legs. One pair in the laundry. One pair clean and ready. No gaps. No excuses."
      },
      bridge: {
        title: "The DonnEase\u2122 Advantage:",
        description: "DonnEase\u2122 Socks have adaptive features (wide opening, numbered guide system) built in. Bundles include both DonnEase\u2122 Socks and standard Compression Socks, so you can try both and see which works best for your needs."
      },
      reasons: [
        "You don\u2019t have to calculate which combination makes sense",
        "Better value than buying items one at a time",
        "Everything arrives together\u2014you\u2019re set up from day one",
        "Removes decision fatigue when you\u2019re already dealing with mobility challenges"
      ],
      closing: "This isn\u2019t about selling you more. It\u2019s about making sure you have what you need to actually use compression independently and consistently."
    },
    bundleFeatures: {
      title: "What Makes These Bundles Work",
      features: [
        { icon: 'activity', title: "Adaptive Compression Design", description: "All socks feature 3x wider opening, built-in numbered markers, and graduated compression (8-15, 15-20, or 20-30 mmHg). Medical-grade performance with ease-of-use features built in." },
        { icon: 'hand', title: "Numbered Guide System", description: "Built-in numbered markers (#2, #3, blue dot) with textured grip zones integrated into the sock design. Designed for limited grip strength\u2014no separate tools needed. Works while seated\u2014no bending or balance required." },
        { icon: 'ruler', title: "Mix-and-Match Sizing", description: "Each pair in multi-pair bundles can be a different size or color. Useful if your legs are different sizes, or if you\u2019re sharing with someone else." },
        { icon: 'package', title: "Coordinated Care", description: "DonnEase\u2122 Socks and Compression Socks are designed to work together. Both provide the same medical-grade compression, but DonnEase\u2122 Socks have adaptive features built in. No compatibility guessing." },
        { icon: 'users', title: "Digital Care Guide Included", description: "Step-by-step washing instructions, replacement timeline guidance, troubleshooting tips. Delivered as downloadable PDF\u2014accessible format included." },
        { icon: 'credit-card', title: "FSA/HSA Eligible", description: "Entire bundle qualifies for FSA/HSA reimbursement. Keep your receipt for submission." }
      ]
    },
    howToUse: {
      title: "Getting Started with Your Bundle",
      steps: [
        { number: 1, title: "Unpack and Organize", description: "You\u2019ll receive your DonnEase\u2122 Socks and Compression Socks in one shipment. Download the digital care guide from your order confirmation email." },
        { number: 2, title: "Try the Socks First", description: "Start by putting on the compression socks using just the wide-mouth opening and numbered markers. See how they feel. Many users find this sufficient." },
        { number: 3, title: "Try Both Sock Types", description: "Start with DonnEase\u2122 Socks (adaptive features) to see how the wide opening and numbered markers work for you. Then try standard Compression Socks for comparison. Both provide the same medical-grade compression." },
        { number: 4, title: "Establish Your Rotation", description: "If you have multiple pairs, wear one while the other is in the wash. Mark your laundry day so you always have clean socks ready." },
        { number: 5, title: "Replace as Needed", description: "Compression socks maintain effectiveness for 3-6 months with daily wear. When you need replacements, reorder individual pairs or another bundle." }
      ],
      videoLink: null
    },
    proofAndTrust: {
      title: "What Bundle Users Are Saying",
      testimonials: [
        { quote: "Having two pairs changed everything. I\u2019m not panicking on laundry day anymore. One pair is always clean and ready.", author: "Wear Tester", context: "Daily Freedom Bundle" },
        { quote: "I bought the Complete Independence Kit because I travel a lot. Having multiple pairs of DonnEase\u2122 Socks means I always have clean compression ready, whether I\u2019m home or traveling.", author: "Wear Tester", context: "Complete Independence Kit" },
        { quote: "My physical therapist recommended compression after my knee replacement. This bundle had everything I needed to start following their guidance independently.", author: "Wear Tester", context: "Starter Kit" },
        { quote: "I bought this for my father. The fact that it came with DonnEase\u2122 Socks (with the adaptive features) and multiple pairs meant he didn\u2019t have to ask me for help every morning. That independence matters to him.", author: "Wear Tester", context: "Caregiver" }
      ],
      ratings: {
        'starter-kit': "Reviews coming after launch",
        'daily-freedom-bundle': "Reviews coming after launch",
        'complete-independence-kit': "Reviews coming after launch"
      }
    },
    faqs: [
      { question: "Can I choose different sizes for each pair of socks?", answer: "Yes. Each pair has its own size and color selector. Useful if your legs are different sizes, or if you\u2019re sharing the bundle with someone else." },
      { question: "Can I mix compression levels (15-20 and 20-30)?", answer: "Yes. Each pair in your bundle can be a different compression level, size, and color. Select your preferences for each pair individually." },
      { question: "Do all bundles include the same products?", answer: "Starter Kit includes 1 pair DonnEase\u2122 Socks + 1 pair Compression Socks (2 pairs total). Daily Freedom includes 3 pairs DonnEase\u2122 Socks (3 pairs total). Complete Independence includes 3 pairs DonnEase\u2122 Socks + 2 pairs Compression Socks (5 pairs total)." },
      { question: "Can I return or exchange bundle items separately?", answer: "You can exchange sock sizes within 30 days at no charge. If you\u2019re not satisfied with the bundle overall, you can return the entire bundle for a refund. We don\u2019t break up bundles for partial returns." },
      { question: "Are bundles FSA/HSA eligible?", answer: "Yes. The entire bundle purchase qualifies. Keep your receipt for reimbursement submission." },
      { question: "How often should I replace compression socks?", answer: "With daily wear, compression socks maintain effectiveness for 3-6 months. Having multiple pairs extends the life of each individual pair since you rotate wear." },
      { question: "What if I only want DonnEase\u2122 Socks, not Compression Socks?", answer: "You can purchase DonnEase\u2122 Socks individually. Bundles include both types so you can try both and see which works best for your needs. Or contact us\u2014we can create a custom bundle for you." },
      { question: "Can I gift this to someone?", answer: "Yes. Bundles make excellent gifts. You can enter the recipient\u2019s shipping address at checkout. We include a packing slip without pricing if you note it\u2019s a gift in the order comments." },
      { question: "What\u2019s in the digital care guide?", answer: "The care guide includes: washing and drying instructions, sock replacement timeline, troubleshooting for common fit issues, and video tutorial links for putting on DonnEase\u2122 Socks." },
      { question: "Do you offer larger bundles for facilities or multiple users?", answer: "For bulk orders (5+ bundles), see our AccessAble Pro page. We offer volume pricing and custom assortments for clinics, facilities, and medical suppliers." }
    ]
  },
};
