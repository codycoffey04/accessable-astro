export function transformProductTitle(title: string): string {
  if (!title) return title;
  return title
    .replace(/AccessAble Sock Donning Aid/gi, 'AccessAble DonnEase\u2122 Adaptive Compression Sock')
    .replace(/Sock Donning Aid/gi, 'DonnEase\u2122 Adaptive Compression Sock')
    .replace(/Donning Aid/gi, 'DonnEase\u2122 Adaptive Compression Sock')
    .replace(/donning aid/gi, 'DonnEase\u2122 Adaptive Compression Sock');
}
