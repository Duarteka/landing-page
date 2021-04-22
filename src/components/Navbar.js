import React, {Component} from "react";
import {Link} from "react-scroll";
   
class Navbar extends Component{
    state = {};
    
    render(){
        return(
       <div className="container-nav">
        <div className="navbar">
                <ul>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={800}><li>Home</li></Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={800}><li>About</li></Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={800}><li>Projects</li></Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={800}><li>Contact</li></Link> 
                </ul>
            </div>
        </div>
        );
    }
}

export default Navbar;
