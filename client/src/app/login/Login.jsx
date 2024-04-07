'use client'
import { useState } from "react";

import { useRouter } from "next/navigation";
import {useDispatch, useSelector} from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from "../../redux/user/userSlice.js";
import { Button, TextField } from "@mui/material";
import '../globals.css'

function Login() {
    const [formData, setFormData] = useState({});
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const {loading, error} = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const router = useRouter();

    // const navigate = useNavigate();
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        dispatch(signInStart());
        // dispatch(signInStart())
        // setLoading(true);
        const res = await fetch("https://ecommerce-admin-mqxz.onrender.com/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log("data"+data);
        if (data.success === false) {
          dispatch(signInFailure(data.message));
          return;
        }
        dispatch(signInSuccess(data));
        // navigate("/");
        router.push("/dashboard");
      } catch (error) {
       dispatch(signInFailure(error.message));
      }
    };

  return (
  <div className="p-3 max-w-lg mx-auto">
    <h1 className="text-3xl text-center font-semibold my-7">Login Now</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Phone number"
          className="border p-3 rounded-lg"
          id="usernumber"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 "
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      
      </form>
      <div className="flex w-full justify-center">
        <p className="flex items-center mt-5 text-center">
          Already Have an Account?{" "}
          <Button
            onClick={() => router.push("/register")}
            className="ml-5"
            color="secondary"
          >
            Register 
          </Button>
        </p>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Login;
