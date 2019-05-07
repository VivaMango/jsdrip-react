import React, { Component } from "react";
import API from "../../utils/API";
import { Form, Button } from "react-bootstrap";

class ProjectAPIForm extends Component {

    createProject = _=> {
        API.createProject({
            name: this.refs.nameForm.value,
            image: this.refs.imageForm.value,
            summary: this.refs.summaryForm.value,
            repoLink: this.refs.repoLinkForm.value,
            deployLink: this.refs.deployLinkForm.value
        }).then(res => {
            console.log(res.data);
        }).catch(err => console.log(err));
    };

    handleCreateProject = event => {
        event.preventDefault();
        this.createProject();
    };

    render() {
        return (
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Enter Name of Project</Form.Label>
                    <Form.Control type="text" placeholder="Project Name" ref="nameForm"/>
                </Form.Group>
                <Form.Group controlId="formImage">
                    <Form.Label>Enter Project Card Image</Form.Label>
                    <Form.Control type="text" placeholder="Project Card Image" ref="imageForm"/>
                </Form.Group>
                <Form.Group controlId="formSummary">
                    <Form.Label>Enter Project Summary</Form.Label>
                    <Form.Control type="text" placeholder="Project Summary" ref="summaryForm"/>
                </Form.Group>
                <Form.Group controlId="formRepoLink">
                    <Form.Label>Enter GitHub Repository Link</Form.Label>
                    <Form.Control type="text" placeholder="GitHub Repository" ref="repoLinkForm"/>
                </Form.Group>
                <Form.Group controlId="formDeployLink">
                    <Form.Label>Enter Deployed Project Link</Form.Label>
                    <Form.Control type="text" placeholder="Deployed App" ref="deployLinkForm"/>
                </Form.Group>
                <Button onClick={this.handleCreateProject} variant="primary" type="submit">
                    Submit the Project to DB
                </Button>
            </Form>
        )
    };

};

export default ProjectAPIForm;