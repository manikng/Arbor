import React from 'react'

function FeedPost() {
  return (
    <div>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
  {/* <!-- User Info Section --> */}
  <div className="flex items-center p-4 border-b">
    <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48" alt="User Avatar" />
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-gray-800">Ava</h4>
      <p className="text-sm text-gray-600">Customer</p>
    </div>
  </div>

  {/* <!-- Product Image --> */}
  <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300x200" alt="Product Image" />

  {/* <!-- Product Details --> */}
  <div className="p-4">
    <h5 className="text-xl font-bold text-gray-800 mb-2">Product Name</h5>
    <p className="text-sm text-gray-600 mb-3">Product description goes here. A short and engaging line to attract customers.</p>
    <span className="block text-lg font-semibold text-gray-800 mb-3">Price: $99</span>

    {/* <!-- Action Buttons --> */}
    <div className="flex items-center space-x-3">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Buy Me</button>
      <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition">Chat</button>
    </div>
  </div>

  {/* <!-- Footer Icons --> */}
  <div className="flex justify-around p-4 border-t">
    <button className="text-red-500 hover:text-red-600 transition">
      ❤️
    </button>
    <button className="text-gray-500 hover:text-gray-600 transition">
      📑
    </button>
    <button className="text-blue-500 hover:text-blue-600 transition">
      ↗️
    </button>
  </div>
</div>

    </div>
  )
}

export default FeedPost