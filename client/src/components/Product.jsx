"use client";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import React from "react";
// import { Link } from "react-router-dom";
// import Rating from "react-rating";
import "./Product.css";
import { useRouter } from "next/navigation";

const product = (props) => {
  const { name, image, price, _id } = props.product;

  const router = useRouter();

  const handleOrderNowClick = () => {
    router.push(`/order/${_id}`);
  };
  return (
    <Container className="product-container">
      <div
        className="product"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="img-container">
          <div className="photo">
            <img
              src={image}
              style={{ width: "300px", height: "200px" }}
              alt=""
            />
          </div>

          <h3 className="photo-detail" style={{ textAlign: "center" }}>
            {name}
          </h3>
        </div>
        <div>
          <h3>product:{name}</h3>
          <h3>Price: ${price}</h3>
          <br />
          {/* <Button className="btn-bck text-white " style={{ backgroundColor: "#120E43",text:"" }}>
              Order Now
            </Button>{" "} */}
          <Button
            className="btn-bck text-white"
            style={{ backgroundColor: "#120E43" }}
            onClick={handleOrderNowClick}
          >
            Order Now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default product;
