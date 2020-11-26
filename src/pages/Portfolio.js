import React from "react";
import Cards from "../components/Cards.js";
import projects from "../projects.js";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import "../App.css";

function Portfolio() {

  return (
    <Container className="cardsContainer">
      <h1>Portfolio</h1>
      {/* <Row className="row"> */}
        {projects.map(project => (
          <Cards
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            deploy={project.deploy}
            repository={project.repository}
          />
        ))}
      {/* </Row> */}
    </Container>
  );

}

export default Portfolio;
