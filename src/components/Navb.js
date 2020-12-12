import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../App.css";


function Navb() {
  const location = useLocation();

  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <Link to="/" className="navbar-brand" >
    //     Lindsey Bordner
    //   </Link>
    //   <button 
    //   className="navbar-toggler" 
    //   type="button" 
    //   data-toggle="collapse" 
    //   data-target="#navbarSupportedContent" 
    //   aria-controls="navbarSupportedContent" 
    //   aria-expanded="false" 
    //   aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item">
    //         <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
    //           Home
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
    //           Portfolio
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //       <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
    //         Contact
    //       </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <Navbar className="navb" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Lindsey Bordner</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Nav.Link> */}
          <Nav.Link href="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Nav.Link>
        </Nav>
        {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navb;
