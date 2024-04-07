'use client'
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Product from "./Product";

import "./Products.css";
import product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true); // Initially set loading to true

  useEffect(() => {
    fetch("https://ecommerce-admin-mqxz.onrender.com/api/listing")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Provide an empty dependency array to run this effect only once on mount

  return (
    <div className="mb-100">
      <h1 className="headline flex justify-center">Choose your product</h1>

      <div className="container flex justify-center ">
        {isLoading ? (
          <CircularProgress />
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <h1>No results found!!</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
