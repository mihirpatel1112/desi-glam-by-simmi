"use client"
import React, { useState, useEffect } from 'react'
import Footer from "@/components/Footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bridal Makeup',
    date: '',
    time: '',
    message: ''
  })

  const [iframeHeight, setIframeHeight] = useState("300")

  useEffect(() => {
    setIframeHeight(window.innerWidth >= 768 ? "600" : "300")
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-[#8e6c90] text-center sm:mt-0 -mt-8 mb-8">Contact Us</h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-[#f3e5f5] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#8e6c90] mb-4">Get in Touch</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#8e6c90]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-gray-500">123 Beauty Street, Mumbai, India</p>
            </div>
            
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#8e6c90]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p className="text-gray-500">+91 98765 43210</p>
            </div>
            
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#8e6c90]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <p className="text-gray-500">info@indianmakeup.com</p>
            </div>

            <div className="mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995644679!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1659342165461!5m2!1sen!2sin"
                width="100%"
                height={iframeHeight}
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Appointment Booking Form */}
        <div className="bg-[#f3e5f5] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#8e6c90] mb-4">Book an Appointment</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-500">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-500">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-500">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-500">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-gray-500"
                required
              >
                <option>Bridal Makeup</option>
                <option>Party Makeup</option>
                <option>Engagement Makeup</option>
                <option>Fashion Makeup</option>
                <option>Corporate Makeup</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-500">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-500">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border rounded-md text-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-500">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border rounded-md text-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8e6c90] text-white py-2 px-4 rounded-md hover:bg-[#7b5c7d] transition-colors"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  )
}
