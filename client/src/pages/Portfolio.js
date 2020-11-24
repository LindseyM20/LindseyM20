import React, { Component } from "react";
import Cards from "../components/Cards.js";
import projects from "../projects.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../App.css";

class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    return (
      <Container className="container">
        <h1>Examples of my Work</h1>
        <Row className="row">
          {this.state.projects.map(project => (
            <Cards
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              occupation={project.occupation}
              location={project.location}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
