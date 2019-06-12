import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";

import "./PortfolioAlert.css";

class PortfolioAlert extends Component {

    render() {
        return (
            <Alert className="alertParent" variant="info">
                <Alert.Heading className="alertHeading">Alex's Code Portfolio</Alert.Heading>
                <hr />
                <p className="alertText">This page only contains a selection of Alex's projects</p>
                <Button className="alertButton" variant="info">If you'd like to see more of Alex's code, you can see all of Alex's Repositories on <i class="fab fa-github"></i> Github</Button>
            </Alert>
        )
    };

};

export default PortfolioAlert;