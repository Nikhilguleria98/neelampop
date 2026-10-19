import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Moderate() {
  const imageList = [
    "/handanimation.png",
    "/machineanimation.png",
    "/toolanimation.png",
    "/mathematicsanimation.png",
    "/exportinganimation.png",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % imageList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getArcPosition = (
    index,
    total,
    radius,
    centerX,
    centerY
  ) => {
    const startAngle = Math.PI;
    const endAngle = 2 * Math.PI;

    const angle =
      startAngle +
      ((endAngle - startAngle) / (total - 1)) * index;

    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  return (
    <div className="w-full px-4 py-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold md:text-4xl">
          <span className="text-[#2592AD]">NEELAM</span> Print'<span className="text-red-500">o</span>'Pack
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-gray-600 leading-6">
          We are committed to manufacturing and supplying premium products
          in strict adherence to industry standards. Our quality assurance
          process ensures reliability, precision, and customer satisfaction.
        </p>
      </div>

      <div className="mx-auto mt-9 max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Multi-Stage Assurance
        </h2>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {imageList.map((img, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              whileHover={{ scale: 1.02 }}
              className={`border rounded-xl p-4 cursor-pointer transition-all ${
                active === index
                  ? "border-[#2592AD] bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                    active === index
                      ? "bg-[#2592AD]"
                      : "bg-black"
                  }`}
                >
                  {index + 1}
                </div>

                <div className="flex-1">
                  <img
                    src={img}
                    alt={`Step ${index + 1}`}
                    className="w-full h-40 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Arc Layout */}
        <div className="relative mx-auto hidden h-[420px] w-full max-w-[900px] md:block">
          {/* Arc Line */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M 80 420 A 370 370 0 0 1 820 420"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="2"
            />
          </svg>

          {/* Step Circles */}
          {imageList.map((img, index) => {
            const { x, y } = getArcPosition(
              index,
              imageList.length,
              370,
              450,
              420
            );

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15 }}
                onClick={() => setActive(index)}
                className={`absolute w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-white font-semibold ${
                  active === index
                    ? "bg-[#2592AD]"
                    : "bg-black"
                }`}
                style={{
                  left: x - 24,
                  top: y - 24,
                }}
              >
                {index + 1}
              </motion.div>
            );
          })}

          {/* Center Image */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-end pb-10"
          >
            <img
              src={imageList[active]}
              alt="Stage"
              className="w-[400px] h-[280px] object-contain"
            />
          </motion.div>
        </div>

        <h2 className="mt-7 text-center text-xl font-semibold text-slate-800 md:text-3xl">Quality connects our hard work with customer trust.</h2>
      </div>
    </div>
  );
}

export default Moderate;
