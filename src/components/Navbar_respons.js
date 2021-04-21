import React, {Component} from "react";
import {Link} from "react-scroll";
   
class NavbarResponsive extends Component{
    constructor(){
        super();
        this.state = {
            shownav: false,
        }
        this.showNav = this.showNav.bind(this);
        this.hideNav = this.hideNav.bind(this);
    }
    showNav(event) {
        event.preventDefault();
        this.setState({
            shownav: true,
        });
    }
    hideNav(event) {
        event.preventDefault();
        this.setState({
            shownav: false,
        });
    }
    render(){
        return(
        <>
        {!this.state.shownav ? 
            <div className="icons_burgerbutton">
                <div className="iconos-social_media_responsive">
                    <a href="https://www.behance.net/karenduarte21"><img src="img/iconos_rrss/behance.svg" alt=""/></a> 
                    <a href="https://github.com/Duarteka"><img src="img/iconos_rrss/github.svg" alt=""/></a> 
                    <a href="https://www.instagram.com/kap_temia/"><img src="img/iconos_rrss/instagram.svg" alt=""/></a> 
                    <a href="https://www.linkedin.com/in/karen-duarte-a141291a6/"><img src="img/iconos_rrss/linkedin.svg" alt=""/></a> 
                </div>

                <div className="burgerbutton">
                    <a href="#" onClick={this.showNav}><img src="./img/iconos_misc/hamb-menu.svg" alt=""/></a>
                </div>    
            </div> 
        :
            <div className="navbar-responsive">
                <a href="#" className="close" onClick={this.hideNav}>x</a> 
                <ul>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={800}><li>Home</li></Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={800}><li>About</li></Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={800}><li>Projects</li></Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={800}><li>Contact</li></Link> 
                </ul> 
            </div>
        }
        </>
        );
    } 
}
export default NavbarResponsive;