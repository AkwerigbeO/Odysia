import { Service } from '@/types/service'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary-200">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
            <div className="group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
            {service.title}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <svg className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full bg-primary-50 text-primary-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors duration-200 group-hover:bg-primary-600 group-hover:text-white">
          Learn More
        </button>
      </div>
    </div>
  )
} 