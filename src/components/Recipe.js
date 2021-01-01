import { Paper } from "@material-ui/core";
import React from "react";
import styles from "./Recipe.module.css";

function Recipe({ recipe }) {
  return (
    <Paper className={styles.recipe}>
      <h1>{recipe.label}</h1>
      <div style={{ margin: 10 }}>
        <span style={{ fontSize: 30 }}>
          Calories : {Math.round(recipe.calories)}
        </span>
      </div>
      <img
        src={recipe.image}
        alt="image"
        style={{
          borderRadius: "50%",
          width: 200,
          height: 200,
        }}
      ></img>
      <ol>
        {recipe.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ol>
    </Paper>
  );
}

export default Recipe;
