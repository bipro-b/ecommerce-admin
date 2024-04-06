'use client'
import { useRouter } from "next/navigation";
// import React, { useEffect, useReducer } from "react";
// import { useDispatch, useSelector } from "react-redux";
import WestIcon from "@mui/icons-material/West";
// import * as yup from "yup";
import { useFormik } from "formik";
// import { getUser, registerUser } from "@/Redux/Auth/Action";
import { Button, TextField } from "@mui/material";


function Register() {
  //   const dispatch = useDispatch();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  //const jwt = localStorage.getItem("access_token");
  //const {auth} = useSelector((store)=>store);

  const formik = useFormik({
    initialValues: {
      userName: "",
      userEmail: "",
      userPassword: "",
      userRole: "",
      userMobile: "+880 ",
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(registerUser(values));
    },
  });

  //   useEffect(() => {
  //     console.log("jwt: ", jwt);
  //     if (jwt) {
  //       dispatch(getUser(jwt));
  //     }
  //   }, [jwt]);

  // useEffect(()=>{
  //   if(auth.user?.userName){
  //     router.push("/book-ride")
  //     console.log("user name:",auth.user?.userName);
  //   }
  // },[auth.user])

  return (
    <div className="py-10">
      <div className="flex items-center px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />
        <div>
          <h2>Register Now</h2>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="z-50 h-full p-5">
        <TextField
          label="Full Name"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        
        ></TextField>

        <TextField
          label="Mobile Number"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          name="userMobile"
          value={formik.values.userMobile}
          onChange={formik.handleChange}
        ></TextField>

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
         
        ></TextField>

        <Button
          sx={{ padding: ".9rem 0rem" }}
          variant="contained"
          className="z-10 w-full"
          type="submit"
          color="secondary"
        >
          Register
        </Button>
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
    </div>
  );
}

export default Register;
