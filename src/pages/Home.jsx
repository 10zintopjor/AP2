import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Services2 from '../services/Services'
import NavBar from '../navbar/Navbar'
import DesktopNav from '../navbar/Desktopnav'

function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <Services />
    <Services2 />
    <Testimonial />
    <Contact />
    <Footer />
    </>
  )
}

export default Home
