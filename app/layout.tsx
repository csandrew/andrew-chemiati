import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Andrew Chemiati | Software Developer',
  description: 'Software Development · Web Applications · APIs & Systems · UI/UX',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body>
      {children}
    </body>
  </html>;
}
