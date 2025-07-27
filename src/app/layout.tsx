import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedCursor from '@/components/AnimatedCursor'
import ScrollProgress from '@/components/ScrollProgress'
import { ThemeProvider } from '@/lib/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Odysia - Managed Tech Talent Platform',
  description: 'Connect with vetted tech experts for Web Development, UI/UX, and Cloud/DevOps projects. Managed end-to-end with escrow-based execution.',
  keywords: 'tech consultancy, managed tech talent, web development, UI/UX design, cloud devops, escrow platform',
  authors: [{ name: 'Odysia Team' }],
  openGraph: {
    title: 'Odysia - Managed Tech Talent Platform',
    description: 'Connect with vetted tech experts for your next project',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odysia - Managed Tech Talent Platform',
    description: 'Connect with vetted tech experts for your next project',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-colors duration-300 bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <ScrollProgress />
            <AnimatedCursor />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 