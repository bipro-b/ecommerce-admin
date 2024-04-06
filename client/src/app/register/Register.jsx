'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"; // Import useState hook
import { Button, TextField } from "@mui/material";

function Register() {

  const [formData,setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);// State to handle errors

  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }

  const handleSubmit = async(e)=>{
    try {
     e.preventDefault();
     setLoading(true);
     const res = await fetch('http://localhost:5000/api/auth/signup',{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify(formData)
     })
     const data = await res.json();
     console.log("data:"+data);
     if(data.success === false){
       setLoading(false)
       setError(data.message);
       return
     }
     setLoading(false)
     setError(null)
     router.push("/login")
    //  navigate('/sign-in')
    } catch (error) {
     setLoading(false)
     setError(error.message)
    }
   }
 
 


  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Mobile Number"
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
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 ">
        {
          loading ? 'Loading...': 'Sign Up'
        }
        </button>
      </form>
      <div className="flex w-full justify-center">
        <p className="flex items-center mt-5 text-center">
          Already Have an Account?{" "}
          <Button
            onClick={() => router.push("/login")}
            className="ml-5"
            color="secondary"
          >
            Login
          </Button>
        </p>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Register;
