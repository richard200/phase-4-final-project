import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import CreateRecipe from "../Recipe/CreateRecipe";
import Navigation from "./Navbar";
import RecipeList from "../Recipe/ViewRecipe";

// import Home from "./Homepage";
import SignUp from "./signup";
import About from "./About";
import Footer from "./Footer";

export default function App(){
  return(
  
    <BrowserRouter>
  
    <Navigation/>
   
    <Route path = "/" element={<About/>}/>
    <Route path ="/about" element ={<About/>}/>
<Route path ="/login" element ={<Login/>}/>
<Route path = "/addrecipe" element ={<CreateRecipe/>}/>
<Route path = "/recipes" element ={<RecipeList/>}/>


<Route path = "/signup" element ={<SignUp/>}/>
<Route path = "/footer" element = {<Footer/>}/>

  
  </BrowserRouter>

)

}