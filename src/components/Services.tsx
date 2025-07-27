import { SERVICES_DATA } from '@/constants/services'
import ServiceCard from '@/components/ServiceCard'

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tech talent for your web development, UI/UX design, and cloud infrastructure needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        
        <div className="text-center mt-12 animate-fade-in-delay-2">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Let's discuss your project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 