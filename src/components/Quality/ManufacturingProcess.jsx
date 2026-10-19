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
    desc: "Selecting PET and HDPE materials to suit different packaging requirements.",
    icon: FlaskConical,
  },
  {
    id: 2,
    title: "Preform Injection",
    desc: "Forming preforms to support consistent bottle dimensions.",
    icon: Factory,
  },
  {
    id: 3,
    title: "Stretch Blow Molding",
    desc: "Shaping bottles to the required capacity and design.",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Custom Printing & Labeling",
    desc: "Applying printing and labels according to order specifications.",
    icon: Palette,
  },
  {
    id: 5,
    title: "Quality Control & Leak Test",
    desc: "Checking products for consistency and inspecting bottles for leaks.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Packaging & Shipping",
    desc: "Preparing finished products for packing and dispatch.",
    icon: Truck,
  },
];

export default function ManufacturingProcess() {
  const [showAll, setShowAll] = useState(false);

  // Show 3 items initially, or all 6 items when "Show More" is clicked
  const visibleSteps = showAll ? processSteps : processSteps.slice(0, 3);

  return (
    <section className="bg-[#edf4e8] px-4 py-12 font-sans text-slate-800 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-9 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Manufacturing Process
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-2 text-sm sm:text-base">
            We provide world-class bottle manufacturing & printing with our state-of-the-art production line!
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                  className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-[#dce8d4] bg-[#f7faf4] p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#2592ad] hover:shadow-xl"
                >
                  {/* Icon Box */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#e8f3f5] text-[#2592ad] transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
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
        <div className="mt-8 text-center">
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
