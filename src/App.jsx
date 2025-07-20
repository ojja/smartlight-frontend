import React, { useState } from 'react';
import { ChevronDown, Menu, Star, Plus, Heart, ArrowRight, Phone, Mail, Home, Facebook, Instagram, Youtube } from 'lucide-react';

const SmartLightHomepage = () => {
  const [cartCount, setCartCount] = useState(10);

  const categories = [
    { name: 'Led Bulb Family', bg: 'bg-gray-100', icon: '💡' },
    { name: 'Led Candle Bulb Family', bg: 'bg-blue-50', icon: '🕯️' },
    { name: 'Dynamic Spotlight Family', bg: 'bg-gray-100', icon: '🔦' },
    { name: 'Led Plastic Panels Family', bg: 'bg-blue-100', icon: '🔲' },
    { name: 'Led Metal Panels Family', bg: 'bg-blue-50', icon: '⚡' },
    { name: 'Spot Lamp Family', bg: 'bg-gray-100', icon: '💡' },
    { name: 'Outdoor Floodlight Family', bg: 'bg-blue-50', icon: '🔆' },
    { name: 'COB Panels Family', bg: 'bg-blue-100', icon: '🔲' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Classic 18W, LED-A80-18W',
      price: 50,
      originalPrice: 50,
      rating: 4.5,
      warranty: '3 Years',
      image: '💡',
      isHot: true
    },
    {
      id: 2,
      name: 'Smart LED Bulb 12W',
      price: 45,
      originalPrice: 60,
      rating: 4.7,
      warranty: '3 Years',
      image: '🔆',
      isHot: true
    },
    {
      id: 3,
      name: 'LED Panel 40W',
      price: 120,
      originalPrice: 150,
      rating: 4.6,
      warranty: '5 Years',
      image: '🔲',
      isHot: false
    },
    {
      id: 4,
      name: 'Floodlight 50W',
      price: 200,
      originalPrice: 250,
      rating: 4.8,
      warranty: '3 Years',
      image: '🔦',
      isHot: true
    },
    {
      id: 5,
      name: 'Candle LED 8W',
      price: 35,
      originalPrice: 45,
      rating: 4.4,
      warranty: '2 Years',
      image: '🕯️',
      isHot: false
    },
  ];

  const addToCart = (productId) => {
    setCartCount(cartCount + 1);
    // Add toast notification here
    console.log(`Product ${productId} added to cart!`);
  };

  const toggleFavorite = (productId) => {
    console.log(`Product ${productId} toggled in favorites!`);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-blue-50 rounded-lg px-3 py-2 border border-blue-200">
                <div className="text-blue-600">🚚</div>
                <div>
                  <div className="text-xs text-gray-600">Deliver to</div>
                  <div className="text-sm font-medium text-blue-600 flex items-center">
                    Maadi, Cairo <ChevronDown className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Media Center</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a>
              </nav>
            </div>

            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600 font-venera">Smart Light</div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              <button className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors">
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2 bg-blue-50 rounded-full px-3 py-2 hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-600">My Account</span>
              </div>
              <div className="flex items-center space-x-1 bg-blue-50 rounded-full px-3 py-2 hover:bg-blue-100 transition-colors cursor-pointer">
                <span className="text-sm text-gray-600">العربية</span>
                <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
              </div>
              <button className="relative p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                <div className="w-6 h-6">🛒</div>
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 py-2 overflow-x-auto">
              <button className="flex items-center space-x-2 bg-blue-200 text-blue-600 px-4 py-2 rounded-full whitespace-nowrap">
                <Menu className="w-4 h-4" />
                <span>All Products</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {['Led Bulb', 'Led Candle Bulb', 'Dynamic Spotlight', 'Led Plastic Panels', 'Spot Lamp', 'Led Metal Panels'].map((item) => (
                <a key={item} href="#" className="hover:text-blue-200 transition-colors whitespace-nowrap">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Main Hero Content */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 relative overflow-hidden fade-in-up">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 uppercase font-venera">
                  Brighten Every Space
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                  Explore premium lamps and reliable wiring solutions for your home or workspace
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute right-8 top-8 text-6xl opacity-20">💡</div>
              <div className="absolute right-16 bottom-16 text-4xl opacity-30">🕯️</div>
              <div className="absolute left-8 bottom-8 text-3xl opacity-20">⚡</div>
            </div>

            {/* Side Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-6 text-white relative overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <div className="relative z-10">
                  <div className="text-2xl mb-2">✨</div>
                  <h3 className="text-lg font-bold mb-4 font-venera">Designed By Our Professionals</h3>
                  <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute -right-4 -top-4 text-6xl opacity-10">🎨</div>
              </div>
              <div className="bg-gray-200 rounded-2xl p-6 relative overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-red-600 mb-4 font-venera">Deal & Offers</h3>
                  <button className="p-2 bg-white bg-opacity-60 rounded-full hover:bg-opacity-80 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute right-4 top-4 text-4xl opacity-30">🎯</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-venera">
              Lighting Solutions for Every Space
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From energy-efficient LED bulbs to professional lighting panels, find the perfect lighting solution for your needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="text-center group cursor-pointer category-item">
                <div className={`${category.bg} rounded-xl h-32 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm hover:shadow-md`}>
                  <span className="text-4xl">{category.icon}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 leading-tight">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-venera">Featured Products</h2>
            <div className="flex justify-center space-x-3 flex-wrap gap-2">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                🔥 Hot Deals
              </span>
              <span className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition-colors cursor-pointer">
                Top Seller
              </span>
              <span className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition-colors cursor-pointer">
                Recommended
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow product-card">
                <div className="relative p-6 h-48 bg-gray-50 flex items-center justify-center">
                  <span className="text-6xl">{product.image}</span>
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    <div className="bg-blue-50 px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-700">{product.rating}</span>
                    </div>
                    <div className="bg-blue-50 px-2 py-1 rounded-full">
                      <span className="text-xs font-semibold text-blue-600">{product.warranty}</span>
                    </div>
                  </div>
                  {product.isHot && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      🔥 Hot
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg font-semibold text-blue-600">
                      EGP {product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        EGP {product.originalPrice}
                      </span>
                    )}
                    {product.originalPrice > product.price && (
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-4 font-venera">
                Subscribe to our newsletter
              </h2>
              <p className="text-gray-300">
                Get the latest updates on new products and exclusive offers
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 lg:w-80 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-venera">Smart Light</h3>
              <p className="text-gray-400 mb-4">
                Premium lighting solutions for your home and workspace. Quality, efficiency, and style in every product.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+20554501205 | +20554501206</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@smartlight.com.eg</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="w-4 h-4" />
                  <span>Plot No. 184 Industrial area B4, 10th of ramadan</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
              <div>
                <h5 className="font-semibold mb-2">Legal</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center text-sm text-gray-400 mb-4 md:mb-0">
              <p>© 2025 Smart light • All Rights Reserved</p>
            </div>
            <div className="text-center text-sm text-gray-400">
              <p>Web design and development by <a href="https://mitchdesigns.com" className="text-blue-400 hover:text-blue-300">Mitchdesigns</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartLightHomepage;