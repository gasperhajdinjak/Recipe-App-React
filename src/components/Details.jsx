import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";

//when user clicks on the "DETAILS" link, data gets fetched and rendered from a new api link
function Details() {
  const [recipeDetails, setRecipeDetails] = useState({});

  let params = useParams();

  useEffect(() => {
    getDetails();
  }, [params.id]);
  const getDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=d179fd52dc5b4081a9c76bc38b167405`
    );
    const saveDetails = await data.json();
    setRecipeDetails(saveDetails);
    console.log(saveDetails);
  };
  return (
    <>
      <div className='details-container'>
        <div className='img-container'>
          <img src={recipeDetails.image} alt='' />
        </div>
        <div className='content'>
          <h1>{recipeDetails.title}</h1>
          <h3>
            <BiTimeFive />
            {recipeDetails.readyInMinutes}
          </h3>
          <h2>Ingredients:</h2>
          <ul className='ing-list'>
            {recipeDetails.extendedIngredients?.map(ing => (
              <li key={ing.id}>{ing.name}</li>
            ))}
          </ul>
          <h2>Instructions:</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: recipeDetails.instructions,
            }}></p>
        </div>
      </div>
    </>
  );
}

export default Details;
