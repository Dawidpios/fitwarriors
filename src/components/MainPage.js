import React from 'react';
import {Route, Routes} from "react-router-dom"
import HomePage from '../pages/HomePage';
import Calc from '../pages/calc';
import Food from '../pages/food';

const MainPage = () => {
   
       

    return ( <>
        <Routes>
        <Route path="https://dawidpios.github.io/fitwarriors/" element={<HomePage />}></Route>
        <Route path="/calc" element={<Calc/>}></Route>
        <Route path="/food" element={<Food/>}></Route>
       
        </Routes>
        
        </>);
}
 
export default MainPage;
