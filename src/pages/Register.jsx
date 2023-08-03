import { Link, useNavigate } from "react-router-dom";
import "../style/Register.css"
import React, { useState, useEffect } from "react";
import axios from 'axios'
import Swal from "sweetalert2";
import Loading from "../components/Loading";

function Register() {
  const navigate = useNavigate()

  const [name, setName] = React.useState(null)
  const [email, setEmail] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [comfirmPassword, setComfirmPassword] = React.useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const hendleRegister = () => {
     if(email &&  name && phoneNumber && password){
       if (password == comfirmPassword && password.length >= 8) {
         axios
           .post(`https://pijar-food-sonny.onrender.com/users`, {
             email: email,
             fullName: name,
             phoneNumber: phoneNumber,
             password: password,
           })
           .then(() => {
             Swal.fire({
               title: "Register Success",
               text: "Register success, redirect to app",
               icon: "success",
             });

             <Loading />;
             navigate("/login");
           })
           .catch((error) => {
             Swal.fire({
               title: "Register Error!",
               text:
                 error?.response?.data?.message ?? "Someting wrong in our app",
               icon: "error",
             });
           });
       } else if (password.length < 8) {
         Swal.fire({
           title: "Error!",
           text: "Password must consist of 8 characters!",
           icon: "error",
         });
       } else {
         Swal.fire({
           title: "Error!",
           text: "Password and Confirm Password is different!",
           icon: "error",
         });
       }
     }else{
      Swal.fire({
        title: "Error!",
        text: "can not be empty!",
        icon: "error",
      });
     }

     
    };

    return (
      <div>
        <div className="row flex-column flex-md-row">
          <div
            className="col-6 vh-100 d-flex justify-content-center align-items-center bgRegistrasi"
            style={{ backgroundImage: "url('images/background-image.webp')" }}
          >
            <img src="images/logo.png" alt="logo" />
          </div>
          {/* {loading && <Loading /> } */}
          <div className="col p-4 d-flex flex-column justify-content-center m-0 animate__animated animate__fadeInDown noneRegistrasi">
            <h1 className="text-center">Welcome</h1>
            <p className="text-center text-secondary">
              Log in into your exiting account
            </p>

            <hr />

            <div className="row m-0 p-0 justify-content-start justify-content-md-center">
              <div className="col col-md-8">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="exampleInputName"
                      aria-describedby="nameHelp"
                      placeholder="Name"
                      style={{ height: "35px" }}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email address"
                      style={{ height: "35px" }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPhoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control "
                      id="exampleInputPhoneNumber"
                      aria-describedby="phoneNumberHelp"
                      placeholder="08xxxxxxxx"
                      style={{ height: "35px" }}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Create New Password
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="exampleInputPassword1"
                      placeholder="Create New Password"
                      style={{ height: "35px" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Comfirmation Password
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="exampleInputPassword1"
                      placeholder="Comfirmation Password"
                      style={{ height: "35px" }}
                      onChange={(e) => setComfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid mt-5">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-warning pt-0 mt-0"
                      style={{ height: "35px", fontSize: "15px", padding: 0 }}
                      onClick={hendleRegister}
                    >
                      Register Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr className="mt-3 mb-0" />

            <small className="d-block text-center text-muted">
              Already have account?{" "}
              <Link className="text-warning text-decoration-none" to="/login">
                Log in Here
              </Link>
            </small>
          </div>
        </div>
      </div>
    );
}

export default Register
