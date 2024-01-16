import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="col-10">
        <div className="w50">
          <img src="/images/logoNav.png" alt="" style={{width: "5rem", marginRight: "5rem"}}/>
          <Link className="text-primary fw-bold text-decoration-none" style={{ zIndex: 4 }} to="/">
            Home
          </Link>
          <Link className="text-primary fw-bold text-decoration-none mx-5" to="/AddRecipes">
            Add Recipe
          </Link>
          <Link className="text-primary fw-bold text-decoration-none" to="/Profile">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
