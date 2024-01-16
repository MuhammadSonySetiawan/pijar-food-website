import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/AddRecipes.css";
import NavbarPhone from "../components/NavbarPhone";

import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddRecipes() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      Swal.fire({
        title: "Oops...",
        text: "ou haven't logged in yet!",
        icon: "warning",
      });
      navigate("/login");
    }
  }, []);

  const [recipePicture, setRecipePicture] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [ingredients, setIngredients] = React.useState();
  const [videoLink, setVideoLink] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [nameCategory, setNameCategory] = React.useState("");

  const handleCategory = (e) => {
    setNameCategory(e.target.value);
  };

  const hendleAddRecipes = () => {
    if (recipePicture && title && ingredients && videoLink) {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      axios
        .post(
          `https://pijar-food-sonny.onrender.com/recipes`,
          {
            recipePicture: recipePicture,
            title: title,
            ingredients: ingredients,
            videoLink: videoLink,
            category: nameCategory,
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
            title: "Add Recipes Success",
            text: "Add Recipes Success, redirect to app",
            icon: "success",
          });

          navigate("/");
        })
        .catch((error) => {
          Swal.fire({
            title: "Add Recipes Error!",
            text: error?.response?.data?.message ?? "Someting wrong in our app",
            icon: "error",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      Swal.fire({
        title: "Add Recipes Error!",
        text: "Please fill in completely",
        icon: "error",
      });
    }
  };

  return (
    <div>
      {/* <!-- start of header --> */}
      <header>
        <nav className="container mt-4">
          <div className="row animate__animated animate__fadeInDown">
            <Navbar />
          </div>
        </nav>
        <div className="mt-2 d-flex justify-content-between align-items-center hide-desktop">
          <img
            src="/images/logoNav.png"
            alt=""
            style={{ width: "3.5rem", marginLeft: "1rem" }}
          />
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
      {/* <!-- end of header --> */}

      {/* <!-- start of content --> */}
      <section id="content" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="input-group mb-3 mt-3 flex">
            <label className="me-3">Input Image :</label>
            <input
              style={{ borderRadius: "5px" }}
              className="form-control h-20"
              type="file"
              id="formFileDisabled"
              // style={{ height: "200px" }}
              // onChange={(e) => setRecipePicture(e.target.value.split(`\\`)[2])}
              onChange={(e) => setRecipePicture(e.target.files[0])}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              style={{ height: "200px" }}
              id="exampleFormControlTextarea1"
              placeholder="Ingredients"
              onChange={(e) => setIngredients(e.target.value)}
              rows="5"
              cols="40"
            ></textarea>
            <p className="text-secondary">
              Use a period (.) to separate each ingredient.
            </p>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Video"
              onChange={(e) => setVideoLink(e.target.value)}
            />
            <p className="text-secondary">Insert the video link.</p>
          </div>

          <div>
            <select
              value={nameCategory}
              onChange={handleCategory}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="Chicken">Chicken</option>
              <option value="Snacks">Snacks</option>
              <option value="Ice Cream">Ice Cream</option>
              <option value="Mie">Mie</option>
              <option value="Vegeterian">Vegeterian</option>
              <option value="Seafood">Seafood</option>
              <option value="Meat">Meat</option>
              <option value="Other Food">Other Food</option>
            </select>
          </div>

          <div className="mt-3 d-flex justify-content-center">
            <button
              className="btn btn-warning"
              style={{ width: "150px" }}
              onClick={hendleAddRecipes}
            >
              {isLoading === true ? "Loading..." : "Post"}
            </button>
          </div>
        </div>
      </section>

      {/* <textarea id="myTextarea" rows="5" cols="40"></textarea>
      <button onclick={showTextareaContent}>Tampilkan Konten</button>
      <p id="contentDisplay"></p> */}

      {/* <!-- end of content --> */}

      {/* <!-- start of footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default AddRecipes;
