import React, { useRef, useEffect, useState } from "react";
import Img1 from "../assets/adobestock-247791789.jpg";
import Img2 from "../assets/maxresdefault.jpg";
import Img3 from "../assets/le-savika-fianarantsoa.jpg";
import Img4 from "../assets/carnal.jpg"
import Bout_plein from './bout_plein';
import {FaPaperPlane} from "react-icons/fa";
import {BsChevronLeft} from "react-icons/bs";
import {BsChevronRight} from "react-icons/bs";

import "./slide.css";

const slide = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: `${Img1}`,
      desc: "Le Festival de la Baleine de Sainte-Marie, à Madagascar, célèbre la migration des baleines à travers des spectacles, des expositions et des activités nautiques.",
      name: "FESTIVAL BALEINE",
      lieu:"Saint Marie, Madagascar"
    },
    {
      id: 2,
      imgUrl:`${Img2}`,
      desc: "Le festival Somaroho à Nosy Be Hell-Ville est une célébration annuelle colorée et animée qui célèbre le patrimoine culturel de la région. Les habitants et les visiteurs participent aux danses traditionnelles, aux défilés costumés et aux événements festifs pour honorer les coutumes malgaches et créer une atmosphère de joie et de convivialité.",
      name: "FESTIVAL SOMARO",
      lieu:"Nosy Be, Madagascar"
    },
    {
      id: 3,
      imgUrl:`${Img3}`
        ,
      desc: "Le 'Savika' est une forme traditionnelle de lutte à Madagascar, populaire dans les hautes terres centrales du pays. Les participants, généralement domestiques des jeunes hommes, s'affrontent en tant que cavaliers sur des zébus, qui sont des bovins.",
      name: "SAVIKA",
      lieu:"Fianaratsoa, Madagascar"
    },
    {
      id: 5,
      imgUrl:`${Img4}`,
      desc: "La fin du mois de juillet est marquée chaque année par un grand évènement qui allie la tradition et la culture à Mahajanga. L'ethnie Sakalava y célèbre le Fanompoam-be ou le bain des reliques royales ; elle retrouve pendant une dizaine de jours ses racines.",
      name: "FITAMPOHA",
      lieu:"Mahajanga, Madagascar"
    },
   
  ];

  return (
    <div className="container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
                <div className="lieu"><FaPaperPlane size="20" color='white'/>{item.lieu}</div>
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <Bout_plein  name="Explorer" color="#022033" back="white"/>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}><BsChevronLeft/></button>
        <button id="next" onClick={handleClickNext}><BsChevronRight/></button>
      </div>
    </div>
  );
};

export default slide;
