
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Heart, ShoppingCart, Star, Eye } from "lucide-react"

const NewArrival = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    })
  }, [])

  const categories = ["All", "Mobile Phone", "Tablet", "Smart Watch", "Laptop", "Accessories"]

  const newArrivals = [
    {
      id: 1,
      name: "Mac Studio M4 Max",
      description: "Desktop-class performance for pro workflows",
      image: "https://www.soklyphone.com/storage/Apple/Mac-Studio/Mac-Studio-M4-Max/1-1744453470xJ8bO.png",
      price: 3159.00,
      originalPrice: 3499.00,
      monthlyPrice: 71.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
      rating: 4.9,
      reviewCount: 234,
      discount: 10,
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 2,
      name: "(Pre-Order) Sony ULT TOWER 9 Wireless Party Speaker",
      description: "Ultimate sound experience for parties",
      image: "https://www.soklyphone.com/storage/SONY/Accessories/ULT-TOWER-9-Wireless-Party-Speaker/1-175118218851HsC.png",
      price: 779.0,
      originalPrice: 899.00,
      monthlyPrice: 25.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
      rating: 4.7,
      reviewCount: 89,
      discount: 13,
      inStock: false,
      fastDelivery: false,
    },
    {
      id: 3,
      name: "(Pre-Order) Sony ULT FIELD 5 Portable Bluetooth Speaker",
      description: "Portable powerhouse with deep bass",
      image: "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-5-Portable-Bluetooth-Speaker/black-175118048507e04.png",
      price: 279.0,
      originalPrice: 319.00,
      monthlyPrice: 25.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
      rating: 4.8,
      reviewCount: 156,
      discount: 12,
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 4,
      name: " (Pre-Order) Sony ULT FIELD 3 Portable Bluetooth Speaker",
      description: "Compact design, incredible sound",
      image: "https://www.soklyphone.com/storage/SONY/Accessories/ULT-FIELD-3-Portable-Bluetooth-Speaker/forest-gray-1751179619kAVQu.png",
      price: 179.0,
      originalPrice: 199.00,
      monthlyPrice: 16.0,
      category: "Accessories",
      isNew: true,
      warranty: 1,
      rating: 4.6,
      reviewCount: 78,
      discount: 10,
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 5,
      name: "Xiaomi Redmi Pad 2 4G",
      description: "11-inch display, all-day battery",
      image: "https://www.soklyphone.com/storage/Xiaomi/Xiaomi-Redmi-Pad-2/graphite-grey-1750756398BjDZZ.png",
      price: 199.0,
      originalPrice: 249.00,
      monthlyPrice: 18.0,
      category: "Tablet",
      isNew: true,
      warranty: 1,
      rating: 4.5,
      reviewCount: 345,
      discount: 20,
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 6,
      name: "Xiaomi Redmi Pad 2",
      description: "Perfect for entertainment and work",
      image: "https://www.soklyphone.com/storage/Xiaomi/Xiaomi-Redmi-Pad-2/mint-green-1750756400VTAYO.png",
      price: 169.0,
      originalPrice: 199.00,
      monthlyPrice: 15.0,
      category: "Tablet",
      isNew: true,
      warranty: 1,
      rating: 4.4,
      reviewCount: 267,
      discount: 15,
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 7,
      name: "Huawei Watch 5 42mm",
      description: "Advanced health monitoring",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/42mm/stainless-beige-1-1750741016HSr24.png",
      price: 499.0,
      originalPrice: 599.00,
      monthlyPrice: 45.0,
      category: "Smart Watch",
      isNew: true,
      warranty: 1,
      rating: 4.7,
      reviewCount: 123,
      discount: 17,
      inStock: true,
      fastDelivery: true,
    },
    {
      id: 8,
      name: "Huawei Watch 5 46mm",
      description: "Premium smartwatch experience",
      image: "https://www.soklyphone.com/storage/Huawei/HUAWEI-Watch/Huawei-Watch-5/black-1-1751362418cBcjK.png",
      price: 399.0,
      originalPrice: 479.00,
      monthlyPrice: 36.0,
      category: "Smart Watch",
      isNew: true,
      warranty: 1,
      rating: 4.8,
      reviewCount: 198,
      discount: 17,
      inStock: true,
      fastDelivery: true,
    },
  ]

  const filteredProducts =
    activeCategory === "All" ? newArrivals : newArrivals.filter((product) => product.category === activeCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="animate-pulse">✨</span>
            <span>Fresh Arrivals</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            New
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Arrivals
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest tech innovations and must-have gadgets. 
            From cutting-edge smartphones to premium accessories.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Product Image Container */}
              <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0">
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                  {product.fastDelivery && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      ⚡ Fast
                    </span>
                  )}
                </div>

                {/* Quick Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Warranty Badge */}
                <div className="absolute bottom-3 right-3">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <img
                      src="https://www.soklyphone.com/img/warranty.png"
                      alt="1 Year Warranty"
                      className="w-6 h-6 object-contain"
                      title="1 Year Warranty"
                    />
                  </div>
                </div>

                {/* Product Image */}
                <div className="mb-4 flex items-center justify-center h-40">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 h-14 flex items-center">
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2 h-10">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
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
                  <p className="text-sm text-gray-600">
                    Or ${product.monthlyPrice.toFixed(2)}/mo for 12 mo.*
                  </p>
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                    product.inStock
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {product.inStock ? "✓ In Stock" : "⏳ Pre-Order"}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto space-y-2">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="w-full border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-2 px-4 rounded-xl transition-all duration-300 hover:bg-blue-50">
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-gray-400 text-4xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category to see more products</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="200">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center space-x-2">
            <span>🔍</span>
            <span>View All Products</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewArrival