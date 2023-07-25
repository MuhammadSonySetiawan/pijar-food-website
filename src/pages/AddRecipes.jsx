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
React.useEffect(()=>{
  if(!localStorage.getItem('auth')){
    navigate('./login')
  }
},[])
  
 const [recipePicture, setRecipePicture] = React.useState(null)
 const [title, setTitle] = React.useState(null)
 const [ingredients, setIngredients] = React.useState(null)
 const [videoLink, setVideoLink] = React.useState(null)

  const hendleAddRecipes = () => {
    axios
      .post(`https://easy-pink-walrus-garb.cyclic.app/recipes`, {
        recipePicture: recipePicture,
        title: title,
        ingredients: ingredients,
        videoLink: videoLink,
      })
      .then((result) => {
        Swal.fire({
          title: "Add Recipes Success",
          text: "Add Recipes Success, redirect to app",
          icon: "success",
        });
        navigate("/")
        
      })
      .catch((error) => {
        Swal.fire({
          title: "Add Recipes Error!",
          text: error?.response?.data?.message ?? "Someting wrong in our app",
          icon: "error",
        });
      });

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
            <input className="form-control h-20" type="file" id="formFileDisabled" style={{ height: "200px" }} onChange={(e) => setRecipePicture(e.target.value.split(`\\`)[2])} />
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="mb-3">
            <textarea className="form-control" style={{ height: "200px" }} id="exampleFormControlTextarea1" placeholder="Ingredients" onChange={(e) => setIngredients(e.target.value)}></textarea>
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Video" onChange={(e) => setVideoLink(e.target.value)} />
          </div>

          <div className="mt-3 d-flex justify-content-center">
            <button className="btn btn-warning" style={{ width: "150px" }} onClick={hendleAddRecipes}>
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
