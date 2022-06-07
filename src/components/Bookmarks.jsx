import React from "react";
import "../../src/App.css";
import { NavLink } from "react-router-dom";

//button that sends the user to the page when favorite recipes are saved
function Bookmarks() {
  return (
    <NavLink to={"/Saved"}>
      <button type='button' className='btn'>
        Saved Recipes
      </button>
    </NavLink>
  );
}

export default Bookmarks;
