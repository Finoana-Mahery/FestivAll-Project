import React from 'react';
import {FaPaperPlane} from "react-icons/fa";
import "../Composant/bloc_dest.css";
import Bout_plein from './bout_plein';





export default function bloc_dest({lieu,titre,description,image}) {
 
  return (

    <div className='bloc_dest' style={
    {backgroundImage:`url(${image})`}}>

        <div className="bloc_detail">

            <div className="lieu">
                <FaPaperPlane size="20" color='white'/>
                <p>{lieu}</p>
            </div>
            <p className='ti'>{titre}</p>
            <p className='desc'>{description}</p>
            <Bout_plein name="Explorer" color="#022033" back="white"/>


        </div>


    </div>

  )
}
