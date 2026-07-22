import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Pill, Wine, Sparkles, Droplet } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const industries = [
  {
    id: 1,
    title: "Pharmaceuticals & Healthcare",
    desc: "US-FDA compliant PET and Glass bottles designed for syrup, tablets, and medical packaging.",
    icon: Pill,
    badge: "Medical Grade",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cosmetics & Personal Care",
    desc: "Premium frosted glass and high-clarity PET containers for lotions, serums, and fragrances.",
    icon: Sparkles,
    badge: "Luxury Finish",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Food & Beverage",
    desc: "BPA-free, food-grade containers engineered for hot-fill juices, oil, and condiment packaging.",
    icon: Wine,
    badge: "100% BPA Free",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Agro & Industrial Chemicals",
    desc: "Chemical-resistant, leak-proof HDPE containers designed for tough liquid formulations.",
    icon: Droplet,
    badge: "Heavy Duty",
    image: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function IndustriesServed() {
  return (
    <section className="bg-[#f8fafc] text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[#208a9f] font-semibold text-sm tracking-wider uppercase bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
            Tailored Packaging Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Industries We Serve
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-2 text-sm sm:text-base">
            Providing high-precision packaging, bottle manufacturing, and printing solutions across diverse sectors.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="py-2">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full max-w-5xl !pb-12"
          >
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={item.id} className="w-[300px] sm:w-[360px]">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <span className="absolute top-3 right-3 bg-[#208a9f] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="w-10 h-10 bg-teal-50 text-[#208a9f] rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}