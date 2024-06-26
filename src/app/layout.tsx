import Layout from '@/layout';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import './sidebar.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Trip Planner',
  description: 'Vacation Trip Planner Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
