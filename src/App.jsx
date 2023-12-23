import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './page/home';
import Offres from "./page/offres";
import Destination from "./page/destination";
import Galeries from "./page/galeries";



export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/offre" element= {<Offres/>}/>
        <Route path="/destination" element= {<Destination/>}/>
        <Route path="/galerie" element= {<Galeries/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}
