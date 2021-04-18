import React, {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <>
            <footer className="footer"> 
                
                <div className="part1_backtotop" >
                <a href="#"> <h3>Back to top</h3></a>
                    <div className="dowload_cv">
                       <a href="#"><h3>Download C.V</h3></a>
                    </div>
                </div> 
                <div className="part2-findme">
                   <div className="findme"><p>Where to find me</p></div>
                   <div className="iconos-social_media">
                        <a href="https://www.behance.net/karenduarte21"><img src="img/iconos_rrss/behance.svg" alt=""/></a> 
                        <a href="https://github.com/Duarteka"><img src="img/iconos_rrss/github.svg" alt=""/></a> 
                        <a href="https://www.instagram.com/kap_temia/"><img src="img/iconos_rrss/instagram.svg" alt=""/></a> 
                        <a href="https://www.linkedin.com/in/karen-duarte-a141291a6/"><img src="img/iconos_rrss/linkedin.svg" alt=""/></a> 
                    </div>
                </div>
                <div className="part3_contact">
                    <p>Contact:</p>
                    <div className="contact">
                        <div className="contact-1">
                            <img src="img/iconos_contacto/email.svg"alt=""/> <a href="mailto:duarte.karen21@gmail.com"><p>Email</p></a>
                        </div> 
                        
                        <div className="contact-2">
                            <img src="img/iconos_contacto/phone.svg" alt=""/><a href="https://wa.me/34637258523"><p>Phone</p></a>
                        </div> 
                    </div>
                </div>
            </footer>
            </>
        );
    }
};

export default Footer;