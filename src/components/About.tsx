import Image from 'next/image'
import { ABOUT_CONTENT } from '@/constants/about'
import { LOGO } from '@/assets'

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <Image
                src={LOGO}
                alt="Odysia Logo"
                width={150}
                height={60}
                className="h-16 w-auto"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {ABOUT_CONTENT.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>
            <div className="space-y-6">
              {ABOUT_CONTENT.values.map((value, index) => (
                <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in-delay">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Odysia?</h3>
              <div className="space-y-6">
                {ABOUT_CONTENT.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                        <span className="text-primary-600 font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <h4 className="font-semibold text-primary-900 mb-2">Escrow Protection</h4>
                <p className="text-primary-700 text-sm">
                  Your payments are held securely until project milestones are completed. 
                  Both clients and experts are protected throughout the entire process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 