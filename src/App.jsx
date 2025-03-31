import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import ProductsHome from './components/ProductsHome';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <About/>
    <ProductsHome/>
    <Footer/>
    </>
  )
}

export default App
