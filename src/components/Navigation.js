import {Link} from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navigation({toggle}){
 return(
  <div className="nav">
   <h3>Business</h3>
   <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/services">Services</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
   </div>
   <ThemeToggle toggle={toggle}/>
  </div>
 )
}