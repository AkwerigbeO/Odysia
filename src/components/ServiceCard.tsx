'use client'

import { motion } from 'framer-motion'
import { hoverLift, scaleIn, staggerItem } from '@/lib/animations'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    features: string[]
    icon: React.ReactNode
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary-200 relative overflow-hidden"
      variants={staggerItem}
      whileHover="hover"
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Floating particles effect */}
      <motion.div
        className="absolute top-0 right-0 w-2 h-2 bg-primary-300 rounded-full opacity-0 group-hover:opacity-60"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <motion.div 
            className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300"
            whileHover={{ 
              scale: 1.1,
              rotate: 5
            }}
          >
            <motion.div 
              className="group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {service.icon}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.h3 
          className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-3"
          whileHover={{ x: 5 }}
        >
          {service.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {service.description}
        </motion.p>
        
        <motion.ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start text-sm text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.svg 
                className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </motion.svg>
              {feature}
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.div 
          className="mt-6 pt-4 border-t border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button 
            className="w-full bg-primary-50 text-primary-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors duration-200 group-hover:bg-primary-600 group-hover:text-white relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ x: 5 }}
            >
              Learn More
            </motion.span>
            
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-8 h-8 bg-primary-200 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      />
    </motion.div>
  )
} 