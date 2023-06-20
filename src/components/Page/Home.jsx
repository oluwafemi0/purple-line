import React from 'react'
import Navbar from  '../Container/Navbar'
import Footer from '../Container/Footer'
import Hero from '../Container/Hero'
import Pricing from '../Container/Pricing'
import Faq from '../Container/Faq'
import Feature from '../Container/Feature'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Pricing />
    <Feature />
    <Faq />
    <Footer />
    </>
  )
}

export default Home