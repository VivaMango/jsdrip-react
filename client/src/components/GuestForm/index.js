import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Button, Form, Container } from "react-bootstrap";
import API from "../../utils/API";
import TextContainer from "../TextContainer";
import "./GuestForm.css";

class GuestForm extends Component {

    state = {
        logSubmitted: false
    }

    consoleLogger = event => {
        event.preventDefault();

        let name = this.refs.nameForm.value
        let contact = this.refs.contactForm.value
        let message = this.refs.messageForm.value

        console.log ({
            name: name,
            contact: contact,
            message: message})
    }

    createLog = _=> {
        API.createLog({
            name: this.refs.nameForm.value,
            contact: this.refs.contactForm.value,
            message: this.refs.messageForm.value
        }).then(res => {
            console.log(res.data);
            this.setState({logSubmitted: true})
        }).catch(err => console.log(err));
    };

    handleCreateLog = event => {
        event.preventDefault();
        this.createLog();
    }

    render() {
        return (
            (this.state.logSubmitted === true)
            ? <Redirect to="/about" />
            : <Container className="guestForm">
            <TextContainer className="guestHeader" textVal="Thanks for visiting JSDrip! Please sign the Guest Log if you'd like to keep in touch with Alex!" />
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label className="formLabel">Sign your name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" ref="nameForm"/>
                </Form.Group>
                <Form.Group controlId="formContact">
                    <Form.Label className="formLabel">How should Alex keep in touch with you?</Form.Label>
                    <Form.Control type="text" placeholder="Your Preferred Contact Method" ref="contactForm"/>
                </Form.Group>
                <Form.Group controlId="formMessage">
                <Form.Label className="formLabel">Leave a message for Alex!</Form.Label>
                <Form.Control as="textarea" rows="3" ref="messageForm"/>
                </Form.Group>
                <Button onClick={this.handleCreateLog} className="createLogBtn" variant="info" type="submit">
                <i class="fas fa-pencil-alt"></i> Sign Guest Log
                </Button>
            </Form>
            </Container>
        )
    };
};

export default GuestForm;