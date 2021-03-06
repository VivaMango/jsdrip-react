import React from "react";
import { Card, Button } from "react-bootstrap";
import "./PortfolioCard.css";

function PortfolioCard(props) {
    return (
        <Card className="portfolioCard">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.summary}
                </Card.Text>
                <Button href={props.buttonOneLink} target="_blank" className="cardBtn btn-lg" variant="info"><i class="fab fa-github"></i> {props.buttonOneText}</Button>
                <Button href={props.buttonTwoLink} target="_blank" className="cardBtn btn-lg" variant="info">{props.buttonTwoText} <i class="fas fa-caret-square-right"></i></Button>
            </Card.Body>
            {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
        </Card>
    )
};

export default PortfolioCard;