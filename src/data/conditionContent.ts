// Condition-specific content for collection pages
// Ported from Lovable: ConditionEducation, ConditionRecommendations, ConditionRelatedGuides, ConditionCustomerStories

export type ConditionType = 'arthritis' | 'diabetes' | 'limited-mobility' | 'post-surgery' | 'wheelchair-users';

// --- Education Content ---

export interface ConditionContent {
  title: string;
  headline: string;
  subheadline: string;
  educationalContent: {
    paragraphs: string[];
    videoTitle: string;
    videoLink?: string;
    sourceCitation?: { text: string; url: string };
  };
  challenges: Array<{ title: string; description: string }>;
  howItHelps: {
    whyCompression: string;
    whatAdaptiveFeatures: string;
    features: Array<{ feature: string; description: string }>;
    disclaimer: string;
  };
  practicalTips: Array<{ title: string; description: string }>;
  caregiverNotes?: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const conditionContent: Record<ConditionType, ConditionContent> = {
  'post-surgery': {
    title: 'Post-Surgical Recovery',
    headline: 'Understanding Post-Surgical Compression and Mobility',
    subheadline: 'Designed for comfort and independence when bending and reaching are restricted.',
    educationalContent: {
      paragraphs: [
        'After joint replacement, vascular procedures, or other surgeries, many healthcare providers recommend graduated compression socks as part of recovery. The challenge: your provider says to wear them daily, but your surgical restrictions make putting them on nearly impossible.',
        'Post-surgical movement restrictions are common. You may not be cleared to bend past 90 degrees. Your hands might not have full strength yet. Balance might be uncertain. These limitations make traditional compression sock donning difficult or impossible without help.',
        'Wide-mouth DonnEase\u2122 Socks reduce the flexibility needed to get your foot in. Built-in numbered markers require less grip strength than pulling bare compression fabric. The design allows seated donning, respecting your surgical restrictions while following your provider\'s compression guidance.',
      ],
      videoTitle: 'Putting On Compression Socks After Surgery',
      videoLink: '#',
      sourceCitation: {
        text: 'For more information on post-surgical compression recommendations, visit the American College of Surgeons patient education resources.',
        url: 'https://www.facs.org/',
      },
    },
    challenges: [
      { title: 'Bending Restrictions', description: 'Hip precautions (common after hip replacement) often limit bending to 90 degrees. Reaching your feet becomes impossible. Traditional sock donning requires bending you\'re not cleared to do.' },
      { title: 'Limited Grip Strength', description: 'Surgery affects your whole body. Even if the surgery wasn\'t on your hands, you may have reduced grip strength during recovery. Tight compression fabric is hard to hold and manipulate.' },
      { title: 'Reduced Flexibility', description: 'Knee replacement, spinal surgery, or abdominal procedures can limit your range of motion. Getting a sock over your heel requires ankle flexibility you may not have immediately after surgery.' },
      { title: 'Balance Concerns', description: 'Standing on one leg to put on a sock requires balance. Post-surgical pain, medication, or surgical site restrictions can make balance uncertain. Risk of falling is real.' },
      { title: 'Fatigue', description: 'Recovery takes energy. Simple tasks feel exhausting. Wrestling with compression socks early in recovery can drain energy you need for physical therapy and recovery.' },
      { title: 'Independence vs. Safety', description: 'You want to do things yourself. But your provider\'s restrictions are there for a reason. You need methods that respect both independence and safety.' },
    ],
    howItHelps: {
      whyCompression: 'Many healthcare providers recommend graduated compression socks after joint replacement, vascular procedures, or surgeries that require extended periods of limited mobility. Compression is commonly part of post-surgical protocols. Your provider will specify compression level (often 15-20 or 20-30 mmHg) and duration of wear.',
      whatAdaptiveFeatures: 'DonnEase\u2122 Socks are compression socks with built-in adaptive features designed to make following your provider\'s compression guidance physically possible when you have movement restrictions.',
      features: [
        { feature: 'Wide-mouth opening', description: 'Reduces ankle flexibility needed to get your foot in. 3x wider than standard compression sock openings.' },
        { feature: 'Built-in numbered markers', description: 'Textured grip zones at the top edge. Easier to grip than slippery compression material. Requires less fine motor control.' },
        { feature: 'Seated-friendly design', description: 'Put them on while sitting on bed edge or chair. Reduces forward bending required. No standing balance needed.' },
        { feature: 'Graduated 20-30 mmHg compression', description: 'Same medical-grade compression as prescription brands. Adaptive features don\'t compromise compression efficacy.' },
      ],
      disclaimer: 'These features aren\'t medical devices. They make it easier to put on compression socks yourself when your body has surgical restrictions.',
    },
    practicalTips: [
      { title: 'Tip 1: Put socks on before getting out of bed', description: 'Sit on the edge of your bed. Put them on while seated using the wide opening and numbered markers. You have support from the bed and don\'t need to balance on one leg.' },
      { title: 'Tip 2: Use bed or chair height strategically', description: 'Sit where your feet can comfortably rest flat or nearly flat. Reduces how far you need to reach forward. Chair height matters for limited hip flexion.' },
      { title: 'Tip 3: Pre-position the night before', description: 'Set up your DonnEase\u2122 Socks on your nightstand the night before. One less trip across the room in the morning when you\'re stiffest.' },
      { title: 'Tip 4: Practice before surgery (if possible)', description: 'If you know compression will be part of your recovery protocol, practice using DonnEase\u2122 Socks before surgery. Muscle memory helps when you\'re post-op.' },
      { title: 'Tip 5: Follow your provider\'s timeline', description: 'Don\'t push past your movement restrictions to put on socks. If a method hurts or violates your precautions, stop and ask your provider or physical therapist for guidance.' },
      { title: 'Tip 6: Have two pairs ready', description: 'Recovery is exhausting. Don\'t add laundry stress. Having two pairs means you can rotate them without interrupting your compression schedule.' },
    ],
    caregiverNotes: [
      { title: 'Tip 1: Let them do it', description: 'If they can put on DonnEase\u2122 Socks independently using the wide opening and numbered markers, let them. Independence matters for recovery confidence. Offer to hand them the sock or help position their foot, but let them do the actual donning if they\'re able.' },
      { title: 'Tip 2: Set up for success', description: 'Put clean DonnEase\u2122 Socks where they can reach them without bending or twisting. Nightstand height works well. Remove barriers to independence.' },
      { title: 'Tip 3: Watch for violations', description: 'If you see them bending past their restrictions or struggling in unsafe ways, intervene. Offer to help directly rather than watching them risk re-injury.' },
      { title: 'Tip 4: Respect their timeline', description: 'Some days are harder than others. If they need help today but wanted to do it themselves yesterday, that\'s normal recovery. Don\'t frame it as regression.' },
    ],
    faqs: [
      { question: 'When can I start using DonnEase\u2122 Socks after surgery?', answer: 'Check with your healthcare provider. Most patients can use adaptive compression socks as soon as compression is recommended, often within the first few days post-op. Your provider knows your specific situation and restrictions.' },
      { question: 'What if I still can\'t reach my feet to put on DonnEase\u2122 Socks?', answer: 'If you cannot safely reach your feet even with the wide opening and seated positioning, ask for help. Your physical therapist can teach a caregiver safe techniques or suggest positioning strategies. Independence is important, but safety comes first.' },
      { question: 'How long will I need compression after surgery?', answer: 'This varies by surgery type and individual recovery. Your surgeon or physical therapist will specify duration, often weeks to months. Follow their guidance for compression level and wear schedule.' },
      { question: 'Can I sleep in DonnEase\u2122 Socks?', answer: 'Check with your provider. Compression is typically worn during waking hours and removed at night, but post-surgical protocols vary. Don\'t guess. Ask your care team about overnight wear.' },
      { question: 'Will DonnEase\u2122 Socks work with my knee brace / walking boot / other equipment?', answer: 'The wide-mouth opening makes it easier to position socks around braces. Many post-surgical patients use compression with orthopedic equipment. If you have specific compatibility questions, contact our team.' },
    ],
  },

  'arthritis': {
    title: 'Limited Hand Strength / Arthritis',
    headline: 'Understanding Limited Hand Strength and Daily Dressing',
    subheadline: 'Designed for comfort and ease with limited hand dexterity and grip strength.',
    educationalContent: {
      paragraphs: [
        'Arthritis, reduced grip strength, hand pain, tremors, stroke recovery, or neurological conditions can make gripping and pulling tight fabric difficult. Compression socks, which are designed to be snug, become nearly impossible to put on with traditional methods.',
        'The daily challenge isn\'t whether compression socks might be helpful for circulation support during long periods of sitting or standing. The challenge is: your hands hurt, and standard compression socks require strength and dexterity your hands don\'t have right now.',
        'Wide-mouth openings reduce the pulling force needed. Built-in numbered markers give you something substantial to grip instead of slippery fabric. Reinforced grip zones transfer the work from your finger joints to your larger arm muscles. These features are designed specifically for hands that hurt.',
      ],
      videoTitle: 'Putting On Compression Socks With Arthritis',
      videoLink: '#',
      sourceCitation: {
        text: 'For more information on arthritis and hand function, visit the Arthritis Foundation\'s resources on daily living adaptations.',
        url: 'https://www.arthritis.org/',
      },
    },
    challenges: [
      { title: 'Reduced Grip Force', description: 'Arthritis, carpal tunnel, stroke recovery, or general hand weakness means you can\'t generate the grip force needed to pull tight compression fabric. Your hands fatigue quickly.' },
      { title: 'Pain With Gripping', description: 'Squeezing tight fabric hurts. Your joints ache. You can do it once, but putting on compression socks every morning means repeated painful gripping.' },
      { title: 'Swollen Fingers or Joints', description: 'Swelling makes it harder to close your hand around fabric. Pinching and pulling become difficult. Standard compression sock fabric is too narrow to grip comfortably.' },
      { title: 'Tremor or Coordination Challenges', description: 'Parkinson\'s, essential tremor, or post-stroke coordination issues make fine motor tasks difficult. Threading your foot into a narrow sock opening requires precision your hands don\'t have.' },
      { title: 'Morning Stiffness', description: 'Hands are often stiffest in the morning, exactly when you need to put on compression socks. Waiting for stiffness to ease means delaying your day.' },
      { title: 'One-Handed Dressing', description: 'Stroke recovery or other conditions may mean you dress with one hand. Standard compression socks require two-handed coordination.' },
    ],
    howItHelps: {
      whyCompression: 'Many people with arthritis, limited mobility, or circulation concerns use compression socks for comfort during long periods of sitting or standing. Healthcare providers sometimes recommend graduated compression for daily wear. The problem: standard compression socks weren\'t designed for hands with limited strength.',
      whatAdaptiveFeatures: 'DonnEase\u2122 Socks have built-in adaptive features that reduce the grip strength and fine motor control needed for donning compression.',
      features: [
        { feature: 'Wide-mouth opening (3x standard width)', description: 'Reduces force needed to stretch the opening over your foot. Less gripping and pulling required from your hands.' },
        { feature: 'Built-in numbered markers', description: 'Textured grip zones you can hook your fingers into. Easier to grip than bare compression fabric. Distributes pulling force across your whole hand, not just fingertips.' },
        { feature: 'Reinforced grip zone construction', description: 'Numbered markers are reinforced to handle the stress of pulling. You use larger arm muscles instead of just finger strength.' },
        { feature: 'Graduated 20-30 mmHg compression', description: 'Same medical-grade compression as standard socks. Adaptive features don\'t compromise compression efficacy.' },
      ],
      disclaimer: 'These features aren\'t a medical solution for arthritis or hand conditions. They make it physically possible to put on compression socks when your hands have limited strength or dexterity.',
    },
    practicalTips: [
      { title: 'Tip 1: Start with the wide opening', description: 'Try putting the socks on using just the wide opening first. Slide your foot in with less resistance. Many users find this sufficient without needing the numbered markers.' },
      { title: 'Tip 2: Use numbered markers for the pull-up phase', description: 'Once your foot is in, grip the numbered markers to pull the sock up your leg. Use the grip zones instead of pinching fabric. Use your arm muscles to pull.' },
      { title: 'Tip 3: Put socks on in the morning', description: 'Your hands may be stiffer in the morning, but that\'s also when you typically need to put on socks. Build the routine early so you don\'t forget later.' },
      { title: 'Tip 4: Sit down', description: 'Don\'t try to put on compression socks while standing. Sit on your bed or a chair. Use your lap for stability if needed.' },
      { title: 'Tip 5: Use one hand if needed', description: 'If one hand is stronger, let it do more work. Use your weaker hand to stabilize while your stronger hand grips the numbered marker.' },
      { title: 'Tip 6: Take breaks', description: 'If your hands fatigue, pause. You don\'t have to get both socks on in one continuous effort. Do one foot, rest, then do the other.' },
    ],
    faqs: [
      { question: 'Will DonnEase\u2122 Socks work with severe arthritis?', answer: 'Many people with severe hand arthritis use DonnEase\u2122 Socks successfully. The wide opening and numbered markers reduce grip strength needed compared to standard compression. If you\'re concerned about whether these will work for your specific hand limitations, contact us and we can discuss your situation.' },
      { question: 'Can I use these with one hand?', answer: 'The wide opening and numbered markers make one-handed donning easier than standard compression socks. Some two-handed coordination may still be helpful depending on your specific limitations, but the design reduces the fine motor skills needed.' },
      { question: 'Do the numbered markers make the socks look medical or institutional?', answer: 'The numbered markers are integrated into the sock design and are discreet once the sock is on. They\'re functional, not decorative, but they don\'t look clinical. Neutral colorways (black, navy, beige) are professional and discreet.' },
      { question: 'What if my hands swell throughout the day?', answer: 'If morning is your best hand function time, put your DonnEase\u2122 Socks on then. The socks themselves don\'t require grip strength to wear, only to put on. Once they\'re on, hand swelling won\'t affect wear comfort.' },
      { question: 'Can I wash these in the washing machine?', answer: 'Yes. Machine wash cold, gentle cycle. The numbered markers and wide opening are part of the sock construction and don\'t require special care. Air dry or tumble dry low to preserve compression elasticity.' },
    ],
  },

  'limited-mobility': {
    title: 'Limited Mobility & Flexibility',
    headline: 'Understanding Limited Mobility and Daily Dressing',
    subheadline: 'Designed for comfort and independence when bending, reaching, or balance is challenging.',
    educationalContent: {
      paragraphs: [
        'Limited hip flexibility, knee range of motion, back pain, balance concerns, wheelchair use, or chronic mobility challenges can make reaching your feet difficult or impossible. Compression socks require you to bend, balance on one foot, and manipulate tight fabric. All things that may not be physically accessible for you.',
        'The challenge isn\'t whether compression might support comfort during long periods of sitting. The challenge is: your body doesn\'t bend that way anymore, and standard compression socks assume you can reach your feet easily.',
        'DonnEase\u2122 Socks with wide-mouth openings reduce how far you need to bend forward to reach your feet. Built-in numbered markers give you textured grip zones to hold when you can\'t reach the sock body. The design allows seated donning, so balance is no longer a barrier. These features are designed for bodies with limited mobility and flexibility.',
      ],
      videoTitle: 'Putting On Compression Socks With Limited Flexibility',
      videoLink: '#',
      sourceCitation: {
        text: 'For more information on mobility limitations and adaptive equipment, visit the National Institute on Aging\'s resources on assistive devices.',
        url: 'https://www.nia.nih.gov/health/assistive-devices-and-technology',
      },
    },
    challenges: [
      { title: 'Can\'t Reach Your Feet', description: 'Hip arthritis, back pain, limited spinal flexibility, or wheelchair use means bending forward to reach your feet is difficult or impossible. Traditional sock donning requires that reach.' },
      { title: 'Limited Hip Flexion', description: 'Your hips don\'t bend past a certain point. Bringing your foot up toward your body (to put on a sock in your lap) isn\'t possible. You need the sock to come to you, not the other way around.' },
      { title: 'Knee Stiffness or Pain', description: 'Limited knee range of motion makes it hard to position your foot. Bending your knee fully to bring your foot within reach might not be comfortable or possible.' },
      { title: 'Balance Concerns', description: 'Standing on one leg while putting a sock on the other requires balance. If you use a walker, cane, or wheelchair, or if balance is uncertain, standing on one leg isn\'t safe.' },
      { title: 'Back Pain or Restrictions', description: 'Bending forward to reach your feet can trigger back pain. If you have chronic back issues or spinal conditions, forward bending might be restricted by your provider.' },
      { title: 'Seated Positioning', description: 'If you use a wheelchair or spend most of your time seated, reaching your feet from a seated position requires significant flexibility. Standard sock donning assumes you\'re standing or can easily lift your foot.' },
    ],
    howItHelps: {
      whyCompression: 'Many people who spend extended periods sitting (wheelchair users, desk workers, travelers) or who have limited mobility use compression socks for comfort and support during long wear. Healthcare providers sometimes recommend graduated compression for daily use. The problem: standard compression socks require flexibility and reach many people don\'t have.',
      whatAdaptiveFeatures: 'DonnEase\u2122 Socks have built-in adaptive features that make it physically possible to put on compression socks when your body has limited flexibility, reach, or balance.',
      features: [
        { feature: 'Wide-mouth opening', description: 'Reduces ankle flexibility needed to slide your foot in. 3x wider than standard compression openings. Less forward bending required to position the sock.' },
        { feature: 'Built-in numbered markers', description: 'Textured grip zones at the top edge. You can reach these while seated even if you can\'t reach the main sock body. Gives you leverage to pull the sock up your leg.' },
        { feature: 'Seated-friendly design', description: 'Put them on entirely from seated position: bed edge, chair, or wheelchair. No standing balance required. Reduces forward bend compared to standard compression.' },
        { feature: 'Graduated 20-30 mmHg compression', description: 'Same medical-grade compression as standard socks. Adaptive features don\'t compromise compression efficacy.' },
      ],
      disclaimer: 'These features don\'t increase your flexibility or address mobility limitations medically. They make it possible to put on compression socks without requiring flexibility or reach you don\'t have.',
    },
    practicalTips: [
      { title: 'Tip 1: Always sit down', description: 'Don\'t attempt to put on DonnEase\u2122 Socks while standing if balance is uncertain. Sit on your bed, a stable chair, or in your wheelchair. Seated donning is built into the design.' },
      { title: 'Tip 2: Use bed or chair height strategically', description: 'Sit where your feet can rest flat or nearly flat. This reduces how far forward you need to bend. A slightly higher seat height can make a significant difference for limited hip flexion.' },
      { title: 'Tip 3: Grip the numbered markers early', description: 'As soon as your foot is in the wide opening, reach for the numbered markers. Use these textured grip zones for the pull-up phase instead of trying to grip the sock body.' },
      { title: 'Tip 4: Use bed edge for stability', description: 'Sitting on the edge of your bed gives you something to push against. You can use your arms to stabilize yourself while donning. The bed surface is also easier to reach than the floor.' },
      { title: 'Tip 5: Keep socks within reach', description: 'Store clean DonnEase\u2122 Socks where you can access them without excessive bending: bedside table, wheelchair bag, bathroom shelf at reachable height.' },
      { title: 'Tip 6: Consider timing', description: 'If your mobility varies throughout the day (stiffer in morning, better after moving), put socks on when your body is at its best. There\'s no rule that says they must go on first thing in the morning.' },
    ],
    caregiverNotes: [
      { title: 'Tip 1: Help with positioning, not donning', description: 'If they need help getting their foot closer to their hands, provide that positioning assistance. But let them grip the numbered markers and pull the sock up if they\'re able. Positioning help preserves donning independence.' },
      { title: 'Tip 2: Understand their range of motion', description: 'Know what movements are difficult or restricted. Don\'t assume they can bend forward just because they could last month. Mobility can change. Respect current limitations.' },
      { title: 'Tip 3: Watch for unsafe workarounds', description: 'If you see them bending in ways that cause pain or risk, intervene. Offer to help directly rather than watching them struggle unsafely.' },
    ],
    faqs: [
      { question: 'Will DonnEase\u2122 Socks work with limited hip flexion?', answer: 'The wide opening and numbered markers reduce hip flexion required compared to standard compression. They won\'t remove the need for forward bending entirely, but they significantly reduce how far you need to bend. Seat height matters: higher seats reduce bend angle.' },
      { question: 'Can I use these with back pain restrictions?', answer: 'Many people with chronic back pain use DonnEase\u2122 Socks successfully. The key is reducing forward bending. Seated donning with strategic seat height helps. If you\'re not cleared to bend forward at all, you may need positioning assistance, but you can still pull the socks up yourself.' },
      { question: 'What if my balance is unstable?', answer: 'Use seated methods only. Do not attempt to stand on one leg. Sitting on your bed or a chair removes balance from the equation. The wide opening and numbered markers are designed for seated donning specifically.' },
    ],
  },

  'diabetes': {
    title: 'Diabetes',
    headline: 'Understanding Diabetes and Foot Health',
    subheadline: 'Built for all-day comfort and foot health.',
    educationalContent: {
      paragraphs: [
        'Diabetes affects circulation and nerve function in the feet, making proper foot care essential. The American Diabetes Association emphasizes the importance of daily foot inspections and appropriate footwear.',
        'Comfortable, well-fitting products that don\'t restrict circulation are key for people managing diabetes. Avoid products with tight bands or seams that could cause pressure points.',
        'Our designs prioritize all-day comfort with seamless construction and graduated support, suitable for those focused on foot health and circulation.',
      ],
      videoTitle: 'Daily Foot Care for Diabetes Management',
      sourceCitation: {
        text: 'American Diabetes Association: Foot Complications',
        url: 'https://diabetes.org/diabetes/foot-complications',
      },
    },
    challenges: [],
    howItHelps: {
      whyCompression: '',
      whatAdaptiveFeatures: '',
      features: [],
      disclaimer: '',
    },
    practicalTips: [],
    faqs: [],
  },

  'wheelchair-users': {
    title: 'Wheelchair Users',
    headline: 'Mobility-Focused Design for Wheelchair Users',
    subheadline: 'Designed for comfort and independence when seated.',
    educationalContent: {
      paragraphs: [
        'Wheelchair users have unique needs when it comes to compression and mobility products. Prolonged sitting, pressure points, and circulation considerations all factor into product selection.',
        'Products for wheelchair users should be easy to put on while seated, provide consistent support without restricting movement, and work well with existing mobility equipment.',
        'Our designs are tested by wheelchair users to ensure compatibility with various chair types, cushions, and daily routines. Built for active lifestyles and all-day comfort.',
      ],
      videoTitle: 'Adaptive Solutions for Wheelchair Users',
      sourceCitation: {
        text: 'Christopher & Dana Reeve Foundation: Daily Living',
        url: 'https://www.christopherreeve.org/living-with-paralysis/daily-living',
      },
    },
    challenges: [],
    howItHelps: {
      whyCompression: '',
      whatAdaptiveFeatures: '',
      features: [],
      disclaimer: '',
    },
    practicalTips: [],
    caregiverNotes: [
      { title: 'Tip 1: Respect wheelchair positioning', description: 'If they use a wheelchair, understand that reaching their feet from seated position is difficult. Offer to help position their foot closer or stabilize their leg if needed, but let them do the pulling.' },
    ],
    faqs: [
      { question: 'Can I use DonnEase\u2122 Socks from a wheelchair?', answer: 'Yes. Many wheelchair users use DonnEase\u2122 Socks successfully from seated position. The wide opening and numbered markers reduce the forward bend typically required. Some users find it helpful to elevate their foot slightly (footrest, low stool) to reduce reach distance.' },
      { question: 'What if I can\'t reach my feet at all, even seated?', answer: 'If you cannot reach your feet from seated position, you may need positioning assistance. A caregiver or therapist can help bring your foot closer to your hands, but you can still grip the numbered markers and pull the sock up yourself once positioned.' },
      { question: 'Are these compatible with leg braces or orthotics?', answer: 'The wide-mouth opening makes it easier to position socks around braces and orthotics. Many users with leg braces find this design more accessible than standard compression socks. The opening is wide enough to slide over most braces.' },
    ],
  },
};

// --- Recommendations ---

export interface ProductRecommendation {
  primary?: {
    title: string;
    whyHelps: string;
    keyFeatures: string[];
    ctaText: string;
    ctaLink: string;
  };
  secondary?: {
    title: string;
    whyDifferent: string;
    keyFeatures: string[];
    ctaText: string;
    ctaLink: string;
  };
  completeSolution?: {
    title: string;
    whatsIncluded: string[];
    whyBundle: string;
    savings: string;
    ctaText: string;
    ctaLink: string;
  };
}

export const conditionRecommendations: Record<string, ProductRecommendation> = {
  'post-surgery': {
    primary: {
      title: 'DonnEase\u2122 Sock (Adaptive Compression)',
      whyHelps: 'The wide-mouth opening reduces the flexibility needed to get your foot in. Built-in numbered markers require less grip strength than pulling bare compression fabric. Designed to be put on while seated, respecting post-surgical bending restrictions.',
      keyFeatures: [
        'Wide-mouth opening (3x standard width)',
        'Built-in numbered markers for easier grip',
        'Graduated 20-30 mmHg compression (medical-grade)',
        'Seated-friendly design, no standing balance required',
      ],
      ctaText: 'Shop DonnEase\u2122 Socks',
      ctaLink: '/collections/donnease',
    },
    secondary: {
      title: 'Compression Socks (Standard Premium)',
      whyDifferent: 'Our standard Compression Socks offer premium nylon-spandex comfort with medical-grade 20-30 mmHg compression. No adaptive features, but some users prefer them once post-surgical restrictions are lifted.',
      keyFeatures: [
        'Premium nylon-spandex, moisture-wicking',
        'Graduated 20-30 mmHg compression',
        'Reinforced construction',
        'Extended sizing with wide-calf options',
      ],
      ctaText: 'Shop Compression Socks',
      ctaLink: '/collections/compression-socks',
    },
    completeSolution: {
      title: 'Post-Surgical Recovery Bundle',
      whatsIncluded: [
        '2 pairs DonnEase\u2122 Socks (adaptive features for post-surgical restrictions)',
        '1 pair Compression Socks (standard for later recovery)',
        'Digital care guide',
      ],
      whyBundle: 'Start with DonnEase\u2122 Socks during early recovery when bending restrictions apply. Transition to standard Compression Socks as mobility improves. Having multiple pairs means continuous compression during laundry. Bundle saves 12% vs. buying separately.',
      savings: 'Save 12%',
      ctaText: 'Shop Recovery Bundle',
      ctaLink: '/collections/bundles',
    },
  },
  'arthritis': {
    primary: {
      title: 'DonnEase\u2122 Sock (Adaptive Compression)',
      whyHelps: 'The wide-mouth opening reduces the pulling force needed from your hands. Built-in numbered markers give you textured grip zones instead of slippery compression material. Designed for hands that hurt.',
      keyFeatures: [
        'Wide-mouth opening reduces hand strain',
        'Built-in numbered markers with textured grip zones',
        'Graduated 20-30 mmHg compression',
        'Designed for limited grip strength',
      ],
      ctaText: 'Shop DonnEase\u2122 Socks',
      ctaLink: '/collections/donnease',
    },
    secondary: {
      title: 'Compression Socks (Standard Premium)',
      whyDifferent: 'Standard Compression Socks without adaptive features. Some users with mild arthritis can manage these, but most find DonnEase\u2122 Socks significantly easier.',
      keyFeatures: [
        'Premium nylon-spandex fabric',
        'Graduated 20-30 mmHg compression',
        'Moisture-wicking and breathable',
        'Extended sizing options',
      ],
      ctaText: 'Shop Compression Socks',
      ctaLink: '/collections/compression-socks',
    },
    completeSolution: {
      title: 'Independence Bundle',
      whatsIncluded: [
        '2 pairs DonnEase\u2122 Socks (adaptive features for arthritic hands)',
        '1 pair Compression Socks (standard for comparison)',
        'Digital care guide',
      ],
      whyBundle: 'Two pairs of DonnEase\u2122 Socks ensure you always have adaptive compression available. One standard pair lets you compare or use on better hand days. Bundle saves 12% vs. buying separately.',
      savings: 'Save 12%',
      ctaText: 'Shop Independence Bundle',
      ctaLink: '/collections/bundles',
    },
  },
  'limited-mobility': {
    primary: {
      title: 'DonnEase\u2122 Sock (Adaptive Compression)',
      whyHelps: 'The wide-mouth opening reduces how much you need to bend forward to reach your feet. Put them on while seated using the built-in numbered markers. Works for wheelchair users, people with back pain, and anyone who can\'t reach their feet easily.',
      keyFeatures: [
        'Wide-mouth opening reduces forward bend needed',
        'Built-in numbered markers for seated donning',
        'Graduated 20-30 mmHg compression',
        'Works entirely from seated position',
      ],
      ctaText: 'Shop DonnEase\u2122 Socks',
      ctaLink: '/collections/donnease',
    },
    secondary: {
      title: 'Compression Socks (Standard Premium)',
      whyDifferent: 'Standard Compression Socks without adaptive features. Designed for users who can reach their feet comfortably and have full hand dexterity.',
      keyFeatures: [
        'Premium materials and construction',
        'Graduated 20-30 mmHg compression',
        'All-day comfort',
        'Extended sizing',
      ],
      ctaText: 'Shop Compression Socks',
      ctaLink: '/collections/compression-socks',
    },
    completeSolution: {
      title: 'Complete Independence Kit',
      whatsIncluded: [
        '3 pairs DonnEase\u2122 Socks (adaptive features for limited mobility)',
        '2 pairs Compression Socks (standard for variety)',
        'Digital care guide with seated donning techniques',
        'Priority support access',
      ],
      whyBundle: 'Three pairs of DonnEase\u2122 Socks provide maximum rotation flexibility for daily wear. Two standard Compression Socks for comparison or variety. Never worry about laundry gaps. Bundle saves 11% vs. buying separately.',
      savings: 'Save 11%',
      ctaText: 'Shop Complete Independence Kit',
      ctaLink: '/collections/bundles',
    },
  },
};

// --- Related Guides ---

export interface RelatedArticle {
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
}

export const relatedArticles: Record<string, RelatedArticle[]> = {
  'arthritis': [
    { title: 'How to Put On Compression Socks: The Complete Guide', slug: 'how-to-put-on-compression-socks-easily', excerpt: 'Five donning methods including low-dexterity and one-handed techniques for hands with limited grip strength.', readTime: '12 min' },
    { title: 'The DonnEase\u2122 Guide: How Adaptive Compression Socks Work', slug: 'donnease-adaptive-compression-guide', excerpt: 'How the numbered guide system and wide-mouth opening make independent donning possible with arthritis.', readTime: '10 min' },
    { title: 'Caregiver\'s Guide to Putting On Compression Socks', slug: 'caregiver-guide-compression-socks', excerpt: 'Seated and bedridden techniques, communication tips, and adaptive tools for family caregivers.', readTime: '14 min' },
  ],
  'diabetes': [
    { title: 'Compression 101: What You Need to Know', slug: 'compression-101', excerpt: 'Graduated compression, mmHg ratings, and sizing basics for understanding compression socks.', readTime: '5 min' },
    { title: 'Travel Tips for Circulation Health', slug: 'travel-tips', excerpt: 'Maintaining foot health and comfort during long journeys.', readTime: '6 min' },
    { title: 'How to Put On Compression Socks: The Complete Guide', slug: 'how-to-put-on-compression-socks-easily', excerpt: 'Five proven methods including gentle techniques for sensitive feet.', readTime: '12 min' },
  ],
  'limited-mobility': [
    { title: 'How to Put On Compression Socks: The Complete Guide', slug: 'how-to-put-on-compression-socks-easily', excerpt: 'Seated donning, one-handed application, and low-dexterity strategies covered step by step.', readTime: '12 min' },
    { title: 'Mobility Aids & Sock Compatibility', slug: 'mobility-aids', excerpt: 'Practical guidance for using compression socks with wheelchairs, walkers, and canes.', readTime: '7 min' },
    { title: 'The DonnEase\u2122 Guide: How Adaptive Compression Socks Work', slug: 'donnease-adaptive-compression-guide', excerpt: 'Wide-mouth opening and numbered guide system designed for limited flexibility and seated donning.', readTime: '10 min' },
  ],
  'post-surgery': [
    { title: 'Caregiver\'s Guide to Putting On Compression Socks', slug: 'caregiver-guide-compression-socks', excerpt: 'How to put compression socks on someone else. Seated and bedridden techniques for post-surgical recovery.', readTime: '14 min' },
    { title: 'The DonnEase\u2122 Guide: How Adaptive Compression Socks Work', slug: 'donnease-adaptive-compression-guide', excerpt: 'Adaptive compression socks with wide-mouth opening. No separate tools needed during recovery.', readTime: '10 min' },
    { title: 'Compression 101: What You Need to Know', slug: 'compression-101', excerpt: 'Understanding mmHg levels, graduated compression, and how to choose the right compression for recovery.', readTime: '5 min' },
  ],
  'wheelchair-users': [
    { title: 'Mobility Aids & Sock Compatibility', slug: 'mobility-aids', excerpt: 'Wheelchair-specific guidance for compression socks. Compatible with leg rests and footplates.', readTime: '7 min' },
    { title: 'How to Put On Compression Socks: The Complete Guide', slug: 'how-to-put-on-compression-socks-easily', excerpt: 'Seated donning method designed specifically for wheelchair users and balance concerns.', readTime: '12 min' },
    { title: 'Compression 101: What You Need to Know', slug: 'compression-101', excerpt: 'Understanding compression levels and how graduated compression supports circulation while seated.', readTime: '5 min' },
  ],
};

// --- Customer Stories ---

export interface CustomerStory {
  name: string;
  userType: string;
  quote: string;
  rating: number;
}

export const customerStories: Record<string, CustomerStory[]> = {
  'post-surgery': [
    { name: 'Margaret R.', userType: 'Post-Knee Replacement', quote: 'I had bilateral knee replacements. My physical therapist recommended these because I literally could not bend to reach my feet. The wide opening and numbered markers worked perfectly with my restrictions.', rating: 5 },
    { name: 'David K.', userType: 'Post-Hip Replacement', quote: 'Having two pairs meant I didn\'t have to stress about laundry during recovery. I could focus on physical therapy instead of worrying about clean compression socks.', rating: 5 },
    { name: 'Patricia S.', userType: 'Post-Ankle Surgery', quote: 'The wide opening made it possible to get the sock over my surgical boot. I didn\'t think that would work, but it did.', rating: 5 },
  ],
  'arthritis': [
    { name: 'Carol T.', userType: 'Rheumatoid Arthritis', quote: 'I have rheumatoid arthritis. Standard compression socks were impossible. The numbered markers on these make all the difference. I can do it myself now.', rating: 5 },
    { name: 'Robert M.', userType: 'Stroke Recovery', quote: 'After my stroke, I only have good use of one hand. These socks are the only compression I can put on independently.', rating: 5 },
    { name: 'Linda K.', userType: 'Essential Tremor', quote: 'My hands shake. The wide opening means I don\'t have to thread my foot through a tiny hole. That was my biggest problem with regular compression socks.', rating: 5 },
  ],
  'limited-mobility': [
    { name: 'Michael T.', userType: 'Wheelchair User', quote: 'I use a wheelchair. These socks with the wide opening are the only way I can put on compression without help. Game changer.', rating: 5 },
    { name: 'Sarah D.', userType: 'Limited Hip Flexion', quote: 'My hips don\'t bend like they used to. Reaching my feet was impossible. The wide opening and numbered markers made it possible to put them on while seated.', rating: 5 },
    { name: 'James L.', userType: 'Chronic Back Pain', quote: 'I have chronic back pain. Bending forward triggers it. The wide opening means I barely have to bend at all. I can actually do this myself now.', rating: 5 },
  ],
  'diabetes': [
    { name: 'Linda M.', userType: 'Managing Type 2 diabetes for 15 years', quote: 'Comfortable support that does not restrict circulation. I wear them all day at work and my feet feel great.', rating: 5 },
    { name: 'James P.', userType: 'Diabetic neuropathy', quote: 'Seamless design means no pressure points. Fits well with my orthotic inserts too.', rating: 5 },
  ],
  'wheelchair-users': [
    { name: 'Anthony G.', userType: 'Full-time wheelchair user', quote: 'Easy to put on while in my chair. Comfortable all day and works great with my cushion.', rating: 5 },
    { name: 'Rachel S.', userType: 'Paraplegic for 8 years', quote: 'These actually fit well with my leg braces. Most products do not account for that, but these do.', rating: 5 },
    { name: 'Kevin T.', userType: 'Power wheelchair user', quote: 'Durable enough for daily use. I have been wearing them for six months and they still provide great support.', rating: 5 },
  ],
};

// --- Helpers ---

export const storiesHeading: Record<string, string> = {
  'post-surgery': 'What Post-Surgical Users Say',
  'arthritis': 'What Users With Limited Hand Strength Say',
  'limited-mobility': 'What Users With Limited Mobility Say',
  'diabetes': 'Real Stories from Real Users',
  'wheelchair-users': 'Real Stories from Real Users',
};

export const challengesHeading: Record<string, string> = {
  'post-surgery': 'Common Post-Surgical Challenges',
  'arthritis': 'Common Challenges With Limited Hand Strength',
  'limited-mobility': 'Common Challenges With Limited Mobility & Flexibility',
  'diabetes': 'Common Challenges',
  'wheelchair-users': 'Common Challenges',
};

export const tipsHeading: Record<string, string> = {
  'post-surgery': 'Practical Post-Surgical Tips',
  'arthritis': 'Practical Tips for Limited Hand Strength',
  'limited-mobility': 'Practical Tips for Limited Mobility & Flexibility',
  'diabetes': 'Practical Tips',
  'wheelchair-users': 'Practical Tips',
};

export const compressionContextHeading: Record<string, string> = {
  'post-surgery': 'Why compression is often recommended after surgery',
  'arthritis': 'Why people with limited hand strength use compression',
  'limited-mobility': 'Why people with limited mobility use compression',
  'diabetes': 'Why compression matters',
  'wheelchair-users': 'Why compression matters',
};

export const caregiverSubheading: Record<string, string> = {
  'post-surgery': 'Supporting Independence Safely',
  'arthritis': 'Supporting Independence While Respecting Limitations',
  'limited-mobility': 'Supporting Independence While Respecting Limitations',
  'diabetes': 'Supporting Independence',
  'wheelchair-users': 'Supporting Independence',
};
