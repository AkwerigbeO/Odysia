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
    <section className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300" ref={ref}>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="text-center mb-16"
          variants={staggerItem}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Clients & Experts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See what our clients and experts say about working with Odysia
          </p>
        </motion.div>
        
        {/* Carousel Container */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={staggerItem}
          onMouseEnter={pause}
          onMouseLeave={resume}
          role="region"
          aria-label="Testimonials carousel"
        >
          {/* Main Carousel */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
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
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                className="absolute inset-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${currentIndex + 1} of ${testimonials.length}`}
              >
                <MobileOptimizedCard 
                  className="h-full p-8"
                  variant="elevated"
                  onSwipeLeft={next}
                  onSwipeRight={previous}
                >
                  <div className="h-full flex flex-col justify-center">
                    <motion.div 
                      className="flex items-center mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="text-primary-600 dark:text-primary-400 font-bold text-xl">
                          {testimonials[currentIndex].avatar}
                        </span>
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.p 
                        className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic"
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
                            className="w-5 h-5 text-yellow-400 mr-1"
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-card rounded-full shadow-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors z-10 mobile-touch-target"
            onClick={previous}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-card rounded-full shadow-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors z-10 mobile-touch-target"
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Dots Indicator */}
          <motion.div 
            className="flex justify-center mt-8 space-x-2"
            variants={staggerItem}
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors mobile-touch-target ${
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

          {/* Auto-play indicator */}
          <motion.div
            className="absolute top-4 right-4 text-xs text-gray-500 dark:text-gray-400"
            animate={{ opacity: isAutoPlaying ? 1 : 0.5 }}
          >
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="text-center mt-16"
          variants={staggerItem}
        >
          <motion.div 
            className="flex justify-center items-center space-x-8 text-gray-400 dark:text-gray-500"
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, color: '#9333ea' }}
            >
              <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">4.9/5 Rating</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, color: '#9333ea' }}
            >
              <svg className="w-5 h-5 text-green-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">98% Success Rate</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, color: '#9333ea' }}
            >
              <svg className="w-5 h-5 text-blue-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              <span className="text-sm">500+ Projects</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
} 