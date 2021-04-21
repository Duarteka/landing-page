import React, {Component} from "react";
import ajax from "./Ajax";

class Form extends Component{
    constructor(){
        super()
        this.state = {
            contactName: "" ,
            contactMail:  "",
            contactMessage: ""
        };
    }
    createContact = (state) => {
         var datos = {
            contactName : state.contactName,
            contactMail : state.contactMail,
            contactMessage : state.contactMessage
        };
        ajax("POST",datos).then(datos =>{
            if(datos.resultado === "ok"){
                this.setState({
                    contactName: "" ,
                    contactMail:  "",
                    contactMessage: ""
                });
            }
        });
    }
    render(){
        return(
            <>
            <div className="container-contact">
            <div className="contacth3" id="contact">
                <h2>Contact</h2>
            </div>
            <section className="contact-form">
                <form onSubmit={
                    e => {
                        
                        e.preventDefault();
                        if(this.state.contactName.trim().length > 0 && this.state.contactMail.trim().length > 0 && this.state.contactMessage.trim().length > 0){
                           this.createContact(this.state);
                        }
                    }
                } className="contactme" name="contact" >

                    <label><input name="name" type="text" value={this.state.contactName}
                        onChange={e=>{this.setState({contactName: e.target.value})}} placeholder="Name"/></label>
                    <label><input name="email" type="email"  value={this.state.contactMail} 
                        onChange={e=>{this.setState({contactMail: e.target.value})}}placeholder="Email"/></label>
                    <label><textarea name="message" value={this.state.contactMessage} 
                        onChange={e=>{this.setState({contactMessage: e.target.value})}} placeholder="Message"></textarea></label>
                   <input className="bottom" type="submit" value="Send"/>
                </form>
            </section>
            </div>
            </>
           
        );
    }
}


export default Form;