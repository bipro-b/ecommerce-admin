'use client'
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./ManageOrder.css";

const ManageOrder = () => {
  const [course, setCourse] = useState([]);
  const [editedCourses, setEditedCourses] = useState([]);

  useEffect(() => {
    fetch("https://ecommerce-admin-mqxz.onrender.com/api/order")
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setEditedCourses(Array(data.length).fill({}));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

 // delete assign
const handleDelete = (id) => {
  const proceed = window.confirm("Are you sure you want to delete?");
  if (proceed) {
    const url = `https://ecommerce-admin-mqxz.onrender.com/api/order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status==="Success") {
          alert("Deleted successfully");
          // Update state using functional form of setCourse
          setCourse(prevCourse => prevCourse.filter((assign) => assign._id !== id));
          // Reload the page
          window.location.reload();

        }
      })
      .catch((error) => console.error("Error deleting data:", error));
  }
};


  const handleUpdate = (id, index) => {
    const updatedCourse = editedCourses[index];
    const url = `https://ecommerce-admin-mqxz.onrender.com/api/order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.updatedCount) {
          alert("Updated successfully");
          fetch("https://ecommerce-admin-mqxz.onrender.com/api/order")
            .then((res) => res.json())
            .then((data) => {
              setCourse(data.result);
              setEditedCourses((prevEditedCourses) => {
                const newEditedCourses = [...prevEditedCourses];
                newEditedCourses[index] = {};
                return newEditedCourses;
              });
            })
            .catch((error) => console.error("Error fetching data:", error));
        }
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setEditedCourses((prevEditedCourses) => {
      const newEditedCourses = [...prevEditedCourses];
      newEditedCourses[index] = {
        ...newEditedCourses[index],
        [name]: value,
      };
      return newEditedCourses;
    });
  };

  return (
    <div className="mem">
      <h3
        style={{
          color: "white",
          backgroundColor: "#207398",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        Manage Products
      </h3>
      <div className="title">
        <div>Product</div>
        <div>Phone</div>
        <div>Price</div>
        <div>Status</div>
        <div>Actions</div>
      </div>
      {course.map((assign, index) => (
        <div className="edit my-2" key={assign._id}>
          <div>
            <TextField
              name="name"
              value={editedCourses[index].productname || assign.productname}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div>
            <TextField
              name="price"
              value={editedCourses[index].phone || assign.phone}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div>
            <TextField
              name="description"
              value={assign.price}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div>
            <TextField
              name="offer"
              value={editedCourses[index].pending || assign.pending}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div>
            <Button
              onClick={() => handleUpdate(assign._id, index)}
              variant="contained"
            >
              Update
            </Button>
            <Button
              style={{ marginLeft: "5px" }}
              onClick={() => handleDelete(assign._id)}
              variant="contained"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageOrder;
