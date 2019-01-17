import React from 'react';

import {Link} from "react-router-dom";


const API_KEY= "9e8702e11e7e8fdcc951cead9b0ae517";

class Recipe extends React.Component {

    state = {
        activeRecipe: []
    }

    // life cycle hook
    // loads as soon as this is loaded or mounted on the web browser,
    // it trigger as soon as component loads on Screen
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;

        // incase of api cors error load this link https://cors-anywhere.herokuapp.com
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
        //whatever called from the api will be stored in the data variable
        const res = await req.json();

        this.setState({
            activeRecipe: res.recipes[0]
        });
        console.log(this.state.activeRecipe);
    }

    render(){

        const recipe = this.state.activeRecipe;

        return (
            <div className="container">
                {
                    this.state.activeRecipe.length !== 0 &&
                    <div className="active-recipe">
                    <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
                    <h3 className="active-recipe__title">{recipe.title}</h3>
                    <h4 className="active-recipe__publisher">Publisher:  <span>
                        {recipe.publisher}
                        </span>
                    </h4>
                    <p className="active-recipe__website">
                        <span><a href={recipe.publisher_url} >{recipe.publisher_url}</a></span>
                    </p>
                    <button className="active-recipe__button" >
                        <Link to="/">Go Home</Link>
                    </button>
                </div>
                }
            </div>
        );
    }
}

export default Recipe;