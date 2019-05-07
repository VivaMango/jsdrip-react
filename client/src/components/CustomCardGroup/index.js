import React, { Component } from "react";
import { CardGroup } from "react-bootstrap";
import PortfolioCard from "../PortfolioCard";

class PortfolioCardGroup extends Component {

    render() {
        return (
            <CardGroup>
                <PortfolioCard
                image={this.props.image}
                name={this.props.name}
                summary={this.props.summary}
                buttonOneLink={this.props.buttonOneLink}
                buttonOneText={this.props.buttonOneText}
                buttonTwoLink={this.props.buttonTwoLink}
                buttonTwoText={this.props.buttonTwoText} 
                />
            </CardGroup>
        )
    }

};

export default PortfolioCardGroup;

