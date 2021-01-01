import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  const api = {
    APP_ID: "b67024d0",
    APP_KEY: "d76fd1d0994896cbbf244a1713a60ab5",
  };

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${api.APP_ID}&app_key=${api.APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleQuery}>
        <input
          type="text"
          className="search-bar"
          onChange={handleSearch}
          value={search}
          placeholder = "Search for a recipe"
        ></input>
        <Button
          type="submit"
          className="search-button"
          variant="outlined"
          color="secondary"
        >
          Search
        </Button>
      </form>
      <div className = "recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
