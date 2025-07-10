"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Heart, ShoppingCart, Star, Eye, Zap } from "lucide-react"

const Accessories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  const accessories = [
    {
      id: 1,
      name: "(Pre-Order) Sony ULT FIELD 3 Portable Bluetooth Speaker",
      description: "Compact design with incredible sound quality",
      image: "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-3-Portable-Bluetooth-Speaker/forest-gray-1751179619kAVQu.png",
      price: 179.0,
      originalPrice: 199.0,
      monthlyPrice: 16.0,
      isNew: true,
      warranty: 1,
      rating: 4.7,
      reviewCount: 89,
      discount: 10,
      inStock: false,
      fastDelivery: false,
      category: "Audio",
      features: ["Bluetooth 5.0", "20h Battery", "Waterproof"],
    },
    {
      id: 2,
      name: "(Pre-Order) Sony ULT FIELD 5 Portable Bluetooth Speaker",
      description: "Portable powerhouse with deep bass",
      image: "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-5-Portable-Bluetooth-Speaker/black-175118048507e04.png",
      price: 279.0,
      originalPrice: 319.0,
      monthlyPrice: 25.0,
      isNew: true,
      warranty: 1,
      rating: 4.8,
      reviewCount: 124,
      discount: 12,
      inStock: true,
      fastDelivery: true,
      category: "Audio",
      features: ["Bluetooth 5.2", "30h Battery", "IP67 Rated"],
    },
    {
      id: 3,
      name: "(Pre-Order) Sony ULT TOWER 9 Wireless Party Speaker",
      description: "Ultimate party speaker with 360° sound",
      image: "https://www.soklyphone.com/storage/SONY/Accessories/ULT-TOWER-9-Wireless-Party-Speaker/1-175118218851HsC.png",
      price: 779.0,
      originalPrice: 899.0,
      monthlyPrice: 71.0,
      isNew: true,
      warranty: 1,
      rating: 4.9,
      reviewCount: 67,
      discount: 13,
      inStock: true,
      fastDelivery: false,
      category: "Audio",
      features: ["360° Sound", "Party Connect", "LED Lights"],
    },
    {
      id: 4,
      name: "70W USB-C Power Adapter",
      description: "Fast charging for MacBook and iPad",
      image: "https://www.soklyphone.com/storage/Accessories/Apple/Adapter/70-w-usb-c-power-adapter/1-1745828700YvT3F.png",
      price: 99.0,
      originalPrice: 109.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      rating: 4.5,
      reviewCount: 245,
      discount: 9,
      inStock: true,
      fastDelivery: true,
      category: "Charging",
      features: ["70W Power", "USB-C", "Compact Design"],
    },
    {
      id: 5,
      name: "35W Dual USB-C Port Power Adapter",
      description: "Charge two devices simultaneously",
      image: "https://www.soklyphone.com/storage/Accessories/Apple/Adapter/35w-dual-usb-c-port-power-adapter/1-1746525049UeET4.png",
      price: 69.0,
      originalPrice: 79.0,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      rating: 4.6,
      reviewCount: 189,
      discount: 12,
      inStock: true,
      fastDelivery: true,
      category: "Charging",
      features: ["Dual Port", "35W Total", "Smart Power"],
    },
    {
      id: 6,
      name: "OPPO Enco Buds3 Pro True Wireless Earbuds",
      description: "Premium wireless earbuds with ANC",
      image: "https://www.soklyphone.com/storage/Accessories/Oppo/oppo-enco-buds-3-pro-true-wireless-earbuds/white-1-1743498657L316X.jpg",
      price: 24.90,
      originalPrice: 29.90,
      monthlyPrice: null,
      isNew: true,
      warranty: 1,
      rating: 4.4,
      reviewCount: 312,
      discount: 17,
      inStock: true,
      fastDelivery: true,
      category: "Audio",
      features: ["ANC", "Touch Control", "28h Battery"],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🎧</span>
            <span>Premium Collection</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tech
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {" "}Accessories
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enhance your tech experience with our premium accessories. From powerful speakers 
            to fast chargers, everything you need to stay connected and entertained.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎵</span>
            </div>
            <h3 className="font-semibold mb-1">Audio</h3>
            <p className="text-sm opacity-90">Speakers & Earbuds</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-1">Charging</h3>
            <p className="text-sm opacity-90">Power Adapters</p>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-semibold mb-1">Mobile</h3>
            <p className="text-sm opacity-90">Cases & Stands</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Product Image Container */}
              <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0">
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                  {product.fastDelivery && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span>Fast</span>
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Category Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>

                {/* Product Image */}
                <div className="flex items-center justify-center h-48 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 h-14 flex items-center">
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      +{product.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                {/* Pricing */}
                <div className="mb-4 flex-shrink-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {product.monthlyPrice && (
                    <p className="text-sm text-gray-600">
                      Or ${product.monthlyPrice.toFixed(2)}/mo for 12 mo.*
                    </p>
                  )}
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    product.inStock
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }`}>
                    {product.inStock ? "✓ In Stock" : "⏳ Pre-Order"}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="w-full border border-gray-300 hover:border-purple-500 text-gray-700 hover:text-purple-600 font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:bg-purple-50">
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="200">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center space-x-2">
            <span>🛍️</span>
            <span>Shop All Accessories</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Accessories