import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import ExpertSection from '@/components/ExpertSection'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <ExpertSection />
      <Testimonials />
      <CTA />
    </div>
  )
} 