import React, { Component } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

import Alert from './../misc/alert/Alert'

import './AddStory.css'

class AddStory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title: '',
            story: '',
            genre: '',
            successMessage: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event) => {
        let target = event.target
        let name = target.name

        this.setState({
            [name]: target.value
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    modalForm() {
        return (
            <Form>
                <Form.Group controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='title' type='text' placeholder='Enter story title' value={this.state.title} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId='story'>
                    <Form.Label>Story</Form.Label>
                    <Form.Control name='story' as='textarea' rows='3' placeholder='Enter Story Details' value={this.state.story} onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId='genre'>
                    <Form.Label>Genre</Form.Label>
                    <Form.Control name='genre' type='text' placeholder='Enter story genre' value={this.story} onChange={this.handleInputChange} />
                </Form.Group>
            </Form>
        )
    }

    renderModal() {
        if (this.state.show) {
            return (
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Story</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.modalForm()}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.submitStory}>
                            Save Story
                        </Button>
                    </Modal.Footer>
                </Modal>
            )
        } else {
            return (null)
        }
    }

    submitStory = () => {

        let story = {
            title: this.state.title,
            story : this.state.story,
            genre: this.state.genre,
            tags: [
                {
                    tagValue: 'Placeholder Tag'
                }
            ]
        }

        fetch('https://story-skill.herokuapp.com/api/Stories/AddStory',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(story)
        })
        .then((res) => res.json())
        .then((result) => {
            this.setState({
                show: false,
                title: '',
                story: '',
                genre: '',
                successMessage: result
            })
        })
    }

    render() {
        return (
            <div className='add-story'>
                <Button variant='primary' onClick={this.handleShow}>
                    Add Story
                </Button>
                {this.renderModal()}
            </div>
        )
    }
}

export default AddStory
