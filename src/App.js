import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homee from '../src/Homee/Homee';
import Contact from './Contact/Contact'
import Termandc from './T&C/Termandc';
import About from '../src/About/About';
import FaQ from '../src/FAQ/Faq'
import Sad from '../src/Shipping-and-delivery/Sad'
import Sneakers from '../src/Products/Courtvision';
import Brogueboots from './Products/Brogueboots';
import Leathershoes from './Products/Leathershoes';
import Europeanlace from './Products/Europeanlace';
import Omaximage from './Products/Omaximage';
import Midlace from './Products/Midlace';
import Spirityoga from './Products/Spirityoga';
import Classedge from './Products/Classedge';
import Titaniumlace from './Products/Titaniumlace';
import Classclub from './Products/Classclub';
import Wynktext from './Products/Wynktextlace';
import Vaccumlaceup from './Products/Vaccumlaceup';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact="true" path="/" element ={<Homee />} ></Route>  
      <Route exact="true" path="about-us" element ={<About />} ></Route>  
      <Route  path="contact-us" element ={<Termandc />} ></Route>
      <Route  path="faq" element ={<FaQ />} ></Route>  
      <Route  path="shipping-delivery" element ={<Sad />} ></Route>
      <Route  path="terms-and-condition" element ={<Contact />} ></Route>
      <Route  path="sneakers" element ={<Sneakers/>} ></Route>
      <Route  path="brogue-boots" element ={<Brogueboots />} ></Route>
      <Route  path="classic-leather" element ={<Leathershoes />} ></Route>
      <Route  path="european-lace" element ={<Europeanlace />} ></Route>
      <Route  path="omax-lace" element ={<Omaximage />} ></Route>
      <Route  path="mid-lace" element ={<Midlace />} ></Route>
      <Route  path="spirit-yoga" element ={<Spirityoga />} ></Route>
      <Route  path="Classic-edge" element ={<Classedge />} ></Route>
      <Route  path="titanium-lace" element ={<Titaniumlace />} ></Route>
      <Route  path="Class-club" element ={<Classclub />} ></Route>
      <Route  path="wynk-text" element ={<Wynktext />} ></Route>
      <Route  path="vaccum-lace" element ={<Vaccumlaceup />} ></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
