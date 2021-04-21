import React, {Component} from "react";

class Header extends Component{
    render(){
        return(
        <>
        <div className="container-home">
            <div className="presentacion-container" id="home">
            <div className="presentacion"> 
                <img className="cover-photo" src="img/foto-portadaKaren.png" alt=""/>
                <div className="texto-presentacion">
                        <h1>Hello!</h1>
                        <p>I am Karen a full stack developer, student at CEI Design school, looking for an internship focused on the development web applications, where I can expand my career. I consider myself an energetic and enterprising person, who loves 
                        new challenges and solves problems using creative solutions.</p>
                        <img className="pointer" src="img/iconos_misc/puntero.svg" alt=""/>
                </div>
            </div>
            <img className="location" src="img/iconos_misc/location.svg" alt=""/>
            </div>
        </div>
       </>
        );
    }
}



export default Header;
