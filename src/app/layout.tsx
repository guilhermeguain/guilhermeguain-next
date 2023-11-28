import { Montserrat } from 'next/font/google';

import '@/styles/global.css';
import '@/styles/theme.css';

const fontFamily = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Desenvolvedor Front-end - Guilherme Guain',
  description:
    'Desenvolvedor Front-end desde 2012, especialista em React.js, Next.js, TypeScript e WordPress',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  'theme-color': '#1A202C',
};

export type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body className={fontFamily.className}>{children}</body>
    </html>
  );
}
