import React, {Component} from "react";
import {hobbies} from "../configs/config_hobbies.js";

class About extends Component{
    constructor(){
        super();
        this.state = {
            hobbies : hobbies
        };
    }
    render(){
        return(
        <> 
        <div className="container-about">
            <div className="about" id="about">
            <h2>About</h2>
                <div className="cards">
                <img className="forma-geometrica2" src="./img/formas-geometricas/forma2.svg" alt=""/>
                
                    <div className="box-one"> 
                        <h3>Personal</h3>
                        <div className="text-about">
                            <p>I was born in Sao Paulo Brazil but I spent a large part of my adolescence in Chile, where I began to be interested in web development and do some experiments with friends at school and myself, but for me it was just a hobby. <br/> 
                            <p>I am a person with a developed artistic style and an eye for detail. People I have previously worked with highlight my effective time management and ability to work on multiple projects simultaneously, resulting in increased productivity.</p><br/>
                            <p>I am a frontend and backend developer with experience in React, Angular, CSS3, HTML5, Bootstrap, Sass, Node and PHP, among other technologies. I have also developed research projects using the main user experience design tools in both UI and UX (Benchmarking, Stakeholders, Empathy Map, Brainstorming, Prototyping, etc.) developing the product in a linear and organized way until concluding in the minimum viable product .</p><br/>
                            
                            <br/></p><br/>
                        </div>
                        <div className="about-footer">
                            <p>Thank you for reading!</p>
                            <p>you can see my full C.V. here: </p>
                            <a href="https://drive.google.com/file/d/1W61sJay7ok1izyRp1ESGSLGsS_iU-nJu/view?usp=sharing"><h3>CV Karen Duarte</h3></a>
                        </div>
                    </div>
                    <div className="box-two">
                        <h3>Hobbies</h3>
                        {this.state.hobbies.map((item, index) => <Icono key={index} img={item.ruta} texto_hobbie={item.text_hobbie}/>)}
                    </div>
                </div>
            </div>
            <h3>Soft Skills</h3>
            <div className="attributtes_text">
                <div className="soft_skills">
                <p>/01/Intuition in design/ 02/Minimalist/ 03/Organized/ 04/Meticulous/ 05/Solve Problems/ 06/Collaboratos/ 07/Maximum effort/ 08/ efficiency/ 09/Teanwork is overrated/ 10/Perfectionism/</p>
                </div>
                <img className="circle1" src="img/iconos_misc/circle.svg" alt=""/>
                <img className="circle2" src="img/iconos_misc/circle.svg" alt=""/>
            </div> 
        </div>
        </>
        );
    }
}
const Icono = (props) =>{
    return(
        <div className="card" >
            <img src={props.img} alt=''/>
            <p className="text-icon">{props.texto_hobbie}</p>
        </div>
    );
};
export default About;
