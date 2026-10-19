import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#edf4e8]">
      {/* Header / Hero Section */}
      <header className="overflow-hidden bg-[#2592ad] px-6 py-10 text-white sm:px-12 md:px-16 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-8 lg:flex-row">
          
          {/* Left side - Illustrations (Responsive Scaling) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/about.png" 
              alt="Neelam Print'o'Pack plastic packaging"
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
      <main className="mx-auto max-w-4xl px-6 py-8 md:py-10">
        <div className="space-y-5 md:space-y-7">
          
          {/* Precision in Every Package */}
          <section className="flex gap-4 p-4 rounded-xl hover:bg-[#e5efdd] hover:shadow-sm transition-all duration-200">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#2592ad]" aria-hidden="true"></span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Precision in Every Package</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Established in Baddi in 2011, Neelam Print'o'Pack manufactures plastic packaging with a focus on precision and reliable service. Our 15,000 sq. ft. production facility supports customers across a range of industries.
              </p>
            </div>
          </section>

          {/* Driven by Quality and Innovation */}
          <section className="flex gap-4 p-4 rounded-xl hover:bg-[#e5efdd] hover:shadow-sm transition-all duration-200">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#2592ad]" aria-hidden="true"></span>
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
          <section className="flex gap-4 p-4 rounded-xl hover:bg-[#e5efdd] hover:shadow-sm transition-all duration-200">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#2592ad]" aria-hidden="true"></span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Serving Diverse Industries</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We serve pharmaceutical, FMCG, cosmetics, food, and home care businesses with packaging designed for their product needs.
              </p>
            </div>
          </section>

          {/* Partnership Beyond Packaging */}
          <section className="flex gap-4 p-4 rounded-xl hover:bg-[#e5efdd] hover:shadow-sm transition-all duration-200">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#2592ad]" aria-hidden="true"></span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Partnership Beyond Packaging</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At Neelam Print'o'Pack, we value long-term relationships built on trust, transparency, and dependable service.
                Our customer-centric approach ensures seamless communication, timely service, and solutions that align
                with your growth vision.
              </p>
            </div>
          </section>

          {/* Commitment to Excellence */}
          <section className="flex gap-4 p-4 rounded-xl hover:bg-[#e5efdd] hover:shadow-sm transition-all duration-200">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#2592ad]" aria-hidden="true"></span>
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
