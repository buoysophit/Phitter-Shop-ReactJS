"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const HomeBrand = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  const brands = [
    { 
      name: "Apple", 
      logo: "🍎", 
      description: "iPhone, iPad, Mac",
      products: "150+ Products",
      color: "from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300"
    },
    { 
      name: "Samsung", 
      logo: "📱", 
      description: "Galaxy Series",
      products: "120+ Products",
      color: "from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300"
    },
    { 
      name: "Google", 
      logo: "🔍", 
      description: "Pixel Phones",
      products: "25+ Products",
      color: "from-red-100 to-red-200 hover:from-red-200 hover:to-red-300"
    },
    { 
      name: "OnePlus", 
      logo: "➕", 
      description: "Never Settle",
      products: "30+ Products",
      color: "from-red-100 to-orange-200 hover:from-red-200 hover:to-orange-300"
    },
    { 
      name: "Xiaomi", 
      logo: "📲", 
      description: "Mi & Redmi",
      products: "80+ Products",
      color: "from-orange-100 to-yellow-200 hover:from-orange-200 hover:to-yellow-300"
    },
    { 
      name: "Huawei", 
      logo: "📞", 
      description: "P & Mate Series",
      products: "45+ Products",
      color: "from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300"
    },
    { 
      name: "OPPO", 
      logo: "⭕", 
      description: "Find & Reno",
      products: "60+ Products",
      color: "from-green-100 to-green-200 hover:from-green-200 hover:to-green-300"
    },
    { 
      name: "Vivo", 
      logo: "📳", 
      description: "V & Y Series",
      products: "55+ Products",
      color: "from-indigo-100 to-indigo-200 hover:from-indigo-200 hover:to-indigo-300"
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🏆</span>
            <span>Trusted Brands</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Shop by 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Popular Brands
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover premium smartphones from the world's most trusted manufacturers. 
            Each brand brings unique innovation and cutting-edge technology.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="group cursor-pointer" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className={`relative bg-gradient-to-br ${brand.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-white/50`}>
                {/* Brand Logo */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {brand.logo}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{brand.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{brand.description}</p>
                  <div className="inline-flex items-center space-x-1 bg-white/70 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    <span>📦</span>
                    <span>{brand.products}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Shop Now Button - Appears on Hover */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full bg-white/90 hover:bg-white text-gray-900 py-2 px-4 rounded-xl font-semibold text-sm transition-colors duration-200">
                    Shop {brand.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Stats */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100" data-aos="fade-up" data-aos-delay="600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">🛡️</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Authentic Products</div>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xl">⚡</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">24h</div>
              <div className="text-sm text-gray-600">Fast Delivery</div>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-xl">💎</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">2 Years</div>
              <div className="text-sm text-gray-600">Warranty</div>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-xl">⭐</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="800">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center space-x-2">
            <span>🔍</span>
            <span>Explore All Brands</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeBrand