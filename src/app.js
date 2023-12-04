import React from 'react';
import ReactDOM from 'react-dom';
import Data from './components/Data';
import Cursor from './components/cursor';

const App = () => {
  return (
    <div>
      <Cursor/>
      <Data/>
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"));

