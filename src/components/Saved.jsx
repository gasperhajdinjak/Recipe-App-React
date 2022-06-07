import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//When user clicks on the "bookmarks" button below the search input this component renders the saved recipes
//If there are no recipes saved an alert will pop off
//When user returns back to "Searched" the same recipes should persist until he searches for new recipes

function Saved() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    getSavedSearch();
  }, []);

  const getSavedSearch = async name => {
    const local = localStorage.getItem("favorite");

    if (!local) {
      alert("You have 0 recipes saved!");
    } else {
      setSavedRecipes(JSON.parse(local));
    }
    console.log("sdfsd");
  };

  return (
    <>
      <div className='home-container'>
        {savedRecipes.map(recipe => {
          return (
            <div key={recipe.id} className='random-recipes'>
              <div>
                <img src={recipe.image} alt='recipe' className='random-img' />
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
    </>
  );
}

export default Saved;
