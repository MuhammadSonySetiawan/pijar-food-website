import React from "react";
import "../style/Profile.css";

import RecipesCard from "../components/RecipesCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarPhone from "../components/NavbarPhone";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addAuth } from "../reducers/auth";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [profile, setProfile] = React.useState(null);
  const [recipeList, setRecipeList] = React.useState([]);

  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  // console.log(idUser);
  const state = useSelector((reducer) => reducer.auth);
  // console.log(e)
  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
           Swal.fire({
             title: "Oops...",
             text: "ou haven't logged in yet!",
             icon: "warning",
           });
      navigate("/login");
    } else {
      // get data user
      const idUser = localStorage.getItem("id");
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/users/${idUser}`)
        .then((result) => {
          setProfile(result.data?.data[0]);

          // get data resipes user
          axios
            .get(`${process.env.REACT_APP_BASE_URL}/recipes/users/me`)
            .then((result) => {
              setRecipeList(result?.data?.data);
            });
        });
    }
  }, []);

  return (
    <div>
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
            <img src="images/menu.webp" width="35px" height="35px" />
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <NavbarPhone />
          </div>
        </div>
      </header>

      {/* <!-- Start of Content --> */}
      <div className="container mb-4">
        <div className="d-flex justify-content-center mt-2">
          <img
            src={profile?.photo}
            className="rounded-circle"
            alt="Cinque Terre"
            width="100"
            height="100"
          />
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <h3 className="text-center text-primary">{profile?.fullName}</h3>
        </div>

        {/* <!-- Button trigger modal --> */}
        <div className="d-flex justify-content-center mt-2">
          <button
            type="button"
            className="btn btn-light"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit Profile
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <form class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  {/* star form edit */}
                  <div className="mb-3">
                    <div className="d-flex flex-column justify-content-center">
                      <div className="d-flex justify-content-center">
                        <img
                          src={profile?.photo}
                          className="rounded-circle"
                          alt="Cinque Terre"
                          width="100"
                          height="100"
                        />
                      </div>
                      <div className="d-flex justify-content-center mb-3">
                        <input
                          className="form-control"
                          type="file"
                          id="formFileDisabled"
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          style={{ width: "200px" }}
                        >
                          Edit Profile
                        </button>
                      </div>
                    </div>

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
                      // defaultValue={}
                      style={{ height: "35px" }}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="exampleInputPassword1"
                      placeholder="Password"
                      style={{ height: "35px" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/*end form edit */}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- end of content --> */}

      {/* <!-- Start Header Recipes --> */}

      <header>
        <section id="popular-recipe">
          <div className="container d-flex bd-highlight mb-3">
            <div className="menu-recipes mt-4">
              <div className="row animate__animated animate__fadeInDown mb-4">
                <div className="col-12">
                  <div>
                    <a className="text-primary fw-bold" href="#">
                      My Recipes
                    </a>
                    <a
                      className="text-primary fw-bold text-decoration-none mx-4"
                      href="#"
                    >
                      Seved Recipes
                    </a>
                    <a
                      className="text-primary fw-bold text-decoration-none"
                      href="#"
                    >
                      Liked Recipes
                    </a>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                {recipeList.length !== 0 ? (
                  recipeList.map((item) => (
                    <RecipesCard
                      title={item?.title}
                      image={item?.recipePicture}
                      id={item?.id}
                    />
                  ))
                ) : (
                  <p className="text-center">
                    You don't have a recipe list yet
                  </p>
                )}
              </div>

              {/* <div className="row">
                <div className="col-md-4 col-xs-12 mb-4">
                  <div
                    className="menu-background"
                    style={{
                      backgroundImage: 'url("/images/sugarSalmon.webp")',
                    }}
                  >
                    <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>Sugar Salmon</h3>
                  </div>
                </div>

                <div className="col-md-4 col-xs-12 mb-4">
                  <div
                    className="menu-background"
                    style={{
                      backgroundImage: 'url("/images/bombChicken.webp")',
                    }}
                  >
                    <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>Bomb Chicken</h3>
                  </div>
                </div>

                <div className="col-md-4 col-xs-12 mb-4">
                  <div
                    className="menu-background"
                    style={{
                      backgroundImage: 'url("/images/chikenKare.webp")',
                    }}
                  >
                    <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>Chiken Kare</h3>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </header>

      {/* <!-- end Header recipes --> */}

      {/* <!-- start of footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Profile;
