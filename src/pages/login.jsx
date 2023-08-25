import "../style/Login.css";
import React from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addAuth } from "../reducers/auth"


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  
  const state = useSelector((reducer) => reducer.auth);

React.useEffect(() => {
  if (localStorage.getItem("auth") || state.auth) {
    navigate("/profile");
  }
}, [state])
   
  const hendleLogin = () => {
    setIsLoading(true);
    axios
      .post(`https://pijar-food-sonny.onrender.com/auth/login`, {
        email: email,
        password: password,
      })
      .then((result) => {
        Swal.fire({
          title: "Login Success",
          text: "Login success, redirect to app",
          icon: "success",
        }).then(() => {
          localStorage.setItem("auth", "true");
          localStorage.setItem("token", result?.data?.token);
          localStorage.setItem("id", result?.data?.data[0]?.id);
          dispatch(addAuth(result));
          navigate("/profile");
          // console.log(result?.data?.data[0]?.id);
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Error!",
          text: error?.response?.data?.message ?? "Someting wrong in our app",
          icon: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

    return (
      <div>
        <div className="container-fluid row flex-column flex-md-row">
          <div className="col-6 vh-100 d-flex justify-content-center align-items-center bgLogin" style={{ backgroundImage: "url('images/background-image.webp')" }}>
            <img src="images/logo.png" alt="logo" />
          </div>
          <div className="col p-4 d-flex flex-column justify-content-center m-0 animate__animated animate__fadeInDown noneLogin">
            <h1 className="text-center">Welcome</h1>
            <p className="text-center text-secondary">Log in into your exiting account</p>
            <div className="row m-0 p-0 justify-content-start justify-content-md-center">
              <div className="col col-md-8">
                <hr />
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      E-mail
                    </label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  
                  <div className="d-grid mt-5">
                    <button type="submit" className="btn" style={{ backgroundColor: "#efc81a", color: "white" }} onClick={hendleLogin} disabled={isLoading}>
                      {isLoading === true ? "Loading..." : "Log in"}
                    </button>
                  </div>
                  <p className="text-end fs-6 fw-medium mt-3">
                  </p>
                </form>
              </div>
            </div>
            <p className="text-center">
              Don't have an account?
              <Link to="/Register" className="text-decoration-none" style={{ color: "#efc81a" }}>
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
}
export default Login
