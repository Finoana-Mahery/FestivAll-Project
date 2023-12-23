import React from "react";
import "./garde.css";
import Bout_transparent from "./bout_transparent";
import { Link } from "react-router-dom";

export default function garde() {
  return (
    <div className="garde">
      <h1>
        Bienvenue chez <br />
        <span>Festiv'all</span>
      </h1>
      <p>
        Votre guichet unique pour des aventures extraordinaires à Madagascar !
        Que vous rêvez de découvrir de nouveaux horizons, de vous plonger dans
        des cultures fascinantes ou d'explorer des paysages époustouflants mais
        vous ne savez pas quand, notre plateforme est là pour vous accompagner.
      </p>
      <Link to="/destination"><Bout_transparent name="Destinations"/></Link>
    </div>
  );
}
