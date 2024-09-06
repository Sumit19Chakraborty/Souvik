import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// components
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sovik Trading',
  description: 'As an experienced stock trader Academy with 4 years in the financial markets, I have honed a disciplined and data-driven approach to trading.My passion lies in analyzing market trends, identifying strategic opportunities, and making informed investment decisions that maximize returns while minimizing risk.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
