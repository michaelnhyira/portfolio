import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { AnimatedBackground } from '@/components/animated-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Michael Haven - Web Developer Portfolio',
  description: 'Professional web developer specializing in React, JavaScript, and modern web technologies. Creating innovative and user-friendly web applications.',
  keywords: 'web developer, React, JavaScript, HTML, CSS, portfolio, frontend developer',
  authors: [{ name: 'Michael Haven' }],
  creator: 'Michael Haven',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Michael Haven - Web Developer Portfolio',
    description: 'Professional web developer specializing in React, JavaScript, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Haven - Web Developer Portfolio',
    description: 'Professional web developer specializing in React, JavaScript, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 