import React from "react";
import Card from "react-bootstrap/Card";
import "../projects.json";
import "../App.css";

function Cards(props) {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Link href={props.deploy}>Deploy</Card.Link>
        <Card.Link href={props.repository}>Repository</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
