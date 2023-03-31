import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import CreateRecipe from "../Recipe/CreateRecipe";
import Navigation from "./Navbar";
import RecipeList from "../Recipe/ViewRecipe";
// import Recipes from "../Recipe/Recipes"

// import Home from "./Homepage";
import Signup from "./signup";
import About from "./About";
import Footer from "./Footer";

export default function App(){
  // const [token, setToken] = useState(null);
  
  // const handleLogin = (token) => {
  //   setToken(token);
  // };

  return(
    <div>
    <BrowserRouter>

  
  
    <Navigation/>
    {/* {token ? (
      <CreateRecipe token={token} />
    ) : (
      <Login onLogin={handleLogin} />
    )} */}
    <Routes>
    <Route path = "/" element={<About/>}/>
    <Route path ="/about" element ={<About/>}/>
<Route path ="/login" element ={<Login/>}/>
<Route path = "/addrecipe" element ={<CreateRecipe/>}/>
<Route path = "/recipes" element ={<RecipeList/>}/>


<Route path = "/signup" element ={<Signup/>}/>
<Route path = "/footer" element = {<Footer/>}/>
</Routes>
  
  </BrowserRouter>
  </div>


)

}