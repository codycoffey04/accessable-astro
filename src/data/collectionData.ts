// Collection metadata — single source of truth for all collection pages

export interface CollectionInfo {
  title: string;
  description: string;
  isCondition?: boolean;
}

export interface CollectionMeta {
  title: string;
  description: string;
}

export const collectionData: Record<string, CollectionInfo> = {
  'all': {
    title: 'All Products',
    description: 'Browse our complete collection of adaptive compression solutions.',
  },
  'compression-socks': {
    title: 'Compression Socks',
    description: 'Graduated compression technology for all-day comfort.',
  },
  'donnease': {
    title: 'DonnEase\u2122 Adaptive Compression Socks',
    description: 'Compression socks designed for easier independent donning. Wide-mouth opening and built-in numbered guide system, no separate device required.',
  },
  'donning-aids': {
    title: 'DonnEase\u2122 Adaptive Compression Socks',
    description: 'Compression socks designed for easier independent donning. Wide-mouth opening and built-in numbered guide system, no separate device required.',
  },
  'bundles': {
    title: 'Bundles',
    description: 'Complete kits with everything you need. Save up to 12% vs. buying separately.',
  },
  'arthritis': {
    title: 'Adaptive Solutions for Limited Hand Strength',
    description: 'DonnEase\u2122 adaptive compression socks designed for hands with arthritis or limited grip strength. Built-in numbered markers and wide-mouth openings reduce the force needed to put on medical-grade compression independently. No separate tools required.',
    isCondition: true,
  },
  'diabetes': {
    title: 'Adaptive Solutions for Diabetes',
    description: 'DonnEase\u2122 adaptive compression socks for diabetic foot care and circulation support. Seamless toe construction and moisture-wicking nylon-spandex blend for all-day comfort. Adaptive features make daily wear easier for those with reduced flexibility.',
    isCondition: true,
  },
  'limited-mobility': {
    title: 'Adaptive Solutions for Limited Mobility & Flexibility',
    description: 'DonnEase\u2122 adaptive compression socks for people with limited bending, reaching, or balance. Wide-mouth opening (3x standard width) and built-in numbered markers let you put on compression while seated, no standing required.',
    isCondition: true,
  },
  'post-surgery': {
    title: 'Adaptive Solutions for Post-Surgical Recovery',
    description: 'DonnEase\u2122 adaptive compression socks designed for post-surgical recovery when bending and reaching are restricted. Follow your healthcare provider\'s compression guidance with socks you can put on independently, even with movement limitations.',
    isCondition: true,
  },
  'wheelchair-users': {
    title: 'Adaptive Solutions for Wheelchair Users',
    description: 'DonnEase\u2122 adaptive compression socks designed for seated comfort and independent donning from your wheelchair. Wide-mouth opening works from a seated position with less forward bend. Compatible with leg rests and footplates.',
    isCondition: true,
  },
  'travel': {
    title: 'Travel & Circulation',
    description: 'Graduated compression socks for travel comfort on long flights and drives. Lightweight, easy-on DonnEase\u2122 design.',
  },
};

export const collectionMeta: Record<string, CollectionMeta> = {
  'all': {
    title: 'All Products, AccessAble Adaptive Compression',
    description: 'Browse our complete collection of adaptive compression socks, bundles, and accessories. DonnEase\u2122 adaptive design for easier independent donning. Free shipping.',
  },
  'compression-socks': {
    title: 'Adaptive Compression Socks, 15-20 & 20-30 mmHg',
    description: 'Shop graduated compression socks with DonnEase\u2122 adaptive design. Wide-mouth opening and numbered guide system for easier donning. Free shipping.',
  },
  'donnease': {
    title: 'DonnEase\u2122 Adaptive Compression Socks, Put On Compression Independently',
    description: 'Medical-grade compression socks with 3x wider opening and built-in numbered guide system. 8-15, 15-20, 20-30 mmHg. $39/pair. No tools needed.',
  },
  'bundles': {
    title: 'Compression Sock Bundles, Save 20% on Complete Kits',
    description: 'Save 20% with AccessAble bundles. Complete compression kits with socks, donning aids, and care accessories. Free shipping on all bundles.',
  },
  'arthritis': {
    title: 'Compression Socks for Arthritis & Limited Grip',
    description: 'Adaptive compression socks for hands with arthritis or limited dexterity. DonnEase\u2122 pull-tabs require less grip force. Shop now.',
  },
  'diabetes': {
    title: 'Compression Socks for Diabetes, Comfort & Foot Health',
    description: 'Graduated compression socks designed for diabetic foot care. Seamless toe construction, adaptive donning, and all-day comfort.',
  },
  'limited-mobility': {
    title: 'Compression Socks for Limited Mobility & Flexibility',
    description: 'Adaptive compression socks for people with limited bending, reaching, or balance. DonnEase\u2122 wide-mouth design for independent use.',
  },
  'post-surgery': {
    title: 'Post-Surgery Compression Socks, Adaptive Recovery Aid',
    description: 'Graduated compression socks for post-surgical recovery. Easy-on design when bending and reaching are restricted. Consult your provider.',
  },
  'wheelchair-users': {
    title: 'Compression Socks for Wheelchair Users, Seated Comfort',
    description: 'Compression socks compatible with wheelchairs, leg rests, and footplates. Adaptive DonnEase\u2122 design for seated donning.',
  },
  'travel': {
    title: 'Travel Compression Socks, Long Flight & Road Trip Comfort',
    description: 'Graduated compression socks for travel comfort on long flights and drives. Lightweight, easy-on DonnEase\u2122 design. TSA-friendly.',
  },
};
