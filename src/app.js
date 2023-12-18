import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from './components/cursorBg';
import Data from './components/Home';
import  About from './components/AboutPg';
import  Skills from './components/Skills';
import  Star from './components/Stars';
import  Contact from './components/contact';
// <Cursor/>
//<Data/>
//<About/>
//<Skills/>  

const App = () => {
  return (
    <div>
    <Cursor/>
    <Data/>
    <About/>
    <Skills/>  
    <Contact/>
     
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"));

