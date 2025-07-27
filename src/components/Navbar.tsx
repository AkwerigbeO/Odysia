'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVIGATION_LINKS } from '@/constants/navigation'
import { LOGO } from '@/assets'
import { fadeInDown, staggerContainer, staggerItem, hoverScale, buttonTap } from '@/lib/animations'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      className="bg-white dark:bg-dark-surface shadow-lg sticky top-0 z-50 transition-colors duration-300"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            variants={hoverScale}
            whileHover="hover"
          >
            <Link href="/" className="flex items-center">
              <Image
                src={LOGO}
                alt="Odysia Logo"
                width={120}
                height={40}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:block"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="ml-10 flex items-baseline space-x-4">
              {NAVIGATION_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={staggerItem}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                  >
                    {link.label}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons and Theme Toggle */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href="/contact"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Start a Project
              </Link>
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href="/experts"
                className="bg-primary-600 dark:bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 2 }}
                >
                  Join as Expert
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            
            {/* Theme Toggle */}
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              <ThemeToggle />
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden flex items-center space-x-3"
            whileTap={{ scale: 0.95 }}
          >
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:text-primary-600 relative"
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  className="w-6 h-0.5 bg-current transform transition-all duration-300"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current transform transition-all duration-300 mt-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current transform transition-all duration-300 mt-1"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                />
              </motion.div>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-dark-border"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {NAVIGATION_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={staggerItem}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="pt-4 space-y-2"
                  variants={staggerContainer}
                >
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href="/contact"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 block px-3 py-2 text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Start a Project
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href="/experts"
                      className="bg-primary-600 dark:bg-primary-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700 dark:hover:bg-primary-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Join as Expert
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
} 