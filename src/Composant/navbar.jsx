import React from "react";
import "./navbar.css";
import Bout_transparent from "./bout_transparent";
import { Link } from "react-router-dom";

export default function navbar(menus) {
  
  return (
    <div className="navbar">
      <img src={menus.log} alt="" srcset="" />
      <ul>
        
          <li id="1" style={{fontWeight:menus.slc==1 && `bold`}}><Link to="/">Accueil</Link></li>
          <li id="2" style={{fontWeight:menus.slc==2 &&`bold`}}><Link to="/offre">Offres</Link></li>
          <li id="3" style={{fontWeight:menus.slc==3 &&`bold`}}><Link to="/destination">Destinations</Link></li>
          <li id="4" style={{fontWeight:menus.slc==4 &&`bold`}}><Link to="/galerie">Galeries</Link></li>
       
      </ul>
      <Bout_transparent name="S'abonner"/>
    </div>
  );
}
