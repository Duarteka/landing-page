import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

class App extends Component{
    render(){
        return(
        <>  
            <Navbar />
            <Header/>
            <About/>
            <Projects/>
        </>
        );
    }
}
export default App;
