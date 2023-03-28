import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import CreateRecipe from "../Recipe/CreateRecipe";


export default function App(){
return(

  <BrowserRouter>
  <Login/>
  <Routes>
<Route path ="/login" element ={<Login/>}/>
  </Routes>
  
  </BrowserRouter>

)

}