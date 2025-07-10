"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import HomeBrand from "./HomeBrand"


const HomeSlide = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  const features = [
    { icon: "⚡", title: "Fast Charging", desc: "Quick power-up technology" },
    { icon: "🛡️", title: "Warranty", desc: "2-year protection plan" },
    { icon: "🚚", title: "Free Delivery", desc: "Same day delivery available" },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div data-aos="fade-right">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <span className="animate-pulse">🔥</span>
                  <span>New Arrival - Limited Time</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Premium
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}
                    iPhone 15 Pro
                  </span>
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-medium">
                    Titanium. So Strong. So Light.
                  </span>
                </h1>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg" data-aos="fade-right" data-aos-delay="200">
                Experience the most advanced iPhone ever. Featuring the revolutionary A17 Pro chip, 
                professional camera system, and titanium design that's incredibly strong yet remarkably light.
              </p>

              {/* Price Section */}
              <div className="flex items-center space-x-4" data-aos="fade-right" data-aos-delay="300">
                <div className="text-3xl font-bold text-gray-900">$999</div>
                <div className="text-lg text-gray-500 line-through">$1,199</div>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Save $200
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-right" data-aos-delay="400">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 text-lg">
                  <span>🛒</span>
                  Add to Cart
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                  <span>❤️</span>
                  Add to Wishlist
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8" data-aos="fade-up" data-aos-delay="600">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:transform hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={700 + index * 100}
                  >
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative flex justify-center items-center">
              <div
                className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="text-center space-y-6">
                  {/* Product Image Container */}
                  <div className="relative mx-auto">
                    <div
                      className="relative w-72 h-96 rounded-3xl mx-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    >
                      {/* iPhone Image */}
                      <img
                        src="/iphone.png"
                        alt="iPhone 15 Pro"
                        className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Product Badge */}
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Best Seller
                      </div>

                      {/* Floating elements */}
                      <div
                        className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-800 font-bold shadow-lg"
                        data-aos="bounce"
                        data-aos-delay="1000"
                      >
                        ⭐
                      </div>
                      <div
                        className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-green-800 font-bold text-xs shadow-lg"
                        data-aos="bounce"
                        data-aos-delay="1200"
                      >
                        NEW
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="text-gray-900 space-y-3 mt-6">
                      <h3 className="text-2xl font-bold">iPhone 15 Pro</h3>
                      <p className="text-gray-600">Titanium Design • 256GB</p>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="flex text-yellow-400">
                          {'⭐'.repeat(5)}
                        </div>
                        <span className="text-gray-600 text-sm">(1,234 reviews)</span>
                      </div>
                      <div className="flex items-center justify-center space-x-4">
                        <span className="text-2xl font-bold text-blue-600">$999</span>
                        <span className="text-gray-500 line-through">$1,199</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div
                className="absolute top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse"
                data-aos="fade"
                data-aos-delay="800"
              ></div>
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 animate-pulse"
                data-aos="fade"
                data-aos-delay="1000"
              ></div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🚚</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">Free Shipping</div>
                <div className="text-xs text-gray-600">Orders over $50</div>
              </div>
              <div className="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">↩️</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">30-Day Returns</div>
                <div className="text-xs text-gray-600">Hassle-free returns</div>
              </div>
              <div className="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="300">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xl">🛡️</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">2-Year Warranty</div>
                <div className="text-xs text-gray-600">Full protection</div>
              </div>
              <div className="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="400">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-xl">💬</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">24/7 Support</div>
                <div className="text-xs text-gray-600">Always here to help</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands Section - Now using HomeBrand component */}
      <HomeBrand />

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-blue-100">Products Available</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default HomeSlide