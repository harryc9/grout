import { AuthProvider } from '@/context/auth-provider'
import type { Metadata } from 'next'
import { DM_Sans, Lora } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
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
        className={`${dmSans.variable} ${lora.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
