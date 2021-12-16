import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {BiMenu} from "react-icons/bi";
import {BiCookie} from "react-icons/bi";
import {BiRestaurant} from "react-icons/bi";
import {BiHome} from "react-icons/bi";
import { FiXOctagon } from "react-icons/fi"


const li = [
  { name: "Strona Główna", path: "/" , icon: <BiHome className="Nav_bar-icon"/>},
  { name: "Oblicz zapotrzebowanie", path: "/calc", icon:<BiCookie className="Nav_bar-icon"/>},
  { name: "Przykładowe posiłki", path: "/food", icon:<BiRestaurant className="Nav_bar-icon"/>  },
];
const Navigation = () => {
  
  const [ToggleBtn, setToggleBtn] = useState(false);
  
  const navHandleBtn=()=>{
    const navBar = document.querySelector(".Nav_bar");
    navBar.classList.toggle("Nav_bar-active")

    const navHandle = document.querySelector(".Nav_bar-handle");
    navHandle.classList.toggle("Nav_handle-roll")

    setToggleBtn(!ToggleBtn)
}
  const menu = li.map((item) => (
    <li className="Nav_bar-ul-li" key={item.name}  >
      <NavLink to={item.path}  onClick={navHandleBtn}  >{item.icon}
       {item.name}
      </NavLink>
    </li>
  
  ));


  return (<>
 
  {ToggleBtn ? <FiXOctagon className="Nav_bar-handle" onClick={navHandleBtn}/> : <BiMenu className="Nav_bar-handle" onClick={navHandleBtn}/>}
  
  <div className="Nav_bar Nav_bar-active">
      <ul className="Nav_bar-ul">{menu}</ul>
    </div></>
  );
};

export default Navigation;
