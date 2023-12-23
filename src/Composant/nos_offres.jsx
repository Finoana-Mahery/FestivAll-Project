import React from "react";
import "./nos_offres.css";
import {LuClipboardList}from "react-icons/lu";
import VacationPng from "../assets/3d-plastic-people-hat-and-cocktail.png"
import Bout_plein from "./bout_plein";


export default function nos_offres() {
  return (
    <div className="nos_offres">
      <div className="section1">
        <div className="title">
          <LuClipboardList color="#022033" size="50"/>
          <div className="text">
            <h1>NOS OFFRES</h1>
            <p>Des promotions, des réductions et des offres spécialement pour vous!</p>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="case_left">
          <p>Une réduction de 5% sur chaque offre si vous faites un abonnement annuel de 30 euros</p>
          <Bout_plein name="S'abonner"/>
        </div>
        <img src={VacationPng} alt="" />
      </div>
      <div className="section3">
        <div className=" offre offre1">
          <p>Offre
            <br />
            <span>Royal</span>
          </p>
          <ul>
            <li>Hôtel avec une piscine commune.</li>
            <li>Restauration avec menu varié au choix.</li>
            <li>Cinq escapades en véhicule hors de la ville en bateau/ voiture/quad/bajaj, etc.</li>
            <li>Passe d'accès aux sites touristiques inclus.</li>
            <li>Fourniture quotidienne d'une bouteille d'eau .</li>
            <li>Cocktails offerts chaque jour.</li>
            <li>Pack souvenir de 4 kg offert.</li>
            <li>Soirées Barbecue avec boissons (Whisky/Rhum/bière) et grillades prévues aux choix</li>
          </ul>
          <Bout_plein name="Découvrir"/>
        </div>
        <div className=" offre offre1">
          <p>Offre
            <br />
            <span>Luxe</span>
          </p>
          <ul>
            <li>Hôtel avec une piscine commune.</li>
            <li>Restauration avec menu varié au choix.</li>
            <li>Trois escapades en véhicule hors de la ville en bateau/voiture/quad/bajaj, etc.</li>
            <li>Passe d'accès aux sites touristiques inclus.</li>
            <li>Fourniture quotidienne d'une bouteille d'eau .</li>
            <li>Cocktails offerts chaque jour.</li>
            <li>Pack souvenir de 2,5 kg offert.</li>
            <li>Soirées Barbecue avec boissons  offerrts</li>
          </ul>
          <Bout_plein name="Découvrir"/>
        </div>
        <div className=" offre offre1">
          <p>Offre
            <br />
            <span>Prestige</span>
          </p>
          <ul>
            <li>Hôtel avec piscine commune.</li>
            <li>Restauration avec menu au choix.</li>
            <li>Une excursions véhiculées hors de la ville (bateau/voiture/Quad/Bajaj,...).</li>
            <li>Passe pour les sites touristiques.</li>
            <li>Bouteille d’eau chaque jour. </li>
            <li>Pack souvenir de 1 kg</li>
            <li>Soirée Barbecue</li>
          </ul>
          <Bout_plein name="Découvrir"/>
        </div>
        
      </div>
    </div>
  );
}
