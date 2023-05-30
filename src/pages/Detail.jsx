import "../style/Detail.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import RecipesList from "../menu.json";
import { useLocation } from "react-router";

import React from "react";
import NavbarPhone from "../components/NavbarPhone";

function Detail() {
  const detail = RecipesList.menu;
  const location = useLocation();
  const [currentRecipe, setCurrentRecipe] = React.useState(null);

  React.useEffect(() => {
    const currentSlug = location?.pathname?.split("/")[2];
     window.scrollTo(0, 0);
    console.log(detail);
    setCurrentRecipe(detail.find((res) => res.slug === currentSlug));
  }, []);

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
            <img src="/images/menu.webp" width="35px" height="35px" />
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <NavbarPhone/>
          </div>
        </div>
      </header>
      {/* <!-- end of header --> */}

      {/* <!-- start of content --> */}
      <section id="content">
        <h1 className="text-center text-primary">{currentRecipe?.title}</h1>

        <div className="d-flex justify-content-center">
          <img src={`/images/${currentRecipe?.image}`} className="main-image" />
        </div>

        <div className="row mt-5">
          <div className="col offset-md-2">
            <h2>Ingredients</h2>
            <ul>
              <li>1 pc burger bun (I use bernardi)</li>
              <li>1 beef burger (Bernardi)</li>
              <li>1/4 tsp parsley</li>
              <li>1/4 tsp mayonnaise</li>
              <li>1 tbsp hot sauce</li>
              <li>1 sheet of lettuce, roughly chopped</li>
              <li>sufficient cucumber</li>
              <li>enough onions</li>
              <li>enough tomatoes (I don't use it, because I don't really like it)</li>
              <li>15 gr cheddar cheese (chopped or grated yes optional, I grated it)</li>
              <li>sufficient butter / margarine</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col offset-md-2">
            <h2>Video Step</h2>
            <div className="btn btn-warning">
              <a className="text-dark text-decoration-none" href="https://www.youtube.com/watch?v=BS5zxLxxV18">
                Open video step
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="row mt-5">
            <div className="col offset-md-2">
              <textarea className="form-control" aria-label="With textarea" placeholder="Comment" style={{ height: "200px" }}></textarea>
              <div className="mt-3 d-flex justify-content-center">
                <button className="btn btn-warning">Comment</button>
              </div>
            </div>
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

export default Detail;
