import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { LOGO } from '@/assets'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src={LOGO}
              alt="Odysia Logo"
              width={180}
              height={72}
              className="h-18 w-auto"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your technology goals.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  )
} 