import React from "react";
import "./footer.css";
import Logo from "../assets/All.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import { RiCopyrightLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div className="footer">
      <div className="foot_sup">
        <div className="lo">
          <img src={Logo} alt="" srcset="" width="160px" />
          <p>
            Festiv'ALL est une plateforme qui rassemble toutes les informations
            sur les festivités à Madagascar, les offres de voyages et les
            activités supplémentaires, pour faciliter la recherche des
            voyageurs.
          </p>
        </div>
        <div className="men">
          <h2>NAVIGATION</h2>
          <ul>
            <li>
              <Link to="/"> Accueil</Link>
            </li>
            <li>
              <Link to="/destination">Destinations</Link>
            </li>
            <li>
              <Link to="/offre">Offres</Link>
            </li>
            <li>
               <Link to="/galerie">Gallerie</Link>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="new_leter">
          <h2>NEW LETTER</h2>
          <input type="email" name="" id="" placeholder="Entrez votre email" />
          <input type="submit" value="S'inscrire" />
        </div>
        <div className="contact">
          <h2>CONTACT</h2>
          <ul>
            <li>
              <AiOutlineMail size="20" /> <span>festival@yahoo.com</span>
            </li>
            <li>
            <BsTelephone size="20" />
              <span>+261 34 04 427 56</span>
            </li>
            <li>
            <LuMapPin size="20" />
              <span>Lot 59 B1 Antanimasaja</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot_inf">
        <div className="socio">
          <a href=""><SiFacebook color="white" size="30"/></a>
          <a href=""><SiWhatsapp color="white" size="30"/></a>
          <a href=""><SiInstagram color="white" size="30"/></a>
        </div>
        <p className="cp">
          
          <RiCopyrightLine size="20" />
          2023 CopyRight, festivall.com
        </p>
      </div>
    </div>
  );
}
