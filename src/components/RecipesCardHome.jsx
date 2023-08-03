import React from 'react'
import { Link } from 'react-router-dom'

function RecipesCardHome(props) {
    const {title, image, id} = props
    return (
      <>
        <div className="col-md-3 col-xs-12 mb-4">
          <Link
            className="text-decoration-none text-dark"
            to={`/detail/${title
              ?.toLowerCase()
              ?.split(" ")
              .join("-")}?id=${id}`}
          >
            <div
              className="menu-background-home"
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
  
export default RecipesCardHome;
