export interface ProductImage {
  url: string;
  altText: string | null;
}

export function getProductFallbackImage(
  productType: string | null,
  handle: string | null,
  title: string | null
): ProductImage {
  const productTypeLower = productType?.toLowerCase() || '';
  const handleLower = handle?.toLowerCase() || '';
  const titleLower = title?.toLowerCase() || '';

  if (
    productTypeLower.includes('donning') ||
    productTypeLower.includes('aid') ||
    handleLower.includes('donning') ||
    handleLower.includes('aid') ||
    titleLower.includes('donning') ||
    titleLower.includes('aid') ||
    titleLower.includes('donnease')
  ) {
    return {
      url: '/images/donnease-15-20-black.png',
      altText: 'DonnEase\u2122 15-20 mmHg Adaptive Compression Sock in Black'
    };
  }

  if (
    productTypeLower.includes('compression') ||
    productTypeLower.includes('sock') ||
    handleLower.includes('compression') ||
    handleLower.includes('sock') ||
    titleLower.includes('compression') ||
    titleLower.includes('sock')
  ) {
    return {
      url: '/images/compression-sock-black-product.jpg',
      altText: 'AccessAble Compression Socks'
    };
  }

  if (
    productTypeLower.includes('footie') ||
    handleLower.includes('footie') ||
    titleLower.includes('footie')
  ) {
    return {
      url: '/images/compression-sock-white-product.jpg',
      altText: 'AccessAble Pro Footies'
    };
  }

  if (
    productTypeLower.includes('bundle') ||
    handleLower.includes('bundle') ||
    titleLower.includes('bundle') ||
    titleLower.includes('kit') ||
    titleLower.includes('independence') ||
    titleLower.includes('freedom') ||
    titleLower.includes('starter')
  ) {
    return {
      url: '/images/donnease-15-20-black.png',
      altText: 'AccessAble Product Bundle'
    };
  }

  return {
    url: '/images/compression-sock-black-product.jpg',
    altText: 'AccessAble Product'
  };
}

export function getProductImage(
  shopifyImages: Array<{ node: ProductImage }> | undefined,
  productType: string | null,
  handle: string | null,
  title: string | null
): ProductImage {
  const firstImageUrl = shopifyImages?.[0]?.node?.url || '';
  const isPlaceholder = firstImageUrl.includes('placeholder') ||
                        firstImageUrl.includes('no-image') ||
                        firstImageUrl.includes('default') ||
                        firstImageUrl.endsWith('.svg');

  const hasValidImage = shopifyImages &&
    shopifyImages.length > 0 &&
    firstImageUrl &&
    firstImageUrl.length > 20 &&
    !isPlaceholder;

  if (hasValidImage) {
    return shopifyImages[0].node;
  }

  return getProductFallbackImage(productType, handle, title);
}

export function getProductImages(
  shopifyImages: Array<{ node: ProductImage }> | undefined,
  productType: string | null,
  handle: string | null,
  title: string | null
): Array<{ node: ProductImage }> {
  const hasValidImages = shopifyImages &&
    shopifyImages.length > 0 &&
    shopifyImages.some(img => {
      const url = img.node.url || '';
      return url && url.length > 20 &&
        !url.includes('placeholder') &&
        !url.includes('no-image') &&
        !url.includes('default') &&
        !url.endsWith('.svg');
    });

  if (hasValidImages) {
    const validImages = shopifyImages.filter(img => {
      const url = img.node.url || '';
      return url && url.length > 20 &&
        !url.includes('placeholder') &&
        !url.includes('no-image') &&
        !url.includes('default') &&
        !url.endsWith('.svg');
    });
    if (validImages.length > 0) return validImages;
  }

  const fallback = getProductFallbackImage(productType, handle, title);
  return [{ node: fallback }];
}
