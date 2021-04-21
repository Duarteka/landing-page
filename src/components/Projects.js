import React, {Component} from "react";
import {projects} from "../configs/config_projects";
class Projects  extends Component{
    constructor(){
        super();
        this.state = {
            projects : projects,
            
        };
    }
    render(){
        return(
        <>
        <h3>Projects</h3> 
        <div className="container-projects">
            <div className="projects" id="projects">
                {this.state.projects.map((item, index) => <Project key={index} title={item.title} img={item.ruta} link={item.link}/>)}
            </div> 
        </div>
        </>
        );
    }
}
const Project = (props)=>{
    return(
        <>
        <div className="project">
            <div className="title_project_div">
                <p className="title_project">{props.title}</p> 
            </div>
            <div className="image_project_div"> 
                <img className="img_projects" src={props.img} alt=''/>
            </div>
            <Button link={props.link} />
        </div>
        </>
        );
}
const Button = (props)=>{
    return(
        <div className="btn">
            <a href={props.link} type="text">view project</a>
        </div>
    );
}
export default Projects;
