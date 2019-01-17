import React from 'react';

// This Link component directs us to the route we are pointing out
import { Link } from "react-router-dom";

// passing the argument with props to import the props from the parent
const Recipes = (props) => (
    <div className="container">
      <div className="row">
      { props.recipes && props.recipes.map((recipe) => {
          return (
            // key has to be passed always to the most parent element
            <div key={recipe.recipe_id} className="col-md-4" style={{marginBottom: "2rem"}}>
              <div className="recipes__box">
                <img 
                  className="recipe__box-img"
                  src={recipe.image_url} 
                  alt={recipe.title} />
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                </h5>
                <p className="recipes__subtitle">Publisher: <span>
                  {recipe.publisher}
                  </span></p>
              </div>
              <button className="recipe_buttons">

              {/* state property(in location Object) is used to display actual recipe on Recipe Component */}
              {/* we can handle template literals inside the javascript expression */}
              <Link to={{ pathname: `/recipe/${recipe.recipe_id}`,
                    state: {recipe: recipe.title}
             }}>View Recipe</Link>
              </button>
            </div>
          </div>
          );
        }) }
      </div>
    </div>
);

export default Recipes;