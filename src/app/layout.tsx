import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Motor Vehicle Inspection | Gibeontech Loss Assessors & Valuers',
  description: 'Professional digital motor vehicle inspection form and report generation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
