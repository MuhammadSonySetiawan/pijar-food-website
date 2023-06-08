import "../style/Home.css";

import NavbarPhone from "../components/NavbarPhone";
import Navbar from "../components/Navbar";
import RecipesCard from "../components/RecipesCard";
import Footer from "../components/Footer";

import React from 'react';

import { Link } from "react-router-dom"
// import RecipesList from "../menu.json"
import axios from "axios";

function App() {
const [resipesList, setRecipesList] = React.useState([])
const [keyword, setKeyword] = React.useState("")

  React.useEffect(() =>{
     axios.get(`${process.env.REACT_APP_BASE_URL}/recipes?page=1&limit=4&sortType=desc`)
     .then((response) => setRecipesList(response?.data?.data));

  }, [])

  const hendelSearch=() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/recipes`, {
        params: {
          keyword,
          // sortColumn: "name",
        },
      })
      .then((response) => setRecipesList(response?.data?.data));
  }
  return (
    <div className="App">
      {/* <!-- start of header --> */}
      <header>
        <nav className="container mt-4">
          <div className="row animate__animated animate__fadeInDown ">
            <Navbar />
            <div className="col text-md-end position-absolute w-25" style={{ zIndex: 1, right: "2%" }}>
              {localStorage.getItem("auth") ? (
                <>
                  <Link
                    className="text-white fw-bold text-decoration-none"
                    to="/Login"
                    onClick={() => {
                      localStorage.clear();

                      window.location.href = "/Login";
                    }}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="text-white me-5 fw-bold text-decoration-none" to="/Login">
                    Login
                  </Link>
                  <Link className="text-white fw-bold text-decoration-none" to="/Register">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
        <div className="mt-2 d-flex justify-content-end align-items-center hide-desktop">
          <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <img src="/images/menu.webp" width="35px" height="35px" />
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <NavbarPhone />
            <div className="login d-inlane text-center">
              {localStorage.getItem("auth") ? (
                <>
                  <Link
                    className="text-primary fw-bold text-decoration-none mb-3 text-center"
                    to="/Login"
                    onClick={() => {
                      localStorage.clear();

                      window.location.href = "/Login";
                    }}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="text-primary fw-bold text-decoration-none mb-3 text-center" to="/Login">
                    Login
                  </Link>
                  <br />
                  <Link className="text-primary fw-bold text-decoration-none mb-3 text-center" to="/Register">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* <Navbar /> */}

      <header>
        <div className="container">
          <div className="row align-items-center" style={{ height: "90vh" }}>
            <div className="col-md-7 col-xs-12 order-2 order-md-1 animate__animated animate__fadeInLeft">
              <h1 className="text-primary">
                Discover Recipe & <br />
                Delicious Food
              </h1>

              <div className="mb-3 w-50 mt-3">
                <input className="form-control form-control-lg" placeholder="search restaurant, food" 
                onChange={(e) => setKeyword(e.target.value)} 
                onKeyDown={(e) =>{
                  if(e.keyCode === 13 ){
                    window.location.href = ("#popular-recipe");

                    hendelSearch()
                  }
                  }} />
              </div>
            </div>
            <div className="col-md-5 col-xs-12 order-1 order-md-2">
              <img src="images/home.webp" width="100%" height="100%" style={{ zIndex: 1 }} className="animate__animated animate__fadeIn header-image" />
            </div>
          </div>
        </div>

        <div className="bg_yellow"></div>
      </header>
      {/* <!-- end of header --> */}
      {/* <!-- start of new recipe --> */}
      <section id="new-recipe">
        <div className="container">
          <h2 className="mb-5 subtitle">Popular For You!</h2>
          <div className="row align-items-center" style={{ marginTop: "100px" }}>
            <div className="bg_yellow_1"></div>
            <div className="col-md-6 col-xs-12">
              <img className="popular-image" src="images/pizza.webp" width="92%" height="500px" style={{ zIndex: 1, borderRadius: "5px" }} />
            </div>

            <div className="col-md-5 mt-2 col-xs-12">
              <h3>Yummy Pizza (Quick & Easy)</h3>
              <hr style={{ width: "20%" }} />
              <p className="text-muted">Delicious Pizza Quick + Easy- Delicious Pizza in a hurry? that's right!</p>
              <div className="btn btn-warning">
                <a href="#" className="text-dark text-decoration-none">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="new-recipe">
        <div className="container">
          <h2 className="mb-5 subtitle">New Recipe</h2>
          <div className="row align-items-center" style={{ marginTop: "100px" }}>
            <div className="col-md-6 col-xs-12">
              <img src="images/buger1.webp" width="92%" height="500px" style={{ zindex: 1, borderRadius: "5px" }} />
            </div>
            <div className="col-md-5 col-xs-12">
              <h3>Tasty And Healthy Burgers (Quick & Easy)</h3>
              <hr style={{ width: "20%" }} />
              <p className="text-muted">Tasty And Healthy Burgers Quick + Easy- Tasty And Healthy Burgers in a hurry? that's right!</p>
              <button className="btn btn-warning">
                <Link className="text-decoration-none text-dark" to="#">
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg_yellow_2"></div>
      </section>
      {/* <!-- end of new recipe --> */}
      {/* <!-- start of popular recipe --> */}
      <section id="popular-recipe">
        <div className="container">
          <h2 className="mb-5 subtitle">Popular Recipe</h2>

          <div className="row">
            {resipesList.map((item) => (
              <RecipesCard title={item?.title} image={item.recipePicture} id={item?.id} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- end of popular recipe --> */}
      {/* <!-- start of footer --> */}
      <Footer />
    </div>
  );
}

export default App;
