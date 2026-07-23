import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FlaskConical, 
  Factory, 
  Cpu, 
  Palette, 
  ShieldCheck, 
  Truck,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Polymer Selection",
    desc: "Sourcing premium grade PET, HDPE, and eco-friendly recycled resins.",
    icon: FlaskConical,
  },
  {
    id: 2,
    title: "Preform Injection",
    desc: "Molding raw resins into high-precision preforms with defect-free necking.",
    icon: Factory,
  },
  {
    id: 3,
    title: "Stretch Blow Molding",
    desc: "Automated high-speed blowers expanding preforms to accurate bottle dimensions.",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Custom Printing & Labeling",
    desc: "High-precision screen printing, UV coating, and full shrink sleeving.",
    icon: Palette,
  },
  {
    id: 5,
    title: "Quality Control & Leak Test",
    desc: "Automated drop tests, pressure checks, and wall-thickness inspection.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Sterile Packaging & Shipping",
    desc: "Dust-free shrink bundling and pallet packaging for secure delivery.",
    icon: Truck,
  },
];

export default function ManufacturingProcess() {
  const [showAll, setShowAll] = useState(false);

  // Show 3 items initially, or all 6 items when "Show More" is clicked
  const visibleSteps = showAll ? processSteps : processSteps.slice(0, 3);

  return (
    <section className="bg-[#f8fafc] text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Manufacturing Process
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-2 text-sm sm:text-base">
            We provide world-class bottle manufacturing & printing with our state-of-the-art production line!
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleSteps.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-2xl p-8 text-center shadow-md border border-slate-100 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#2592ad] hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Icon Box */}
                  <div className="w-16 h-16 bg-blue-50 text-[#3B82F6] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs transition-colors duration-300 group-hover:text-white/90">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-[#2592ad] hover:bg-[#72c2bc] text-slate-800 hover:text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm focus:outline-none"
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}