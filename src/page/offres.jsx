import React from 'react'
import Navbar from '../Composant/navbar'
import Offre from '../Composant/nos_offres'
import Footer from '../Composant/footer'
import Logo from "../assets/All.png";

export default function offres() {
  return (
    <div className='offres'>
          <Navbar
        slc="2"
        log={Logo}
      />
      <Offre/>
      <Footer/>
    </div>
  )
}
