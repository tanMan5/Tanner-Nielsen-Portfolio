/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import NavTabs from "./components/Navbar";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects'
import Footer from './components/Footer';
import "./index.css";


function App() {
  return (
    <>
      <Router>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
      </Router>
      <Footer />
     
    </>
  );
}

export default App;
