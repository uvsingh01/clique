import React from 'react'
import Nav from '../components/home/Nav'
import HeroBanner from '../components/home/HeroBanner'
import About from '../components/home/about'
import Product from '../components/home/Product'
import Contact from '../components/home/Contact'
import Form from '../components/home/Form'
import Footer from '../components/home/footer'


const Homepage = () => {
  return (
    <>
        <Nav/>
        <HeroBanner/>
        <About/>
        <Product/>
        <Contact/>
        <Form/>
        <Footer/>
    </>
  )
}

export default Homepage