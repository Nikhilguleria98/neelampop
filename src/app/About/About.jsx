
import React from "react";

const aboutSections = [
  {
    title: "Precision in Every Package",
    description:
      "Established in Baddi in 2011, Neelam Print'o'Pack manufactures plastic packaging with a focus on precision and reliable service. Our 15,000 sq. ft. production facility supports customers across a range of industries.",
  },
  {
    title: "Driven by Quality and Innovation",
    description:
      "We believe packaging should enhance your product's value. Our commitment to continuous improvement in products, processes, and systems ensures that every package meets the highest standards of quality, helping your brand stand out in the market.",
  },
  {
    title: "Serving Diverse Industries",
    description:
      "We serve pharmaceutical, FMCG, cosmetics, food, and home care businesses with packaging designed for their product needs.",
  },
  {
    title: "Partnership Beyond Packaging",
    description:
      "At Neelam Print'o'Pack, we value long-term relationships built on trust, transparency, and dependable service. Our customer-centric approach ensures seamless communication, timely service, and solutions that align with your growth vision.",
  },
  {
    title: "Commitment to Excellence",
    description:
      "We don't just manufacture packaging; we deliver confidence with every product, ensuring your customers experience quality, reliability, and care from the first touchpoint.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#edf4e8]">
      {/* Header / Hero Section */}
      <header className="overflow-hidden bg-[#2592ad] px-6 py-10 text-white sm:px-12 md:px-16 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-8 lg:flex-row">
          {/* Left side - Illustration */}
          <div className="flex w-full justify-center lg:w-1/2">
            <img
              src="/about.png"
              alt="Neelam Print'o'Pack plastic packaging"
              className="h-auto w-full max-w-lg object-contain drop-shadow-md lg:max-w-xl"
            />
          </div>

          {/* Right side - Text content */}
          <div className="w-full space-y-4 text-center lg:w-1/2 lg:text-left">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Your Partner in Precision
              <span className="mt-1 block text-sky-100 sm:mt-2">
                Plastic Packaging
              </span>
            </h2>

            <p className="mx-auto max-w-md text-sm text-sky-100/80 sm:text-base lg:mx-0">
              Delivering high-quality, customized packaging solutions designed
              to elevate your brand value and secure your product's integrity.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content - Animated About Boxes */}
      <main className="mx-auto max-w-5xl px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {aboutSections.map((section, index) => (
            <section
              key={section.title}
              style={{ animationDelay: `${index * 120}ms` }}
              className={`about-card flex gap-3 rounded-lg border border-[#dce8d4] bg-[#f7faf4] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2592ad]/40 hover:bg-white hover:shadow-md sm:p-5 ${
                index === aboutSections.length - 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <span
                className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#2592ad]"
                aria-hidden="true"
              />

              <div>
                <h3 className="mb-2 text-base font-bold text-gray-900 sm:text-lg">
                  {section.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                  {section.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Animation Styles */}
      <style>{`
        @keyframes aboutCardEnter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-card {
          animation: aboutCardEnter 0.55s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-card {
            animation: none;
          }

          .about-card,
          .about-card:hover {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
