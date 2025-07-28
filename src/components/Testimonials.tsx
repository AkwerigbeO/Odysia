'use client'

import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { useScrollAnimation, useCarousel, useKeyboardNavigation, useIsMobile } from '@/lib/hooks'
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations'
import MobileOptimizedCard from './MobileOptimizedCard'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Startup Founder',
    company: 'TechFlow',
    content: 'Odysia connected us with an amazing developer who built our MVP in record time. The escrow system gave us peace of mind throughout the project.',
    rating: 5,
    avatar: 'S'
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    role: 'Full-Stack Developer',
    company: 'CodeCraft',
    content: 'As an expert on Odysia, I\'ve found consistent, well-paying projects. The platform handles all the logistics so I can focus on coding.',
    rating: 5,
    avatar: 'M'
  },
  {
    id: '3',
    name: 'Alex Thompson',
    role: 'UI/UX Designer',
    company: 'DesignHub',
    content: 'The quality of clients and projects on Odysia is outstanding. Payment protection and professional support make it my go-to platform.',
    rating: 5,
    avatar: 'A'
  },
  {
    id: '4',
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'InnovateCorp',
    content: 'Working with Odysia has been a game-changer for our development process. The managed approach saves us countless hours.',
    rating: 5,
    avatar: 'E'
  },
  {
    id: '5',
    name: 'David Kim',
    role: 'DevOps Engineer',
    company: 'CloudScale',
    content: 'The escrow system and project management tools on Odysia are top-notch. It\'s the most professional platform I\'ve used.',
    rating: 5,
    avatar: 'D'
  }
]

export default function Testimonials() {
  const { ref, controls } = useScrollAnimation()
  const { currentIndex, direction, isAutoPlaying, next, previous, goTo, pause, resume } = useCarousel(testimonials.length, 5000)
  const isMobile = useIsMobile()
  
  // Keyboard navigation
  useKeyboardNavigation(testimonials.length, (direction) => {
    if (direction === 'next') next()
    else previous()
  })

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      previous()
    } else if (info.offset.x < -swipeThreshold) {
      next()
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4 sm:mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Real feedback from clients and experts who trust Odysia for their tech projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="absolute w-full"
              >
                <MobileOptimizedCard>
                  <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-dark-border">
                    {/* Avatar and Info */}
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                        <span className="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400">
                          {testimonials[currentIndex].avatar}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-dark-text">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.p 
                        className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        &ldquo;{testimonials[currentIndex].content}&rdquo;
                      </motion.p>
                      
                      {/* Rating Stars */}
                      <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}
                      >
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.2 }}
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </MobileOptimizedCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-dark-card rounded-full shadow-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors z-10 mobile-touch-target"
            onClick={previous}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-dark-card rounded-full shadow-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors z-10 mobile-touch-target"
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Dots Indicator */}
          <motion.div 
            className="flex justify-center mt-6 sm:mt-8 space-x-2"
            variants={staggerItem}
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors mobile-touch-target ${
                  index === currentIndex ? 'bg-primary-600 dark:bg-primary-400' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => goTo(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  scale: index === currentIndex ? 1.2 : 1,
                  backgroundColor: index === currentIndex ? '#9333ea' : isMobile ? '#4b5563' : '#d1d5db'
                }}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 