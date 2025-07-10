import { useState } from "react"
import { Search, User, Menu, X, Phone, ChevronDown, ShoppingCart, Heart, MapPin } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      {/* Top Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Tel: 023 216 725/6, 078 311 111, 092 111 168, 078 911 166</span>
              </div>
              <div className="md:hidden flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>023 216 725/6</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Free delivery nationwide</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="hidden sm:inline">Follow us</span>
              </div>
              <div className="hidden sm:block text-gray-600">
                <span>🔥 Special Offer: Up to 50% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Phitter
                  </h1>
                  <p className="text-sm text-gray-500 font-medium">Your Phone Choice</p>
                </div>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for products, brands, categories..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                />
                <button className="absolute right-1 top-1 h-10 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                  Search
                </button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Wishlist - Desktop */}
              <div className="hidden lg:flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                <div className="relative">
                  <Heart className="h-6 w-6 text-gray-600 hover:text-red-500 transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Wishlist</div>
                  <div className="text-gray-500">Your items</div>
                </div>
              </div>

              {/* Cart - Desktop */}
              <div className="hidden lg:flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Cart</div>
                  <div className="text-gray-500">$0.00</div>
                </div>
              </div>

              {/* Account - Desktop */}
              <div className="hidden lg:flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                <div className="bg-gray-200 p-2 rounded-full">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Account</div>
                  <div className="text-gray-500">Sign in</div>
                </div>
              </div>

              {/* Mobile Icons */}
              <div className="flex lg:hidden items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <Search className="h-6 w-6" />
                </button>
                <button className="p-2 text-gray-600 hover:text-red-500 hover:bg-gray-100 rounded-lg transition-colors relative">
                  <Heart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <User className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu} 
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8 h-14">
            <div className="relative group">
              <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium">
                <span>📱 Smartphones</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              {/* Dropdown can be added here */}
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium">
                <span>🎧 Accessories</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium">
                <span>♻️ Secondhand</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-300 font-medium">
                <span>🔥 Special Offer</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
            </div>
            <a href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium">
              📦 Pre Order
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium">
              📰 News
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium">
              📞 Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 py-4 space-y-1">
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="text-sm font-medium text-gray-900">Categories</div>
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown("product")}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <span>📱</span>
                    <span>Smartphones</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${activeDropdown === "product" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "product" && (
                  <div className="pl-8 pr-4 py-2 space-y-2 bg-gray-50">
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">iPhone</a>
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">Samsung</a>
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">Google Pixel</a>
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">OnePlus</a>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown("accessories")}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <span>🎧</span>
                    <span>Accessories</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${activeDropdown === "accessories" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "accessories" && (
                  <div className="pl-8 pr-4 py-2 space-y-2 bg-gray-50">
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">Headphones</a>
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">Cases</a>
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">Chargers</a>
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">Speakers</a>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown("secondhand")}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <span>♻️</span>
                    <span>Secondhand</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${activeDropdown === "secondhand" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "secondhand" && (
                  <div className="pl-8 pr-4 py-2 space-y-2 bg-gray-50">
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">Refurbished Phones</a>
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">Used Accessories</a>
                    <a href="#" className="block py-2 text-sm text-gray-600 hover:text-blue-600">Trade-in Program</a>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown("special")}
                  className="flex items-center justify-between w-full px-4 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <span>🔥</span>
                    <span>Special Offer</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${activeDropdown === "special" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "special" && (
                  <div className="pl-8 pr-4 py-2 space-y-2 bg-red-50">
                    <a href="#" className="block py-2 text-sm text-red-600 hover:text-red-700">Flash Sales</a>
                    <a href="#" className="block py-2 text-sm text-red-600 hover:text-red-700">Daily Deals</a>
                    <a href="#" className="block py-2 text-sm text-red-600 hover:text-red-700">Clearance</a>
                  </div>
                )}
              </div>
              <a href="#" className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                <span>📦</span>
                <span>Pre Order</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                <span>📰</span>
                <span>News</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                <span>📞</span>
                <span>Contact</span>
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar