import React from 'react'
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Services from '../components/Services';
import Reg from '../components/Reg';

const Home = () => {
  return (
    <div className='change'>
    <Navbar/>
    <HeroImg/>
    <Search/>
    {/* <About/> */}
    <Services/>
    <Reg/>
    <Footer/>
    </div>
  )
}

export default Home;