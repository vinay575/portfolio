import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from './components/cursorBg';
import Data from './components/Home';
import  About from './components/AboutPg';
import  Skills from './components/Skills';
import  Star from './components/Stars';


const App = () => {
  return (
    <div>
      <Cursor/>
      <Data/>
      <About/>
      <Skills/>  
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"));

