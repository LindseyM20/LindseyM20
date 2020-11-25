import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navb from './components/Navb.js';
import Footer from './components/Footer.js';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import './App.css';
// import $ from'jquery';
// import Popper from 'popper.js';

function App() {
  return (
    <body className="background">
      <Router>
        <Navb />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Router>
    </body>
  );
}

export default App;
