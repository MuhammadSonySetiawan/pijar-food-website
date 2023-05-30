import "../style/Login.css"
import React from 'react'
import { Link } from "react-router-dom"

function Login() {
    return (
        <div>
            <div className="row flex-column flex-md-row">
      <div className="col p-4 vh-100 left-col d-flex justify-content-center align-items-center">
        <img className="image-fluid animate__animated animate__fadeInUp backgroundLift" src="./images/background-image.webp" alt="background-lift"/>
      </div>
      <div className="col p-4 d-flex flex-column justify-content-center m-0 animate__animated animate__fadeInDown">
        <h1 className="text-center">Welcome</h1>
        <p className="text-center text-secondary">
          Log in into your exiting account
        </p>
        <div className="row m-0 p-0 justify-content-start justify-content-md-center">
          <div className="col col-md-8">
            <hr/>
            <form action="#" method="post">
              <div className="mb-3">
                <label for="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="E-mail"/>
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="termsConditions" name="termsConditions"/>
                <label className="form-check-label" for="termsConditions">I agree to terms &amp; conditions</label>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn" style={{backgroundColor: '#efc81a', color: 'white'}}>
                  Log in
                </button>
              </div>
              <p className="text-end fs-6 fw-medium mt-3">
                <a href="#" className="text-decoration-none text-black text-body-secondary">Forgot Password?</a>
              </p>
            </form>
          </div>
        </div>
        <p className="text-center">
          Don't have an account?
          <Link to="/Register" className="text-decoration-none" style={{color: '#efc81a'}}>Sign up</Link>
        </p>
      </div>
    </div>
        </div>
    )
}
export default Login
