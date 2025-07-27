import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 