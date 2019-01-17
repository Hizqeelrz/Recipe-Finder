import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY= "9e8702e11e7e8fdcc951cead9b0ae517";

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
