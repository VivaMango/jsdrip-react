import React, { Component } from 'react';
import CustomCardGroup from "../../components/CustomCardGroup";
import API from "../../utils/API";

import API from "../../utils/API";

class PortfolioPage extends Component {

    state = {
        projects: []
    }

    componentDidMount() {
        this.getProjects();
    }

    getProjects = _=> {
        API.getProjects().then(res => {
            console.log(res.data)
            this.setState({projects: res.data})
        }).catch(err => console.log(err))
    }
 
    render() {
        return(
        this.state.projects.map(project => {
           return( <CustomCardGroup
            image={project.image}
            name={project.name}
            summary={project.summary}
            buttonOneLink={project.repoLink}
            buttonOneText={project.repoText}
            buttonTwoLink={project.deployLink}
            buttonTwoText={project.deployText} />
        )}))
    };

};

export default PortfolioPage;