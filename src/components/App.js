import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import CreateRecipe from "../Recipe/CreateRecipe";
import Navigation from "./Navbar";
import RecipeList from "../Recipe/ViewRecipe";

import Home from "./Homepage";
import SignUp from "./signup";
import About from "./About";
import Footer from "./Footer";

export default function App(){
  return(
  
    <BrowserRouter>
  
    <Navigation/>
    <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path ="/about" element ={<About/>}/>
<Route path ="/login" element ={<Login/>}/>
<Route path = "/addrecipe" element ={<CreateRecipe/>}/>
<Route path = "/recipes" element ={<RecipeList/>}/>

<Route path = "/signup" element ={<SignUp/>}/>
<Route path = "/footer" element = {<Footer/>}/>
</Routes>
  
  </BrowserRouter>

)

}