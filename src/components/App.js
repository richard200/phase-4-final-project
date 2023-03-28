import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import CreateRecipe from "../Recipe/CreateRecipe";
import Navigation from "./Navbar";
import ViewRecipes from "../Recipe/ViewRecipe";
import UpdateRecipe from "../Recipe/UpdateRecipe";


export default function App(){
return(

  <BrowserRouter>

  <Navigation/>
  <Routes>
<Route path ="/login" element ={<Login/>}/>
<Route path = "/addrecipe" element ={<CreateRecipe/>}/>
<Route path = "/recipes" element ={<ViewRecipes/>}/>
<Route path = "/update" elemet = {<UpdateRecipe/>}/>
  </Routes>
  
  </BrowserRouter>

)

}