"use client";
import { Grid, Typography, Container } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import "../Order.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const Order = ({ id }) => {

   const router = useRouter();

  const { currentUser } = useSelector((state) => state.user);
  const [details, setDetails] = useState([]);
  const [bookDetails, setBookDetails] = useState({});
  const [error,setError] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://ecommerce-admin-mqxz.onrender.com/api/listing")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const choosedBook = details.find((serv) => serv._id === id);
    setBookDetails(choosedBook || {});
  }, [details, id]);

  const { name, price, } = bookDetails;

  const {username,usernumber} = currentUser;

  const productName = name;
  console.log(productName);
  console.log(username)
  const [formData, setFormData] = useState({
    username:username || ' ',
    productname:productName || 'panjabi',
    price: 80,
    phone:usernumber ||' ',
    address: " ",
  });

  console.log(formData);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    console.log("formdata"+formData); 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("https://ecommerce-admin-mqxz.onrender.com/api/order/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      console.log("new product", data);
      setLoading(false);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      router.push("/manageproduct");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Complete Order, Dear {currentUser?.username}
      </h1>
      <form onSubmit={handleSubmit} className="flex  flex-col  gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="name"
            className="border p-3 rounded-lg"
            id="username"
            maxLength="62"
            required
            onChange={handleChange}
            value={currentUser.username}
          />
          <input
            type="text"
            className="border p-3 rounded-lg"
            id="productname"
            onChange={handleChange}
            value={formData.productname}
          />
          <input
            type="number"
            id="price"
            min="1"
            max="1000000"
            className="p-3 border-gray-300 rounded-lg"
            onChange={handleChange}
            value={formData.price}
          />

          <input
            type="text"
            id="phone"
            min="1"
            max="1000000"
            className="p-3 border-gray-300 rounded-lg"
            onChange={handleChange}
            value={formData.phone}
          />

          <input
            type="text"
            id="address"
            min="1"
            max="1000000"
            required
            className="p-3 border-gray-300 rounded-lg"
            onChange={handleChange}
            value={formData.address}
          />
        </div>

        <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95">
          {loading ? "Creating..." : "Add Product"}
        </button>
        {error && <p className="text-red-700 text-sm">{error}</p>}
      </form>
    </main>
  );
};

export default Order;
