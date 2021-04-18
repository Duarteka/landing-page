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
        <div className="about">
           <h2>About</h2>
            <div className="cards">
            <img className="forma-geometrica2" src="./img/formas-geometricas/forma2.svg" alt=""/>
            
                <div className="box-one"> 
                    <h3>Personal</h3>
                    <div className="text-about">
                        <p>I was born in Sao Paulo Brazil, but thanks to my parents moving from one country to another for work, I spent a large part of my adolescence in Chile, where I began to be interested in web development and do some experiments with friends at school and myself, but for me it was just a hobby. <br/> 
                        <br/>When I finished school I was living in a hare krishna temple where I dedicated to spiritual activities while also being a student, my parents insisted that I study a university career so I chose a quick professional course where I learned graphic design, during my years I was to charge of the hare krishna office where he created posters to promote the different activities of the center; When I finished my studies, I decided to travel through Latin America and get to know the different countries and their cultures, but I also felt the need to continue training professionally, in 2015 I went to Buenos Aires where I studied as an administrative assistant and had the odd job in Buenos Aires.<br/>
                        <br/>In 2017 I traveled to Spain, the country that I fell in love with and decided to stay and live in Madrid, with my administrative studies I got a job in a small family business dedicated to tourism, where I had a position with many responsibilities but that I executed with pleasure since the atmosphere was nice and I improved different languages ​​every day.<br/>
                        <br/>In 2020, when the pandemic hit, my company could not withstand the economic impact and they fired me, so I decided to take this time to go back to something I always wanted: to create web pages and digital content; So I did some UX / UI and javascript courses on different pages such as Interaction Foundation Design, Udemy and Domestika, finally I decided it was time to go back to school so I entered the CEI Bootcamp, where I learned the best with good teachers practices to develop web and train as a professional, currently here I am creating my portfolio and really wanting to start this exciting career!</p><br/>
                    </div>
                    <p>Thank you for reading!</p>
                    <p>you can see my full C.V. here: </p>
                    <a href="#">CV Karen Duarte</a>
                </div>
                <div className="box-two">
                    <h3>Hobbies</h3>
                    {this.state.hobbies.map((item) => <Icono img={item.ruta} texto_hobbie={item.text_hobbie}/>)}
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
