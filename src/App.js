import React,{useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles/global.css";

function App(){
 const [dark,setDark]=useState(false);

 return(
 <div className={dark?"dark":""}>
  <BrowserRouter>
   <Header toggle={()=>setDark(!dark)}/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   <Footer/>
  </BrowserRouter>
 </div>
 )
}
export default App;