import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./TextContainer.css";

const TextContainer = props => (

    <Container className="textContainer">
        <p>{props.textVal}</p>
    </Container>

)

export default TextContainer;