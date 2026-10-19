
"use client"

import { useState } from "react"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Packaging inquiry from ${formData.name}`
    )

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    )

    window.location.href = `mailto:neelampop@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#edf4e8]">
      {/* Background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-3 sm:py-3 sm:px-6 lg:px-10">
        {/* Header */}
        <header className="mb-2 text-center ">
          <h1 className="text-xl font-extrabold text-gray-900 md:text-2xl">
            Let's Connect
          </h1>

          <p className="mt-2 text-xs  text-gray-600 sm:text-base">
            We're here to answer your queries and support your packaging needs.
          </p>
        </header>

        {/* Contact information */}
        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-700">
          <a
            href="mailto:neelampop@gmail.com"
            className="flex items-center gap-2 transition-colors hover:text-[#2592ad]"
          >
            <svg
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>neelampop@gmail.com</span>
          </a>

          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Baddi, Himachal Pradesh</span>
          </div>
        </div>

        {/* Form and map */}
        <div className="grid w-full max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">

          {/* Left: Contact form */}
          <section className="rounded-xl border border-gray-300 bg-white/95 p-5 shadow-lg sm:p-6">
            <div className="mb-2 border-b border-gray-200 pb-3">
              <h2 className="text-xl font-semibold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Fill out the form and tell us how we can help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-[#f7faf4] px-3 py-1.5 text-sm  text-gray-700 placeholder:text-gray-500 outline-none transition focus:border-[#2592ad] focus:ring-2 focus:ring-[#2592ad]/20"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-[#f7faf4] px-3 py-1.5 text-sm  text-gray-700 placeholder:text-gray-500 outline-none transition focus:border-[#2592ad] focus:ring-2 focus:ring-[#2592ad]/20"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-[#f7faf4] px-3 py-1.5 text-sm  text-gray-700 placeholder:text-gray-500 outline-none transition focus:border-[#2592ad] focus:ring-2 focus:ring-[#2592ad]/20"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full resize-y rounded-md border border-gray-300 bg-[#f7faf4] px-3 py-1.5 text-sm  text-gray-700 placeholder:text-gray-500 outline-none transition focus:border-[#2592ad] focus:ring-2 focus:ring-[#2592ad]/20"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-[#2592ad] px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-[#1f7c94] focus:outline-none focus:ring-2 focus:ring-[#2592ad] focus:ring-offset-2"
              >
                Submit Inquiry
              </button>
            </form>
          </section>

          {/* Right: Google Map */}
          <section className="flex min-h-[350px] flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg md:min-h-0">
            <div className="border-b border-gray-200 px-5 py-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Find Our Location
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Baddi, Himachal Pradesh, India
              </p>
            </div>

            <div className="min-h-[350px] flex-1 md:min-h-[400px]">
              <iframe
                title="Map showing Baddi, Himachal Pradesh"
                src="https://maps.google.com/maps?q=Baddi%2C%20Himachal%20Pradesh%2C%20India&z=13&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Baddi%2C%20Himachal%20Pradesh%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-t border-gray-200 px-4 py-3 text-sm font-medium text-[#2592ad] transition-colors hover:bg-gray-50"
            >
              View on Google Maps
              <span aria-hidden="true">↗</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
