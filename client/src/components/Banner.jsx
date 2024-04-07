import React from 'react'
function Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 text-center text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your E-commerce Store</h1>
        <p className="text-lg md:text-xl mb-8">Discover Amazing Deals on Every Purchase</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow-lg uppercase tracking-wider">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Banner