import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/AddRecipes.css";
import NavbarPhone from "../components/NavbarPhone";

import React from "react";

function AddRecipes() {
  return (
    <div>
      {/* <!-- start of header --> */}
      <header>
        <nav className="container mt-4">
          <div className="row animate__animated animate__fadeInDown">
            <Navbar />
          </div>
        </nav>
        <div className="mt-2 d-flex justify-content-end align-items-center hide-desktop">
          <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <img src="images/menu.webp" width="35px" height="35px" />
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <NavbarPhone />
          </div>
        </div>
      </header>
      {/* <!-- end of header --> */}

      {/* <!-- start of content --> */}
      <section id="content">
        <div className="container">
          <div className="input-group mb-3 mt-3">
            <input className="form-control h-20" type="file" id="formFileDisabled" placeholder="Comment" style={{ height: "200px" }} />
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
          </div>

          <div className="mb-3">
            <textarea className="form-control" style={{ height: "200px" }} id="exampleFormControlTextarea1" placeholder="Ingredients"></textarea>
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Video" />
          </div>

          <div className="mt-3 d-flex justify-content-center">
            <button className="btn btn-warning" style={{ width: "150px" }}>
              Post
            </button>
          </div>
        </div>
      </section>
      {/* <!-- end of content --> */}

      {/* <!-- start of footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default AddRecipes;
