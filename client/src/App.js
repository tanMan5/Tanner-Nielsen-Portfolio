/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavTabs from "./components/Navbar";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <NavTabs />
          
        
        <Footer />

      </div>
   
      
     
    );
  }
}

export default App;
