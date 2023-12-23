import React from "react";
import "./nos_destination.css";
import { MdTravelExplore } from "react-icons/md";
import Bloc_dest from "./bloc_dest.jsx";
import Image from "../assets/adobestock-247791789.jpg";
import Slide from "./slide.jsx";

export default function nos_destination() {
  return (
    <div className="nos_dest">
      <div className="title_dest">
        <MdTravelExplore color="#022033" size="50" />
        <div className="text_dest">
          <h1>NOS DESTINATIONS</h1>
          <p>Divers endroits sélectionnés pour vous</p>
        </div>
      </div>
      <div className="list_dest">
        <Slide />
      </div>
    </div>
  );
}
