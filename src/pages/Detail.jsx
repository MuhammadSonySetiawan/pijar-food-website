import "../style/Detail.css";

import React from "react";
import { useLocation } from "react-router";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarPhone from "../components/NavbarPhone";

import axios from "axios";

function Detail() {
  const location = useLocation();
  const [currentRecipe, setCurrentRecipe] = React.useState(null);
  const id = location?.search?.split("?id=")[1];

  React.useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/recipes/${id}`)
      .then((response) => 
    setCurrentRecipe(response?.data?.data[0])
    )
  }, []);
 console.log(currentRecipe)
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
          <button
            className="btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <img src="/images/menu.webp" width="35px" height="35px" />
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
      <section id="content" style={{ marginTop: 0 }}>
        <h1 className="text-center text-primary">{currentRecipe?.title}</h1>

        <div className="d-flex justify-content-center">
          <img src={currentRecipe?.recipePicture} className="main-image" />
        </div>

        <div className="row mt-5 container">
          <div className="col offset-md-2">
            <h2>Ingredients</h2>
            <ul className="">{currentRecipe?.ingredients}</ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col offset-md-2">
            <h2>Video Step</h2>
            <div className="btn btn-warning">
              <a
                className="text-dark text-decoration-none"
                href={currentRecipe?.videoLink}
              >
                Open video step
              </a>
            </div>
          </div>
        </div>

        {/* <div className="row mt-5">
          <div className="row mt-5">
            <div className="col offset-md-2">
              <textarea className="form-control" aria-label="With textarea" placeholder="Comment" style={{ height: "200px", width: "82%" }}></textarea>
              <div className="mt-3 d-flex justify-content-center">
                <button className="btn btn-warning">Comment</button>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <!-- end of content --> */}

      {/* <!-- start of footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Detail;
