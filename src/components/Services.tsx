import { SERVICES_DATA } from '@/constants/services'
import ServiceCard from '@/components/ServiceCard'

export default function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4 sm:mb-6 leading-tight">
            Our Core Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Expert tech talent for your web development, UI/UX design, and cloud infrastructure needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={service.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 animate-fade-in-delay-2">
          <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary mb-3 sm:mb-4">Need a custom solution?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors mobile-touch-target text-sm sm:text-base"
          >
            Let&apos;s discuss your project
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 