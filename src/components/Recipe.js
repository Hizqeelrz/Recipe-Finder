import React from 'react';

import {Link} from "react-router-dom";
import Pace from 'react-pace-progress';


// const API_KEY = "9e8702e11e7e8fdcc951cead9b0ae517";
// const API_KEY2 = "232e1ac907e17ec40263bda75606b8b4"
const API_KEY3 = "4aedcdeeba0fde07a94d9520dda5442c"

class Recipe extends React.Component {

    state = {
        activeRecipe: []
    }

    // life cycle hook
    // loads as soon as this is loaded or mounted on the web browser,
    // it trigger as soon as component loads on Screen
    componentDidMount = async () => {
        this.setState({isLoading: true});

        const title = this.props.location.state.recipe;

        // incase of api cors error load this link https://cors-anywhere.herokuapp.com
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY3}&q=${title}`);
    
        //whatever called from the api will be stored in the data variable
        const res = await req.json();

        this.setState({
            activeRecipe: res.recipes[0]
        });
        this.setState({isLoading: false});

        console.log(this.state.activeRecipe);
    }

    render(){
        const recipe = this.state.activeRecipe;
        return (
            <div className="App">
          {this.state.isLoading ? <Pace color="#27ae60"/> : null}
                <header className="App-header">
                    <h1 className="App-title">Recipe App</h1>
                </header>
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
                    <Link to="/"> <button className="btn danger">Go Home</button></Link>
                </div>
                }
            </div>
        </div>
        );
    }
}

export default Recipe;