import React from 'react';

// stateless functional component
// which do not have any state we can make it stateless comp instead of class based compoennt

const Form = (props) => (
  <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="recipeName" placeholder="Type your Favorite Recipe"/>
    <button className="button"><span>Search</span></button>
  </form>
);

export default Form;
