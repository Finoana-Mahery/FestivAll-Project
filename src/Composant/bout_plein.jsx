import React from 'react';
import './bout_plein.css';

export default function (bt) {
  return (
    <button className='bouton_plein' style={{backgroundColor:`${bt.back}`, color:`${bt.color}`}}>
        {bt.name}
    </button>
  )
}