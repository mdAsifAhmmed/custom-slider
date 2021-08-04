import React, {useState} from 'react'
import './App.css';
import Dropdawn from './components/Dropdawn';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import { SliderData } from './data/SliderData';

function App() {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }



  return (
    <>
        <Navbar toggle={toggle}/>
        <Dropdawn isOpen={isOpen} toggle={toggle}/>
        <Hero/>
    </>
  );
}

export default App;
