import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

//In this component the same logic applies as in the <HomeRecipes/> component only that it gets rendered when user searches for a recipe

const favoriteArray = JSON.parse(localStorage.getItem("favorite")) || [];

function Searched() {
  const [recipesSearch, setRecipesSearch] = useState([]);
  let params = useParams();

  useEffect(() => {
    searchRecipes(params.search);
  }, [params.search]);

  const searchRecipes = async name => {
    const local = localStorage.getItem("searched");

    if (local) {
      setRecipesSearch(findFavorites(JSON.parse(local)));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=d179fd52dc5b4081a9c76bc38b167405&query=${name}&number=10`
      );
      const recipes = await data.json();

      localStorage.setItem("searched", JSON.stringify(recipes.results));

      setRecipesSearch(findFavorites(recipes.results));
    }
    localStorage.removeItem("searched");
  };

  const findFavorites = dataArray => {
    const fav = JSON.parse(localStorage.getItem("favorite"));
    console.log(fav);
    if (!fav || fav === undefined) return dataArray;
    const newArr = dataArray.map(r => {
      const find = fav.find(f => f.id === r.id);
      if (find) r.isActive = true;
      else r.isActive = false;
      return r;
    });
    return newArr;
  };

  const saveLocal = rec => {
    const fIndex = favoriteArray.find(fa => fa.id === rec.id);
    if (fIndex === undefined) favoriteArray.push(rec);
    else favoriteArray.splice(favoriteArray.indexOf(fIndex), 1);
    localStorage.setItem("favorite", JSON.stringify(favoriteArray));
    setRecipesSearch(findFavorites(recipesSearch));
  };

  return (
    <div className='home-container'>
      {recipesSearch.map(recipe => {
        return (
          <div key={recipe.id} className='random-recipes'>
            <div>
              <img src={recipe.image} alt='recipe' className='random-img' />
              <AiOutlineStar
                className='save-icon'
                key={recipe.id}
                size={50}
                style={{
                  color: recipe.isActive ? "green" : "#EDF0B5",
                }}
                onClick={() => saveLocal(recipe)}
              />
              <div className='random-text'>
                <h3 className='random-title'>{recipe.title}</h3>
                <Link to={"/details/" + recipe.id}>
                  <h3 className='details-text'>DETAILS</h3>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
