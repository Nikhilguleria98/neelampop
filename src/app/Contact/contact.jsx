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
    const subject = encodeURIComponent(`Packaging inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    )
    window.location.href = `mailto:neelampop@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-[#edf4e8] relative overflow-hidden">
      {/* Background dotted pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/map.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8">
        {/* Header Section */}
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Let's Connect</h1>
          <p className="text-base text-gray-600 md:text-lg">
            We're here to answer your queries and support your packaging needs.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-600 md:text-base">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>neelampop@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Baddi, Himachal Pradesh</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-[#f7faf4] border border-gray-300 rounded-md text-gray-700 placeholder:text-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-[#f7faf4] border border-gray-300 rounded-md text-gray-700 placeholder:text-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-[#f7faf4] border border-gray-300 rounded-md text-gray-700 placeholder:text-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2.5 bg-[#f7faf4] border border-gray-300 rounded-md text-gray-700 placeholder:text-gray-500 resize-none focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-md bg-[#2592ad] px-6 py-2.5 font-medium text-white transition-colors duration-200 hover:bg-[#1f7c94] focus:outline-none focus:ring-2 focus:ring-[#2592ad] focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
