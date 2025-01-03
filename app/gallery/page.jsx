"use client"
import React, { useState, useRef } from 'react'
import Footer from "@/components/Footer"

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const scrollRef = useRef(null)

  const categories = ['All', 'Bridal', 'Party', 'Engagement', 'Fashion', 'Corporate']
  
  const images = [
    {
      src: 'https://via.placeholder.com/400x500',
      category: 'Bridal',
      description: 'Traditional Indian Bridal Makeup'
    },
    {
      src: 'https://via.placeholder.com/400x500', 
      category: 'Party',
      description: 'Glamorous Party Makeup'
    },
    {
      src: 'https://via.placeholder.com/400x500',
      category: 'Engagement',
      description: 'Elegant Engagement Makeup'
    },
    {
      src: 'https://via.placeholder.com/400x500',
      category: 'Fashion',
      description: 'High Fashion Editorial Makeup'
    },
    {
      src: 'https://via.placeholder.com/400x500',
      category: 'Corporate',
      description: 'Professional Corporate Look'
    },
    {
      src: 'https://via.placeholder.com/400x500',
      category: 'Bridal',
      description: 'Modern Fusion Bridal Makeup'
    }
  ]

  const filteredImages = selectedCategory === 'All' 
    ? images
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-[#8e6c90] sm:mt-0 -mt-8 text-center mb-8">Our Gallery</h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-[#8e6c90] text-white'
                : 'bg-[#f3e5f5] text-[#8e6c90] hover:bg-[#8e6c90] hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.description}
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-lg">{image.description}</p>
              <span className="text-[#f3e5f5] text-sm">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  )
}
