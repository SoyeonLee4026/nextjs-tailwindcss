import { Noto_Sans_KR } from 'next/font/google';

/**
 * Default global font: Noto_Sans_KR
 */
export const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  preload: true,
});
