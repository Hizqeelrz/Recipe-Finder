import React from 'react';

// stateless functional component
// which do not have any state we can make it stateless comp instead of class based compoennt

const Form = (props) => (
  <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button">Search</button>
  </form>
);

export default Form;
