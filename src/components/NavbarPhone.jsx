import React from 'react'
import { Link } from "react-router-dom";
 
function NavbarPhone() {
    return (
      <div>
        <div className="text-center">
          <Link className="text-primary fw-bold mb-3 mt-3 text-center text-decoration-none" to="/">
            Home
          </Link>
          <br />
          <Link className="text-primary fw-bold text-decoration-none mb-3 text-center" to="/AddRecipes">
            Add Recipe
          </Link>
          <br />
          <Link className="text-primary fw-bold text-decoration-none mb-3 text-center" to="/Profile">
            Profile
          </Link>
        </div>
      </div>
    );
}

export default NavbarPhone
