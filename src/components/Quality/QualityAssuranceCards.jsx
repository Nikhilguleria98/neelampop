

"use client";

import React from "react";
import { motion } from "framer-motion";

const qualityCommitments = [
  {
    title: "Raw Material Inspection",
    description:
      "Quality checks begin with raw materials to support reliable manufacturing and consistent product quality.",
    img: "https://images.pexels.com/photos/34286024/pexels-photo-34286024.jpeg",
  },
  {
    title: "Multi-Stage Inspection",
    description:
      "Products are inspected at different stages of production to help maintain accuracy and consistency.",
    img: "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    title: "Precision Manufacturing",
    description:
      "Modern machinery and automatic moulding machines with computerized systems support precise production.",
    img: "https://images.openai.com/static-rsc-4/1Pht3gmUz1zdsbYzPDX0J1kgIHEXmW_4oKrr03kJv1yO_gTqb-FrObd1bJSDww0ft8MX6GGing5FtcYOYDr-Q6BV8rmSpEK1vRpUAQc0v_2-xRMuMvHKGkNxHWwTL7py1imchpJgAmuuwj5Xc8Uh6WGYyaTLP_KaS83on4HtdAbuS3w4OW770pWlgdxc3OHj?purpose=fullsize",
  },
  {
    title: "Industry Standards",
    description:
      "We focus on manufacturing plastic packaging products accurately and in accordance with industry standards.",
    img: "https://images.openai.com/static-rsc-4/MxkRmjo2bH0QPyBIJKOjbo9b-khOZxxReENTKx1N_w8ZF8ovIvCDcFUUf--KQy6ZrD8zbTATFaRDITQhLMQRve8eK47zvkU2OtuvKYg0tusB_FW4glA75wjl6eRR0ArubSdIkuZjX1i5xsPosO7B85kPHznLSxK7ZYmfB5uMODfiDRGdZGhclKoohdDIJGUD?purpose=fullsize",
  },
  {
    title: "Final Quality Checks",
    description:
      "Quality assurance continues through the final stages before products are dispatched.",
    img: "https://images.openai.com/static-rsc-4/IWSTDj6mfCAfLdCKPJBFi9B-IWOGD1nrIQ9G8uT7o2YOSlJkLyWLkn6sQkv5FvtwvhNhY3zvG3IoXrYQ_LNksIWLPO06trwMqvJb8uHPWk6BE_C7xqqWNOGC88Mm0WjzZL3RZ5T1PM1Aqg8q-c-EKQubvXdo_zdYnFmiPxTEIt2gYEc8ojd6zw0z5yaFxZ0H?purpose=fullsize",
  },
  {
    title: "Continuous Improvement",
    description:
      "We continuously improve our products, processes, and systems to support better performance.",
    img: "https://images.openai.com/static-rsc-4/8vOwoXUbdia08cyP09Nk3XBMBuHmtJKv9AkSJx4h__PmlD3GaNgVt8PETevBu7J4H3WlZKDyeKKQxofNBSSfWIKWX3IcvcpJrHm6eki4gAdboyZ99MAm3xRCoiECRzVugN8-CPCf65d5Ujvmubsyfsuraj5_tkvUDmCAVe_mYhgohqpWhWpQZRkeG4fGag5j?purpose=fullsize",
  },
 
];

export default function QualityAssuranceCards() {
  return (
    <section className="bg-gradient-to-b from-[#edf4e8] to-[#f7faf4] px-6 py-12 md:px-16 md:py-14 lg:px-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#3799B0]">
            OUR COMMITMENT TO QUALITY
          </p>

          <h2 className="mb-3 text-3xl font-medium tracking-wide text-gray-900 md:text-4xl">
            Quality You Can{" "}
            <span className="text-[#3799B0]">Rely On</span>
          </h2>

          <div className="mx-auto mb-5 h-0.5 w-16 bg-[#3799B0]" />

          <p className="mx-auto max-w-2xl text-sm font-light leading-7 text-gray-600 md:text-base">
            From raw materials to final dispatch, quality is an
            integral part of our manufacturing process. We focus on
            precision, consistency, and continuous improvement to
            serve our customers better.
          </p>
        </motion.div>

        {/* Quality Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {qualityCommitments.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (idx % 3) * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <div className="flex h-full flex-col rounded-2xl border border-[#dce8d4] bg-[#f7faf4] p-5 shadow-sm transition-all duration-300 hover:border-[#c4ded4] hover:shadow-lg sm:p-6">
                {/* Image */}
                <div className="mb-5 overflow-hidden rounded-xl bg-[#e5efdd]">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-3 text-lg font-semibold tracking-wide text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-sm font-light leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="h-0.5 w-10 rounded-full bg-[#3799B0] transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

         {/* Bottom Commitment Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 max-w-6xl"
        >
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-[#dce8d4] bg-[#f7faf4] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:flex-row sm:p-8">
            <div className="w-full shrink-0 overflow-hidden rounded-xl sm:w-36">
              <img
                src="https://images.openai.com/static-rsc-4/4hv-kZcx1ncpGRZHFKEVWXQj_2lnj4m5km97gh6JZSYGGsSyozUfEQWb6PpT2NwaJHQ15UTMYivG8M9nApKx_HumsftZ9KsQ-E7RggcN3PFZ9R7UYi1IzUQssQrbdFS5JGUa6u87Mn6MekrP3VSdhnSSQeZ3G7YQQIjQvwN6IYcICpWYObtA1OvjSB22q604?purpose=fullsize"
                alt="Plastic packaging products"
                loading="lazy"
                className="h-28 w-full object-cover sm:h-24"
              />
            </div>

            <div className="hidden h-16 w-px shrink-0 bg-[#c9dfd7] sm:block" />

            <div>
              <h3 className="mb-2 text-center text-xl font-semibold tracking-wide text-gray-800 sm:text-left">
                Committed to Better Packaging
              </h3>

              <p className="text-center text-sm font-light leading-relaxed text-gray-600 sm:text-left">
                Quality, dependable service, and continuous improvement
                guide our approach to plastic packaging.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
