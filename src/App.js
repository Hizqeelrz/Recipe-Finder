import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

const API_KEY= "232e1ac907e17ec40263bda75606b8b4";

class App extends Component {

  state = {
    recipes: []
  }


  // e referes to an event object in the javascript
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault(); //prevents the default behaviour
    // incase of api cors error load this link https://cors-anywhere.herokuapp.com
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=15`);

    //whatever called from the api will be stored in the data variable
    const data = await api_call.json();

    this.setState({
      recipes: data.recipes
    });

    console.log(this.state.recipes)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>

        { this.state.recipes.map((recipe) => {
          return (
            <div>
              <p key={recipe.recipe_id}>{recipe.title}</p>
            </div>
          );
        } )}
      </div>
    );
  }
}

export default App;
