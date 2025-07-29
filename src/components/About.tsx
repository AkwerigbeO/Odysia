import Image from 'next/image'
import { ABOUT_CONTENT } from '@/constants/about'
import Logo from '@/components/Logo'

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <Logo
                width={150}
                height={60}
                className="h-12 w-auto sm:h-14 md:h-16"
                alt="Odysia Logo"
              />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4 sm:mb-6 leading-tight">
              {ABOUT_CONTENT.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-dark-text-secondary mb-6 sm:mb-8 leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>
            <div className="space-y-4 sm:space-y-6">
              {ABOUT_CONTENT.values.map((value, index) => (
                <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-dark-text mb-1">{value.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in-delay order-1 lg:order-2">
            <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-dark-border">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-dark-text mb-4 sm:mb-6">Why Choose Odysia?</h3>
              <div className="space-y-4 sm:space-y-6">
                {ABOUT_CONTENT.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
                        <span className="text-primary-600 dark:text-primary-400 font-bold text-sm sm:text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-dark-text mb-1 sm:mb-2">{benefit.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                <h4 className="font-semibold text-primary-900 dark:text-primary-300 mb-2 text-sm sm:text-base">Escrow Protection</h4>
                <p className="text-primary-700 dark:text-primary-400 text-xs sm:text-sm leading-relaxed">
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