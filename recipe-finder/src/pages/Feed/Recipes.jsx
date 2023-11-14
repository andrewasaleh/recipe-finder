// Recipes.js
import React from 'react';
import { collection, getDocs } from "firebase/firestore";

class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      type: props.type,
      name: props.name,
      duration: props.duration,
      ingredients: props.ingredients || [], // Ensure ingredients is an array or default to an empty array
      preparation: props.preparation || [], // Ensure preparation is an array or default to an empty array
      imageURL: props.imageURL,
    };
  }

  renderIngredients() {
    if (!Array.isArray(this.state.ingredients)) {
      return null; // Return null if ingredients is not an array
    }

    const ingredientList = [];
    for (let i = 0; i < this.state.ingredients.length; i++) {
      ingredientList.push(<li key={i}>{this.state.ingredients[i]}</li>);
    }

    return (
      <>
        <h3>Ingredients:</h3>
        <ul>
          {ingredientList}
        </ul>
      </>
    );
  }

  renderPreparation() {
    if (!Array.isArray(this.state.preparation)) {
      return null; // Return null if preparation is not an array
    }

    const stepList = [];
    for (let i = 0; i < this.state.preparation.length; i++) {
      stepList.push(<li key={i}>{this.state.preparation[i]}</li>);
    }

    return (
      <>
        <h3>Preparation:</h3>
        <ol>
          {stepList}
        </ol>
      </>
    );
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.name}</h2>
        <p>Type: {this.state.type}</p>
        <p>Duration: {this.state.duration} minutes</p>

        {this.renderIngredients()}
        {this.renderPreparation()}

        <img src={this.state.imageURL} alt={this.state.name} />
      </div>
    );
  }
}

export default Recipes;
