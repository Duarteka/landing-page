import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";
import NavbarResponsive from "./components/Navbar_respons";


class App extends Component{
    render(){
        return(
        <> 
        <NavbarResponsive/>
        <Navbar/>
        <Header/>
        <About/>
        <Projects/>
        <Form/>
        <Footer/>
        </>
        );
    }
}
export default App;
