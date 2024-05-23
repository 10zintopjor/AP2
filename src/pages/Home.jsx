import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Services2 from '../services/Services'
import BusinessCard from '../components/BusinessCard'

function Home() {
  return (
    <>
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
