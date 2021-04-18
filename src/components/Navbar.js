import React, {Component} from "react";
   
class Navbar extends Component{
    constructor(){
        super();
        this.state = {
        };
    }
    render(){
        return(
        <>
        <div className="icons_burgerbutton">
            <div className="iconos-social_media_responsive">
                <a href="https://www.behance.net/karenduarte21"><img src="img/iconos_rrss/behance.svg" alt=""/></a> 
                <a href="https://github.com/Duarteka"><img src="img/iconos_rrss/github.svg" alt=""/></a> 
                <a href="https://www.instagram.com/kap_temia/"><img src="img/iconos_rrss/instagram.svg" alt=""/></a> 
                <a href="https://www.linkedin.com/in/karen-duarte-a141291a6/"><img src="img/iconos_rrss/linkedin.svg" alt=""/></a> 
            </div>
            <div className="burgerbutton">
                <a href="#" onClick={
                    event => {
                        event.preventDefault();
                        }
                }><img src="./img/iconos_misc/hamb-menu.svg" alt=""/></a>
            </div>    
        </div> 
        <div className="navbar-responsive">
            <a href="#" className="close" onClick={
                event => {
                    event.preventDefault();

                }
            }>x</a>
                <ul>
                    <li><a href="#"></a>Home</li>
                    <li><a href="#"></a>About</li>
                    <li><a href="#"></a>Projects</li>
                    <li><a href="#"></a>Contact</li>
                </ul>
        </div>
        
        
        <div className="navbar">
                <ul>
                    <li><a href="#"></a>Home</li>
                    <li><a href="#"></a>About</li>
                    <li><a href="#"></a>Projects</li>
                    <li><a href="#"></a>Contact</li>
                </ul>
        </div>

       
        </>
        );
    }
}




export default Navbar;
