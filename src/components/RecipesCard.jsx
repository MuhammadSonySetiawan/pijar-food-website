import React from 'react'
import { Link } from 'react-router-dom'

function RecipesCard(props) {
    const {title, image} = props
    return (
      <>
        <div className="col-md-4 col-xs-12 mb-4">
          <Link className="text-decoration-none text-dark" to={`/detail/${title?.toLowerCase()?.split(" ").join("-")}`}>
            <div className="menu-background" style={{ backgroundImage: `url('/images/${image}')` }}>
              <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>{title}</h3>
            </div>
          </Link>
        </div>
      </>
    );
}

export default RecipesCard
