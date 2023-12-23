import React from "react";
import { BsImages } from "react-icons/bs";
import "./galerie.css";
import Gal1 from "../assets/carn.jpg";
import Gal2 from "../assets/carnal.jpg";
import Gal3 from "../assets/carnaval.jpg";
import Gal4 from "../assets/crabe coco.jpg";
import Gal5 from "../assets/La mère.jpg";
import Gal6 from "../assets/304102287_516199630269629_5164485010431055170_n.jpg";
import Gal7 from "../assets/240669355_285077243381870_706159452649332027_n.jpg";
import Gal8 from "../assets/302608722_516199056936353_2345173299512560106_n.jpg";
import Gal9 from "../assets/240245349_285077063381888_9154331327234212895_n.jpg";
import Gal10 from "../assets/346886492_655442426599129_1070029341652778866_n.jpg";
import Gal11 from "../assets/348714275_651378220338883_2182472596463960064_n.jpg";
import Gal12 from "../assets/355889265_673525884790783_4851079105874800319_n.jpg";


export default function galerie() {
  return (
    <div className="galerie">
      <div className="title_galerie">
        <BsImages color="#022033" size="70" />
        <div className="text_galerie">
          <h1>Gallerie</h1>
          <p>
            Découvrez notre galerie d'image ! Voyagez à travers des paysages
            époustouflants, des cultures fascinantes et des aventures
            inoubliables! Laissez-vous inspirer pour votre prochaine escapade
            touristique!
          </p>
        </div>
      </div>
      <div className="image" id="i">
        <img className="img" src={Gal1} alt="" srcset="" />
        <img className="img" src={Gal2} alt="" srcset="" />
        <img className="img" src={Gal3} alt="" srcset="" />
        <img className="img" src={Gal4} alt="" srcset="" />
        <img className="img" src={Gal5} alt="" srcset="" />
        <img className="img" src={Gal6} alt="" srcset="" />
        <img className="img" src={Gal7} alt="" srcset="" />
        <img className="img" src={Gal8} alt="" srcset="" />
        <img className="img" src={Gal9} alt="" srcset="" />
        <img className="img" src={Gal10} alt="" srcset="" />
        <img className="img" src={Gal11} alt="" srcset="" />
        <img className="img" src={Gal12} alt="" srcset="" />

      </div>
    </div>
  );
}
