import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import '../sass/main.scss';

import Navigation from './Navigation';
import MainPage from './MainPage';


function App() {

  return (<Router>
<div className="">
  <nav ><Navigation/></nav>
  <main className=""><MainPage/></main>
  
</div>

  </Router>
  );
}

export default App;
