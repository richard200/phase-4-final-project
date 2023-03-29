import logo from './logo.svg';
import './App.css';
import {  Switch, Route, Routes} from 'react-router-dom';
import SignUp from './components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
   
    <div style={{ 
    //   backgroundImage: 'url("https://richie-ngeti.000webhostapp.com/images/recipe.jpeg")',
    //  backgroundSize: 'cover',
    //  backgroundPosition: ' center',
    //  height: '400px'
    }}className="App">
  {/* <SignUp/> */}
  {/* <Home/> */}
  <About/>
    </div>
 
  );
}

export default App;
