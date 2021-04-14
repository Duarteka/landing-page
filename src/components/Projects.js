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
         <div className="forma-geometrica3">
            <img className="forma1" src="img/formas-geometricas/formaR.svg" alt=""/>
         
            <div className="projects"> 
        
                {this.state.projects.map((item,index) => 
                // <Project title={item.title} img={item.ruta} projects={`project${index}`}/>)}
                <Project title={item.title} img={item.ruta}/>)}
            </div> 
        </div>
        </>
        );
    }
}
const Project = (props)=>{
    return(
        <>
        {/* <div className={props.projects}> */}
        
        <div className="project">
            <div className="title_project_div">
                <p className="title_project">{props.title}</p> 
            </div>
          
            <div className="image_project_div"> 
                <img className="img_projects" src={props.img} alt=''/>
            </div>
        </div>
        </>
    );
}
export default Projects;
