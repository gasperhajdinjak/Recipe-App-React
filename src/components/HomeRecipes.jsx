import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

//couldn't get it to work with useState hook so I improvised:(
const favoriteArray = JSON.parse(localStorage.getItem("favorite")) || [];

function HomeRecipes() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const local = localStorage.getItem("random");

    //check if there is data in local storage and parse it back into an object an render it
    if (local) {
      setRandom(findFavorites(JSON.parse(local)));
    } else {
      //else fetch it and stringfy it to save it back to locale storage
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=d179fd52dc5b4081a9c76bc38b167405&number=10`
      );

      const data = await api.json();

      localStorage.setItem("random", JSON.stringify(data.recipes));
      setRandom(findFavorites(data.recipes));
    }
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

  //when user clicks the star icon this function checks for the id of the clicked recipe and compares it with the IDs already stored in the local storage. If the recipe is already stored, a click on the star icon delets the recipe from the storage. Otherwise a click adds the recipe to local storage array.
  const saveLocal = rec => {
    const fIndex = favoriteArray.find(fa => fa.id === rec.id);
    if (fIndex === undefined) favoriteArray.push(rec);
    else favoriteArray.splice(favoriteArray.indexOf(fIndex), 1);
    localStorage.setItem("favorite", JSON.stringify(favoriteArray));
    setRandom(findFavorites(random));
  };

  return (
    <div className='home-container'>
      {random.map(recipe => {
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

export default HomeRecipes;
