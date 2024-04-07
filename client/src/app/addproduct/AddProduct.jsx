'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

import {useSelector}  from "react-redux";


const CreateListing = () => {


  const {currentUser} = useSelector(state => state.user) 
  
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);

  const router = useRouter();

  const [formData, setFormData] = useState({
    name:'',
    description:'',
    price:0,
    image:''
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }  


const handleSubmit = async(e)=>{
  e.preventDefault();

  try {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('https://ecommerce-admin-mqxz.onrender.com/api/listing/create', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        userRef: currentUser._id,
      }),
    })
    const data = await res.json();
    console.log("new product",data);
    setLoading(false);
    if(data.success === false){
        setLoading(false)
        setError(data.message);
        return
    }
    router.push("/manageproduct")    
  } catch (error) {
    setError(error.message);
    setLoading(false);
  }

}
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit} className="flex  flex-col  gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <textarea
            type="text"
            placeholder="description"
            className="border p-3 rounded-lg"
            id="description"
            required
            onChange={handleChange}
            value={formData.description}
          />    
              <input
                type="number"
                id="price"
                min="1"
                max="1000000"
                required
                className="p-3 border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.price}
              />

              <input
                type="text"
                id="image"
                className="p-3 border-gray-300 rounded-lg"
                onChange={handleChange}
                value={formData.image}
              />
             
            </div>
   
            <button  className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95">
             {loading?'Creating...' :'Add Product'}
          </button>
          {error && <p className="text-red-700 text-sm">{error}</p>}
      </form>
    </main>
  );
};

export default CreateListing;
