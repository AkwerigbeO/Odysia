import Link from 'next/link'
import { CTA_CONTENT } from '@/constants/cta'

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 opacity-90"></div>
        <div className="absolute top-10 right-10 w-16 h-16 sm:w-32 sm:h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 sm:w-24 sm:h-24 bg-white opacity-10 rounded-full"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {CTA_CONTENT.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {CTA_CONTENT.description}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-fade-in-delay">
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mobile-touch-target w-full sm:w-auto text-center"
          >
            {CTA_CONTENT.primaryButton}
          </Link>
          <Link
            href="/experts"
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-200 mobile-touch-target w-full sm:w-auto text-center"
          >
            {CTA_CONTENT.secondaryButton}
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-fade-in-delay-2">
          {CTA_CONTENT.benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-primary-100 font-medium leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 