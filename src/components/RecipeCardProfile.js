import React from "react";
import { Link } from "react-router-dom";

function RecipesCardProfile(props) {
  const { title, image, id } = props;
  return (
    <>
      <div className="mb-4 ms-3" style={{}}>
        <Link
          className="text-decoration-none text-dark"
          to={`/detail/${title?.toLowerCase()?.split(" ").join("-")}?id=${id}`}
        >
          <div
            className="menu-background-profile"
            style={{ backgroundImage: `url(${image})` }}
          >
            <h3 style={{ textShadow: "1px 3px 7px rgba(230,255,0,0.93)" }}>
              {title}
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default RecipesCardProfile;
