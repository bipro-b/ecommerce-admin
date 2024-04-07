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
  console.log(id);

  const { currentUser } = useSelector((state) => state.user);
  const [details, setDetails] = useState([]);
  const [bookDetails, setBookDetails] = useState({});
  const [error,setError] = useState(false);

console.log("details:"+details)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/listing")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const choosedBook = details.find((serv) => serv._id === id);
    setBookDetails(choosedBook || {});
  }, [details, id]);

  console.log(bookDetails.name);
  const [formData, setFormData] = useState({
    username:'',
    productname:'',
    price:'',
    phone:'',
    address: " ",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/order/create", {
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
          <textarea
            type="text"
            className="border p-3 rounded-lg"
            id="productname"
            required
            onChange={handleChange}
            value={bookDetails.name}
          />
          <input
            type="number"
            id="price"
            min="1"
            max="1000000"
            required
            className="p-3 border-gray-300 rounded-lg"
            onChange={handleChange}
            value={bookDetails.price}
          />

          <input
            type="number"
            id="phone"
            min="1"
            max="1000000"
            required
            className="p-3 border-gray-300 rounded-lg"
            onChange={handleChange}
            value={currentUser.usernumber}
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
