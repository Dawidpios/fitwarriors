import React from 'react';
import {BsFacebook} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";


const Stopka = () => {
    return ( 
     
    <footer className="footer">
           <div className="row">
        <div className="col-1-of-2">
        <ul className="footer_ul">
            <li className="footer_ul-elements"><a href="https://www.facebook.com/dawid.pios.7" className="footer_link"><BsFacebook/></a></li>
            <li className="footer_ul-elements"><a href="https://github.com/Dawidpios" className="footer_link"><BsGithub/></a></li>
            
        </ul></div>
        <div className="col-1-of-2">
            <p className="footer_aboutMe">Stworzył i zaprojektował strone Dawid Pioś &copy;</p>
        </div>
        </div>
    </footer> );
}
 
export default Stopka;