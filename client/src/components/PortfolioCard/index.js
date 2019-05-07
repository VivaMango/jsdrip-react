import React from "react";
import { Card, Button } from "react-bootstrap";

function PortfolioCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.summary}
                </Card.Text>
                <Button variant="primary">{props.buttonOneText}</Button>
                <Button variant="primary">{props.buttonTwoText}</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
};

export default PortfolioCard;