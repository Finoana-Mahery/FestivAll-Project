import React from 'react'

import Navbar from '../Composant/navbar'
import Galerie from '../Composant/galerie';
import Logo from "../assets/All.png";
import Footer from '../Composant/footer';

export default function galerie() {
  return (
    <div className='galeries'>
           <Navbar
        slc="4"
        log={Logo}
      />
      <Galerie/>
      <Footer/>
    </div>
  )
}
