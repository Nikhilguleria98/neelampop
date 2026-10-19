import { useNavigate } from 'react-router-dom';

export default function HomePage() {
   const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');  // Navigates to contact page
  };
  return (
    <div className="bg-[#edf4e8] relative">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h1 className="mb-5 text-3xl font-bold text-gray-800 md:text-5xl">About Company</h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Neelam Print'o'Pack, established in 2011 in Baddi, manufactures quality plastic packaging with precision and
            timely service. We serve pharmaceuticals, FMCG, cosmetics, food, and home care industries.
          </p>

          {/* Statistics Grid */}
          <div className="mx-auto mb-8 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
            {/* Year Established */}
            <div className="rounded-lg bg-[#2592ad] p-6 text-center text-white">
              <div className="mb-1 text-3xl font-bold md:text-4xl">2011</div>
              <div className="text-base md:text-lg">Year Established</div>
            </div>

            {/* Production Facility */}
            <div className="rounded-lg bg-[#2592ad] p-6 text-center text-white">
              <div className="mb-1 text-3xl font-bold md:text-4xl">15,000+ ft²</div>
              <div className="text-base md:text-lg">Production Facility</div>
            </div>

            {/* Product Categories */}
            <div className="rounded-lg bg-[#2592ad] p-6 text-center text-white">
              <div className="mb-1 text-3xl font-bold md:text-4xl">25+</div>
              <div className="text-base md:text-lg">Product Categories</div>
            </div>

            {/* Quality Commitment */}
            <div className="rounded-lg bg-[#2592ad] p-6 text-center text-white">
              <div className="mb-1 text-3xl font-bold md:text-4xl">100%</div>
              <div className="text-base md:text-lg">Quality Commitment</div>
            </div>
          </div>

          {/* Call to Action button */}
          <button
            variant="outline"
            size="lg"
            className="border-2 border-gray-400 text-gray-700 hover:bg-[#e5efdd] px-8 py-3 text-lg bg-transparent"
                          onClick={handleClick}

          >
            Know about us
          </button>
        </div>
      </div>

      {/* <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-contain"
        style={{
          backgroundImage: "url('/Home/bbg.png')",
          backgroundSize: "",
        }}
      /> */}




      <div>
        <img src="/Home/bbg.png" alt="Background" className="w-full h-auto object-cover" />
      </div>





    </div>
  )
}
