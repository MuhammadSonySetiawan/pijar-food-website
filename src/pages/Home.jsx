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
const newRecipe = resipesList[0];

const popularRecipeId = resipesList.length - 1
const popularRecipe = resipesList[popularRecipeId];
console.log(popularRecipe);


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
            <div
              className="col text-md-end position-absolute w-25"
              style={{ zIndex: 1, right: "2%" }}
            >
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
                  <Link
                    className="text-white me-5 fw-bold text-decoration-none"
                    to="/Login"
                  >
                    Login
                  </Link>
                  <Link
                    className="text-white fw-bold text-decoration-none"
                    to="/Register"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
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
                  <Link
                    className="text-primary fw-bold text-decoration-none mb-3 text-center"
                    to="/Login"
                  >
                    Login
                  </Link>
                  <br />
                  <Link
                    className="text-primary fw-bold text-decoration-none mb-3 text-center"
                    to="/Register"
                  >
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
                {/* <input
                  className="form-control form-control-lg"
                  placeholder="search restaurant, food"
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      window.location.href = "#popular-recipe";

                      hendelSearch();
                    }
                  }}
                /> */}
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-light border-secondary mb-3 h-10 w-100 mt-3 text-start text-secondary border-opacity-50 py-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ cursor: "text", fontSize: "21px" }}
                >
                  Search food
                </button>

                {/* <!-- Start Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header d-flex justify-content-center">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          <input
                            className="form-control form-control-lg"
                            style={{ fontSize: "18px" }}
                            placeholder="Search food"
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.keyCode === 13) {
                                hendelSearch();
                              }
                            }}
                          />
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body row">
                        {keyword == 0 ? (
                          <div className="text-center">
                            Have not entered the name of the recipe
                          </div>
                        ) : (
                          <>
                            {resipesList == resipesList ? (
                              <div class="close row">
                                {resipesList.map((item) => (
                                  <RecipesCard
                                    title={item?.title}
                                    image={item?.recipePicture}
                                    id={item?.id}
                                  />
                                ))}
                              </div>
                            ) : (
                              <>no recipe yet</>
                            )}
                          </>
                        )}
                      </div>
                      <div className="modal-footer"></div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Modal --> */}
              </div>
            </div>
            <div className="col-md-5 col-xs-12 order-1 order-md-2">
              <img
                src="images/home.webp"
                width="100%"
                height="100%"
                style={{ zIndex: 1 }}
                className="animate__animated animate__fadeIn header-image"
              />
            </div>
          </div>
        </div>

        <div className="bg_yellow"></div>
      </header>
      {/* <!-- end of header --> */}
      {/* <!-- start of new recipe --> */}
      <section id="new-recipe">
        <div className="container">
          <h2 className="mb-2 subtitle">Popular For You!</h2>
          <div
            className="row align-items-center"
            style={{ marginTop: "100px" }}
          >
            <div className="bg_yellow_1"></div>
            <div className="col-md-6 col-xs-12">
              <img
                className="popular-image"
                src={popularRecipe?.recipePicture}
                width="92%"
                height="500px"
                style={{ zIndex: 1, borderRadius: "5px" }}
              />
            </div>

            <div className="col-md-5 mt-2 col-xs-12">
              <h3>Yummy {popularRecipe?.title} (Quick & Easy)</h3>
              <hr style={{ width: "20%" }} />
              <p className="text-muted">
                Delicious {popularRecipe?.title} Quick + Easy- Delicious
                {popularRecipe?.title}
                in a hurry? that's right!
              </p>
              <div className="btn btn-warning">
                <Link
                  to={`/detail/${popularRecipe?.title
                    ?.toLowerCase()
                    ?.split(" ")
                    .join("-")}?id=${popularRecipe?.id}`}
                  className="text-dark text-decoration-none"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="new-recipe">
        <div className="container">
          <h2 className="mb-5 subtitle">New Recipe</h2>
          <div
            className="row align-items-center"
            style={{ marginTop: "100px" }}
          >
            <div className="col-md-6 col-xs-12">
              <img
                src={newRecipe?.recipePicture}
                width="92%"
                height="500px"
                style={{ zindex: 1, borderRadius: "5px" }}
              />
            </div>
            <div className="col-md-5 col-xs-12">
              <h3>Tasty And Healthy {newRecipe?.title} (Quick & Easy)</h3>
              <hr style={{ width: "20%" }} />
              <p className="text-muted">
                Tasty And Healthy {newRecipe?.title} Quick + Easy- Tasty And
                Healthy {newRecipe?.title} in a hurry? that's right!
              </p>
              <button className="btn btn-warning">
                <Link
                  className="text-decoration-none text-dark"
                  to={`/detail/${newRecipe?.title
                    ?.toLowerCase()
                    ?.split(" ")
                    .join("-")}?id=${newRecipe?.id}`}
                >
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
              <RecipesCard
                title={item?.title}
                image={item?.recipePicture}
                id={item?.id}
              />
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
