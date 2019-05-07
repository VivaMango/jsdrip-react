import React, { Component } from 'react';
import CustomCardGroup from "../../components/CustomCardGroup";

class PortfolioPage extends Component {
 
    render () {
        return (
            <CustomCardGroup 
            image="PortfolioImage"
            name="PortfolioName"
            summary="PortfolioSummary"
            buttonOneLink="repoUrl"
            buttonOneText="repoText"
            buttonTwoLink="deployURL"
            buttonTwoText="deployText"/>
        );
    };

};

export default PortfolioPage;