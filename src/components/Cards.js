import React from "react";
import Card from "react-bootstrap/Card";
import "../projects";
import "../App.css";

function Cards(props) {
  return (
    <Card className="card"
    // style={{ width: '18rem' }}
    >
      <div className="cardImgContainer">
        <Card.Img className="cardImg" variant="top" src={props.image} alt={props.name} />
      </div>

      <Card.Body className="cardBody" style={{ backgroundColor: (245, 245, 245, 0.4) }} >
        <Card.Title>
          <Card.Link href={props.deploy} target="_blank" className="cardTitle">{props.name}</Card.Link>
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link href={props.repository} target="_blank"  className="repoLink">Repository</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
