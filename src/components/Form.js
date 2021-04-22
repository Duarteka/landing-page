import React, {Component} from "react";
import ajax from "./Ajax";

class Form extends Component{
    constructor(){
        super()
        this.state = {
            contactName: "" ,
            contactMail:  "",
            contactMessage: "",
            showWarnings: false,
            messageOk: false,
            undefinedError : false
        }
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
                    contactMessage: "",
                    showWarnings: false,
                    messageOk : true,
                    undefinedError: false
                });
            }else{
                this.setState({
                    showWarnings: false,
                    messageOk : false,
                    undefinedError: true
                });
            }
        });
    }
    render(){
        const isValidName = this.state.contactName.trim().length > 3;
        const isValidMail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test((this.state.contactMail)); 
        const isValidMessage = this.state.contactMessage.trim().length > 3;
        
        return(
        <>
        <div className="container-contact" id="contact">
            <div className="contacth2">
                <h2>Get in touch</h2>
            </div>
            <section className="contact-form">
                <form noValidate onSubmit={
                    e => {
                        e.preventDefault();
                        
                        if(isValidMail && isValidName && isValidMessage){
                           this.createContact(this.state);
                        }else{
                            this.setState({showWarnings: true});
                        }
                    }
                }
                className="contactme" name="contact">
                    <label>
                        {!isValidName && this.state.showWarnings ? <div className='invalid-feedback'><img src="img/iconos_misc/invalid.svg" alt=""/>Name must be longer than 3 characters</div> : null}
                        <input name="name" 
                        type="text" 
                        value={this.state.contactName}
                        onChange={e=>{this.setState({contactName: e.target.value, messageOk: false})}} 
                        placeholder="Name"/>   
                    </label>
                    
                    <label> 
                        {!isValidMail && this.state.showWarnings ? <div className='invalid-feedback'><img src="img/iconos_misc/invalid.svg" alt=""/> Invalid characters</div> : null}
                        <input name="email" 
                        type="email" 
                        value={this.state.contactMail} 
                        onChange={e=>{this.setState({contactMail: e.target.value,  messageOk: false})}}
                        placeholder="Email"/>
                    </label> 
                    
                    <label> 
                        {!isValidMessage && this.state.showWarnings ? <div className='invalid-feedback'><img src="img/iconos_misc/invalid.svg" alt=""/> Message must be longer than 3 characters</div> : null}
                        <textarea 
                        name="message" 
                        value={this.state.contactMessage} 
                        onChange={e=>{this.setState({contactMessage: e.target.value,  messageOk: false})}} 
                        placeholder="Message">
                       </textarea>
                    </label>
                   <input 
                    className="bottom" 
                    type="submit" 
                    value="Send"/>
                    {this.state.messageOk ? <div className='valid-feedback'>Great! your message has been sent , thank you :)</div> : null}
                    {this.state.undefinedError ? <div className='invalid-feedback'>an unexpected error has occurred, your message couldn't be sent</div> : null}
                </form>
            </section>
        </div>
        </>
    );
}
}


export default Form;