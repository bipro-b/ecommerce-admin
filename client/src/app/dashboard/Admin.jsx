'use client'

import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admin Dashboard Overview</h1>
        <div className="flex flex-col gap-4">
          <div className="bg-blue-400 rounded-lg p-6 flex flex-col justify-between transition duration-300 transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/admin/products')}>
            <h2 className="text-xl font-semibold text-white mb-4">Manage Products</h2>
            <p className="text-white">View, add, edit, or delete products.</p>
          </div>
          <div className="bg-green-400 rounded-lg p-6 flex flex-col justify-between transition duration-300 transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/admin/orders')}>
            <h2 className="text-xl font-semibold text-white mb-4">Manage Orders</h2>
            <p className="text-white">View, process, and manage orders.</p>
          </div>
          <div className="bg-yellow-400 rounded-lg p-6 flex flex-col justify-between transition duration-300 transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/admin/customers')}>
            <h2 className="text-xl font-semibold text-white mb-4">Manage Customers</h2>
            <p className="text-white">View and manage customer details.</p>
          </div>
          <div className="bg-pink-400 rounded-lg p-6 flex flex-col justify-between transition duration-300 transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/admin/reports')}>
            <h2 className="text-xl font-semibold text-white mb-4">View Reports</h2>
            <p className="text-white">Access sales and performance reports.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
