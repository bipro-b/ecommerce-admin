import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-30">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="px-4">
            <h2 className="text-lg font-semibold mb-4">Order</h2>
            <ul className="space-y-2">
              <li>
                <a href="/order" className="hover:text-gray-200">Place Order</a>
              </li>
              <li>
                <a href="/order/history" className="hover:text-gray-200">Order History</a>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="text-lg font-semibold mb-4">Product Admin</h2>
            <ul className="space-y-2">
              <li>
                <a href="/admin/products" className="hover:text-gray-200">Manage Products</a>
              </li>
              <li>
                <a href="/admin/orders" className="hover:text-gray-200">Manage Orders</a>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:text-gray-200">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-200">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4 text-center">
        <p className="text-sm">&copy; 2024 Your E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );

}

export default Footer