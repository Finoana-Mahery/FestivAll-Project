import React from 'react'
import Navbar from '../Composant/navbar'
import Nos_destination from '../Composant/nos_destination'
import Logo from "../assets/All.png";
import Footer from '../Composant/footer';

export default function destination() {
  return (
    <div className='destination'>
           <Navbar
        slc="3"
        log={Logo}
      />
      <Nos_destination/>
      <Footer/>
    </div>
  )
}
