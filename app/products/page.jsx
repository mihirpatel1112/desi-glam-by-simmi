"use client"
import React, { useState } from 'react'
import Footer from "@/components/Footer"

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Foundation', 'Lipstick', 'Eye Makeup', 'Skincare']

  const products = [
    {
      name: 'HD Foundation',
      category: 'Foundation',
      price: '₹1,499',
      description: 'Long-lasting HD foundation perfect for Indian skin tones',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      name: 'Matte Liquid Lipstick',
      category: 'Lipstick', 
      price: '₹899',
      description: 'Smudge-proof matte finish lipstick in traditional Indian shades',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      name: 'Kajal',
      category: 'Eye Makeup',
      price: '₹499',
      description: 'Waterproof kajal for defined eyes',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      name: 'Bridal Eyeshadow Palette',
      category: 'Eye Makeup',
      price: '₹2,499',
      description: 'Shimmer and matte shades perfect for bridal looks',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      name: 'Turmeric Face Cream',
      category: 'Skincare',
      price: '₹999',
      description: 'Natural turmeric-based brightening cream',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      name: 'Rose Water Toner',
      category: 'Skincare',
      price: '₹599',
      description: 'Pure rose water for natural skin toning',
      image: 'https://via.placeholder.com/300x300'
    }
  ]

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-[#8e6c90] sm:mt-0 -mt-8 text-center mb-8">Our Products</h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-[#8e6c90] text-white'
                : 'bg-[#f3e5f5] text-[#8e6c90]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <div key={index} className="bg-[#f3e5f5] rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#8e6c90] mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-2xl font-bold text-[#8e6c90]">{product.price}</p>
              <button className="mt-4 w-full bg-[#8e6c90] text-white py-2 rounded-lg hover:bg-[#7b5c7d] transition-colors">
                Add to Cart
              </button>
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
