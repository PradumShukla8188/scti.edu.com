import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://scti.co.in'),
  title: {
    default: 'SCTI Pvt. Ltd. | Coaching Management Software',
    template: '%s | SCTI Pvt. Ltd.',
  },
  description:
    'SCTI Pvt. Ltd. provides comprehensive coaching management software solutions for computer institutes, English coaching, training centers, and educational academies. Student management, online exams, certificates, and more.',
  keywords: [
    'coaching management software',
    'student management system',
    'institute management',
    'certificate verification',
    'online exam portal',
    'educational software',
    'training center software',
  ],
  authors: [{ name: 'SCTI Pvt. Ltd.' }],
  creator: 'SCTI Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scti.co.in',
    siteName: 'SCTI Pvt. Ltd.',
    title: 'SCTI Pvt. Ltd. | Coaching Management Software',
    description:
      'Complete coaching management software solutions for institutes and training centers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SCTI Pvt. Ltd.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCTI Pvt. Ltd. | Coaching Management Software',
    description:
      'Complete coaching management software solutions for institutes and training centers.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
