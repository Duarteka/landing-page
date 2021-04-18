import React, {Component} from "react";

class Form extends Component{
    render(){
        return(
            <>
            <div className="contact3">
                <h2>Contact</h2>
            </div>
            <section className="contact-form">
                <form className="contactme" name="contact">
                    <label><input name="name" type="text" placeholder="Name"/></label>
                    <label><input name="email" type="email" placeholder="Email"/></label>
                    <label><textarea name="message" placeholder="Message"></textarea></label>
                    <a href="#">Submit</a>
                </form>
            </section>
            </>
           
        );
    }
}
export default Form;