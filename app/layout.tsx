import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default:
      'Advanced Systems & Solutions | Laptop & Computer Sales, Service & Repair in Tirunelveli',
    template: '%s | Advanced Systems & Solutions',
  },
  description:
    'Advanced Systems & Solutions in Palayamkottai, Tirunelveli offers branded laptops, desktops, refurbished systems, custom PC builds, computer & laptop repair, chip-level service, data recovery, networking and Annual Maintenance Contracts (AMC) for homes, offices and institutions.',
  keywords: [
    'laptop sales Tirunelveli',
    'computer sales Tirunelveli',
    'refurbished laptops',
    'computer repair Palayamkottai',
    'laptop repair',
    'chip level service',
    'data recovery',
    'AMC support',
    'networking setup',
    'custom PC build',
    'Advanced Systems & Solutions',
  ],
  authors: [{ name: 'Advanced Systems & Solutions' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Advanced Systems & Solutions | Trusted Laptop & Computer Solutions',
    description:
      'Branded laptops, desktops, refurbished systems, repairs, upgrades, networking and technical support for business & home in Tirunelveli.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
