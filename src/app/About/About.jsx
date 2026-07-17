import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header / Hero Section */}
      <header className="bg-[#2592ad] px-6 py-12 sm:px-12 md:px-16 lg:py-20 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          
          {/* Left side - Illustrations (Responsive Scaling) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/about.png" 
              alt="About Haseef Pack" 
              className="w-full max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-md" 
            />
          </div>

          {/* Right side - Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4"> 
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Your Partner in Precision
              <span className="block mt-1 sm:mt-2 text-sky-100">Plastic Packaging</span>
            </h2>
            <p className="text-sky-100/80 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              Delivering high-quality, customized packaging solutions designed to elevate your brand value and secure your product's integrity.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-8 md:space-y-12">
          
          {/* Precision in Every Package */}
          <section className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
            <div className="flex-shrink-0 mt-1.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Precision in Every Package</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Established in 2011 in Sialkot, Haseef Pack Pvt O Pack specializes over 15,000 sq. ft. of modern
                production facilities, delivering premium plastic packaging solutions with accuracy and strict adherence
                to industry standards.
              </p>
            </div>
          </section>

          {/* Driven by Quality and Innovation */}
          <section className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
            <div className="flex-shrink-0 mt-1.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Driven by Quality and Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We believe packaging should enhance your product's value. Our commitment to continuous improvement in
                products, processes, and systems ensures that every package meets the highest standards of quality,
                helping your brand stand out in the market.
              </p>
            </div>
          </section>

          {/* Serving Diverse Industries */}
          <section className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
            <div className="flex-shrink-0 mt-1.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Serving Diverse Industries</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our expertise spans pharmaceuticals, FMCG, cosmetics, food, home care, and personal care industries. We
                also manufacture plastic storage CAN lids for golf period, expanding into chemicals, oils, lubricants,
                and agro industries to meet evolving needs.
              </p>
            </div>
          </section>

          {/* Partnership Beyond Packaging */}
          <section className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
            <div className="flex-shrink-0 mt-1.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Partnership Beyond Packaging</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At Haseef Pack O Pack, we value long-term relationships built on trust, transparency, and excellence.
                Our customer-centric approach ensures seamless communication, timely service, and solutions that align
                with your growth vision.
              </p>
            </div>
          </section>

          {/* Commitment to Excellence */}
          <section className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
            <div className="flex-shrink-0 mt-1.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Commitment to Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We don't just manufacture packaging; we deliver confidence with every product, ensuring your customers
                experience quality, reliability, and care from the first touchpoint.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}