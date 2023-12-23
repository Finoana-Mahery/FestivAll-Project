import React from 'react'
import Navbar from '../Composant/navbar'
import Garde from '../Composant/garde'
import Footer from '../Composant/footer'
import Logo from "../assets/All.png";

export default function home() {
  return (
    <div className='home'>
         <Navbar
        slc="1"
        log={Logo}
      />
      <Garde />
      <Footer/>
    </div>
  )
}
