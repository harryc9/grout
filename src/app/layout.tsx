import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'BuilderBuddy | AI Phone Agent for Contractors',
    template: '%s | BuilderBuddy',
  },
  description:
    'AI-powered phone agent that answers calls, collects quotes, and books appointments for construction contractors. 24/7 coverage, construction-fluent.',
  keywords: [
    'AI phone agent',
    'construction receptionist',
    'contractor answering service',
    'AI receptionist',
    'missed call recovery',
    'construction automation',
  ],
  authors: [{ name: 'BuilderBuddy' }],
  creator: 'BuilderBuddy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'BuilderBuddy | AI Phone Agent for Contractors',
    description:
      'AI-powered phone agent that answers calls, collects quotes, and books appointments for construction contractors.',
    siteName: 'BuilderBuddy',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
