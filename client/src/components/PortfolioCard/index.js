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
                <Button className="cardBtn" variant="info">{props.buttonOneText}</Button>
                <Button className="cardBtn" variant="info">{props.buttonTwoText}</Button>
            </Card.Body>
            {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
        </Card>
    )
};

export default PortfolioCard;