import { Link } from "react-router-dom";
import "../style/Register.css"
import React from 'react'

function Register() {
    return (
      <div>
        <div className="row flex-column flex-md-row">
          <div className="col p-4 vh-100 left-col d-flex justify-content-center align-items-center">
            <img className="image-fluid animate__animated animate__fadeInUp backgroundLift" src="./images/background-image.webp" alt="background-lift" />
          </div>
          <div className="col p-4 d-flex flex-column justify-content-center m-0 animate__animated animate__fadeInDown">
            <h1 className="text-center">Welcome</h1>
            <p className="text-center text-secondary">Log in into your exiting account</p>

            <hr />

            <div className="row m-0 p-0 justify-content-start justify-content-md-center">
              <div className="col col-md-8">
                <form>
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control form-control-lg" id="exampleInputName" aria-describedby="nameHelp" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPhoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input type="number" className="form-control form-control-lg" id="exampleInputPhoneNumber" aria-describedby="phoneNumberHelp" placeholder="08xxxxxxxx" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Create New Password
                    </label>
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Create New Password" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword2" className="form-label">
                      New Password
                    </label>
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword2" placeholder="New Password" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">
                      I agree to terms & conditions
                    </label>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg btn-warning">
                      Register Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <hr />

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
