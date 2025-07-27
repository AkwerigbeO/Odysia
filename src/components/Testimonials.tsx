export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Clients & Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients and experts say about working with Odysia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary-600 font-semibold">S</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                <p className="text-sm text-gray-600">Startup Founder</p>
              </div>
            </div>
            <p className="text-gray-700">
              &quot;Odysia connected us with an amazing developer who built our MVP in record time. The escrow system gave us peace of mind throughout the project.&quot;
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary-600 font-semibold">M</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Mike Rodriguez</h4>
                <p className="text-sm text-gray-600">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-700">
              &quot;As an expert on Odysia, I&apos;ve found consistent, well-paying projects. The platform handles all the logistics so I can focus on coding.&quot;
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary-600 font-semibold">A</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Alex Thompson</h4>
                <p className="text-sm text-gray-600">UI/UX Designer</p>
              </div>
            </div>
            <p className="text-gray-700">
              &quot;The quality of clients and projects on Odysia is outstanding. Payment protection and professional support make it my go-to platform.&quot;
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">98% Success Rate</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              <span className="text-sm">500+ Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 