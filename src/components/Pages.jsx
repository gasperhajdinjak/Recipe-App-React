import React from "react";
// import Home from "./Home";
import HomeRecipes from "./HomeRecipes";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Details from "./Details";
import Saved from "./Saved";

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<HomeRecipes />} />
      <Route path='/saved' element={<Saved />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  );
}

export default Pages;
