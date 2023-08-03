import React from "react";
import "../style/Profile.css";

import RecipesCardProfile from "../components/RecipeCardProfile";
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

  const [photo, setPhoto] = React.useState(null);

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
        .get(`https://pijar-food-sonny.onrender.com/users/${idUser}`)
        .then((result) => {
          setProfile(result.data?.data[0]);

          // get data resipes user
          axios
            .get(`https://pijar-food-sonny.onrender.com/recipes/users/me`)
            .then((result) => {
              setRecipeList(result?.data?.data);
            });
        });
    }
  }, []);

  // hendle refresh
  const hendleRefresh = () => {
    const id = localStorage.getItem("id");
      axios
        .get(`https://pijar-food-sonny.onrender.com/users/${id}`)
        .then((result) => {
          setProfile(result.data?.data[0]);
          dispatch(addAuth(result.data.data));
        });
  };

  // edit profile
  const handleEditProfile = () => {
    const token = localStorage.getItem("token");
    axios
      .patch(
        `https://pijar-food-sonny.onrender.com/users/`,
        {
          email: email,
          fullName: name,
          phoneNumber: phoneNumber,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire({
          title: "Update Success!",
          text: res?.data?.messages,
          icon: "success",
        });
        console.log("Sukses :", res);
        hendleRefresh();
      })
      .catch((err) => {
        console.log("Error :", err);
      });
  };

  // edit photo profile
  const handleEditPhoto = () => {
    const token = localStorage.getItem("token");
    axios
      .patch(
        `https://pijar-food-sonny.onrender.com/users/photo`,
        {
          photo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        Swal.fire({
          title: "Update Success!",
          text: res?.data?.messages,
          icon: "success",
        });
        console.log("Sukses :", res);
        hendleRefresh();
      })
      .catch((err) => {
        console.log("Error :", err);
      });
  };

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
                      <div className="d-flex justify-content-center mt-3 mb-3">
                        <input
                          className="form-control"
                          type="file"
                          id="formFileDisabled"
                          style={{ width: "100px" }}
                          onChange={(e) => setPhoto(e.target.files[0])}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          style={{ width: "200px" }}
                          onClick={handleEditPhoto}
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
                      defaultValue={profile?.fullName}
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
                      defaultValue={profile?.email}
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
                      defaultValue={profile?.phoneNumber}
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
                      defaultValue={profile?.password}
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
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleEditProfile}
                  >
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
                    <RecipesCardProfile
                      id="profile"
                      // style={{ width: "500px" }}
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
