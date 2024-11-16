import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import MainLayout from '@/components/layout/mainLayout';
import Footer from '@/components/layout/footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Idea Hub',
  description: 'Project Idea, new Learning, exploration and more.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>
          <div className="h-[calc(100svh-65px)] px-6 pb-1 pt-6">
            <div className="hide-scrollbar h-full overflow-scroll rounded-lg">
              {children}
              <Footer />
            </div>
          </div>
        </MainLayout>
      </body>
    </html>
  );
};
export default RootLayout;
