import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import "./Headertron.css";


const Headertron = props => (
    <Container>
        <Jumbotron className="headertron">
            <h1 className="headertronHeader">Welcome to JSDrip!</h1>
            <p className="headertronBody">The Personal Blog and Portfolio of Alex Schwartz</p>
            <p className="headertronBody">Alex is currently busy hunting for a job as a Full Stack engineer! This page will be live in the near future!</p>
            <p className="headertronBody">If you met Alex on his job hunt, please make sure to sign the guest log while visiting this site!</p>
            <Button className="logLinkBtn" href="/log" variant="info">Visit the Guest Log</Button>
        </Jumbotron>
    </Container>
);

export default Headertron;


