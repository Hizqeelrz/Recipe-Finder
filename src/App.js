import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

const API_KEY= "232e1ac907e17ec40263bda75606b8b4";

class App extends Component {

  // e referes to an event object in the javascript
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault(); //prevents the default behaviour
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=&q=shredded%20chicken&count=5`);
    
    console.log(recipeName);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
