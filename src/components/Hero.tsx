import Link from 'next/link'
import Image from 'next/image'
import { HERO_CONTENT } from '@/constants/hero'
import { LOGO } from '@/assets'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Image
              src={LOGO}
              alt="Odysia Logo"
              width={200}
              height={80}
              className="h-32 w-auto"
              priority
            />
          </div>
          
          {/* Animated headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-delay">
            {HERO_CONTENT.title}
          </h1>
          
          {/* Animated subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in-delay">
            {HERO_CONTENT.subtitle}
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-2">
            {HERO_CONTENT.features.map((feature, index) => (
              <span
                key={feature}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-primary-700 border border-primary-200 shadow-sm"
              >
                <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {HERO_CONTENT.primaryCTA}
            </Link>
            <Link
              href="/experts"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              {HERO_CONTENT.secondaryCTA}
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in-delay-4">
            <p className="text-sm text-gray-500 mb-4">Trusted by leading companies</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-gray-400 text-sm font-medium">TechCorp</div>
              <div className="text-gray-400 text-sm font-medium">InnovateLab</div>
              <div className="text-gray-400 text-sm font-medium">StartupHub</div>
              <div className="text-gray-400 text-sm font-medium">DigitalFlow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 