import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import "./Headertron.css";


const Headertron = props => (
    <Container>
        <Jumbotron className="headertron">
            <h1>Welcome to JSDrip!</h1>
            <p>The Personal Blog and Portfolio of Alex Schwartz</p>
            <p>Alex is currently at Google I/O 2019! This page will be live after the conference!</p>
            <p>If you met Alex at I/O 2019, make sure to sign the guest log while visiting this site!</p>
            <Button href="/log" variant="info">Visit the Guest Log</Button>
        </Jumbotron>
    </Container>
);

export default Headertron;


