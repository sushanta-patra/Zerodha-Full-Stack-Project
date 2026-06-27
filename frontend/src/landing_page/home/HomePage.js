import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Starts from './Starts';
import OpenAccount from '../OpenAccount';
import Footer from '../footer';
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        <>
            <Hero />    
            <Awards />
            <Starts />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
     );
}

export default HomePage;