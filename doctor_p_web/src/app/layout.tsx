import type { Metadata } from 'next';
import { Gaegu } from 'next/font/google';
import './globals.css';
import { DataProvider } from './context/DataContext';

const gaeguLight = Gaegu({
  subsets: ['latin'],
  variable: '--font-gaegu-light',
  weight: '300',
});
const gaeguRegular = Gaegu({
  subsets: ['latin'],
  variable: '--font-gaegu-regular',
  weight: '400',
});
const gaeguBold = Gaegu({
  subsets: ['latin'],
  variable: '--font-gaegu-bold',
  weight: '700',
});
export const metadata: Metadata = {
  title: 'Dr.PET',
  description: "Check your pet's disease",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${gaeguLight.variable} ${gaeguBold.variable} ${gaeguRegular.className} antialiased`}
      >
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
