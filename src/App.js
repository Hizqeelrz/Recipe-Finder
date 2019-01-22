import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

// const API_KEY = "9e8702e11e7e8fdcc951cead9b0ae517";
const API_KEY2 = "232e1ac907e17ec40263bda75606b8b4"
// const API_KEY3 = "975a5618562e8754b8857f7b90d04cfa"

class App extends Component {

  state = {
    recipes: []
  }

  // e referes to an event object in the javascript
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault(); //prevents the default behaviour
    // incase of api cors error load this link https://cors-anywhere.herokuapp.com
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY2}&q=${recipeName}&count=15`);

    //whatever called from the api will be stored in the data variable in json format
    const data = await api_call.json();

    this.setState({
      recipes: data.recipes
    });

    console.log(this.state.recipes)
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes")
    const recipes = JSON.parse(json);
    this.setState({ recipes: recipes }); // we can use both key and values name when they are same
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>

        {/*props name is recipes*/}
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
