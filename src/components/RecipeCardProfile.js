import React from "react";
import { Link } from "react-router-dom";

function RecipesCardProfile(props) {
  const { title, image, id } = props;
  return (
    <>
      <div className="mb-4 me-3" style={{ height: "200px" }}>
        <Link
          className="text-decoration-none text-dark btn-close"
          to={`/detail/${title?.toLowerCase()?.split(" ").join("-")}?id=${id}`}
          // data-backdrop="false"
        >
          <div
            className="menu-background-profile"
            style={{ backgroundImage: `url(${image})` }}
          >
            <h5
              style={{
                textShadow: "1px 3px 7px rgba(230,255,0,0.93)",
                // lineHeight: "1.5em",
                // height: "3em",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              {title}
            </h5>
          </div>
        </Link>
      </div>
    </>
  );
}

export default RecipesCardProfile;
