import React, { Component } from 'react';
import CustomCardGroup from "../../components/CustomCardGroup";
import API from "../../utils/API";

class PortfolioPage extends Component {

    state = {
        projects: []
    };

    componentDidMount() {
        this.getProjects();
    }

    getProjects = _=> {
        API.getProjects().then(res => {
            console.log(res.data)
            this.setState({
                projects: res.data
            })
        })
    };
 
    render () {
        return (
            this.state.projects.map((project, index) => {
                return (
                    <CustomCardGroup
                    key={index}
                    name={project.name}
                    image={project.image}
                    summary={project.summary}
                    repoLink={project.repoLink}
                    deployLink={project.deployLink}
                     />
                )
            })
        );
    };

};

export default PortfolioPage;