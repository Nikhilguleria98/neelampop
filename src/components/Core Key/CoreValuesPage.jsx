"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CoreValuesPage() {
  const coreValues = [
    {
      title: "Excellence",
      desc: "Striving for the highest standards.",
      img: "Excellence.png",
    },
    {
      title: "Trust & Reliability",
      desc: "Building confidence with every delivery.",
      img: "trust.png",
    },
    {
      title: "Mutual Growth",
      desc: "Growing with our customers and partners.",
      img: "growth.png",
    },
    {
      title: "Creativity & Innovation",
      desc: "Driving improvement through fresh ideas.",
      img: "innovation.png",
    },
  ];

  const beliefs = [
    "We believe in professionalism and ethics.",
    "We add value to our customers' businesses.",
    "We act with positivity and vision.",
    "We nurture long-term relationships built on respect and trust.",
  ];

  const keyValues = [
    { img: "Desier.png", title: "Desire for excellence" },
    { img: "teamwork.png", title: "Innovation and teamwork" },
    { img: "build.png", title: "Trust and integrity" },
    { img: "customer.png", title: "Transparency with customers" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-[#edf4e8] to-[#f7faf4]">
     

      {/* Main Content */}
      <div className="space-y-16 px-6 py-12 md:px-16 md:py-14 lg:px-32">
        {/* Core Values */}
        <section>
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-medium tracking-wide text-gray-900 md:text-4xl">
              Core Values
            </h2>
            <div className="w-16 h-0.5 bg-[#3799B0] mx-auto"></div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                // whileHover={{ y: -3 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-[#dce8d4] bg-[#f7faf4] p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-12 h-12 object-contain transition-transform duration-200 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-800 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Beliefs & Key Values */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Beliefs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-3 tracking-wide">
                Beliefs
              </h2>
              <div className="w-16 h-0.5 bg-[#3799B0] mx-auto"></div>
            </div>
            <div className="rounded-2xl border border-[#dce8d4] bg-[#f7faf4] p-6 shadow-lg">
              <ul className="space-y-4">
                {beliefs.map((belief, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#3799B0] mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="text-gray-700 leading-relaxed font-light">
                      {belief}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Key Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-3 tracking-wide">
                Key Values
              </h2>
              <div className="mx-auto mb-7 h-0.5 w-16 bg-[#3799B0]"></div>
            </div>
            <div className="rounded-2xl border border-[#dce8d4] bg-[#f7faf4] p-3 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {keyValues.map((kv, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center space-y-4 p-4 rounded-xl hover:bg-[#e5efdd] transition-all duration-300"
                  >
                    <div className="">
                      <img
                        src={kv.img}
                        alt={kv.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="font-medium text-gray-800 text-sm leading-snug">
                      {kv.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group "
            >
              <div className="text-center ">
                <h2 className="text-3xl md:text-4xl font-medium text-gray-800  tracking-wide">
                  Mission
                </h2>
                <div className="mx-auto mt-3 h-0.5 w-16 bg-[#3799B0]"></div>
              </div>
              <div className="mt-6 flex min-h-[220px] items-center rounded-2xl border border-[#dce8d4] bg-[#f7faf4] p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <p className="text-center text-base font-light leading-7 text-gray-700">
                  Our mission is to set new standards of quality and perfection by
                  combining innovation, transparency, and reliability, ensuring
                  every package adds value and builds customer trust.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group "
            >
              <div className="text-center ">
                <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-3 tracking-wide">
                  Vision
                </h2>
                <div className="w-16 h-0.5 bg-[#3799B0] mx-auto"></div>
              </div>
              <div className="mt-6 flex min-h-[220px] items-center rounded-2xl border border-[#dce8d4] bg-[#f7faf4] p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <p className="text-center text-base font-light leading-7 text-gray-700">
                  Our vision is to be a globally trusted leader in plastic
                  packaging, known for uncompromising quality, efficiency, and
                  customer satisfaction, while continuously innovating to meet the
                  evolving needs of diverse industries.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
