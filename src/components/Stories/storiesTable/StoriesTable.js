import React, { Component } from 'react'
import { Table,Button } from 'react-bootstrap'

import LoadingSpinner from '../../misc/spinner/LoadingSpinner'

import './StoriesTable.css'

class StoriesTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            stories: []
        }
    }

    componentDidMount() {
        fetch('https://story-skill.herokuapp.com/api/Stories/GetAllStories')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    loaded: true,
                    stories: result
                })
            })
    }

    renderTable() {
        let tableRows = this.state.stories.map((story) => {
            return (
                <tr>
                    <td>{story.id}</td>
                    <td>{story.title}</td>
                    <td>{story.story}</td>
                    <td>{story.genre}</td>
                    <td><Button variant="warning">Edit</Button></td>
                </tr>
            )
        })

        return (
            <div>
                <LoadingSpinner loaded={this.state.loaded}></LoadingSpinner>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Story</th>
                            <th>Genre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </Table>
            </div>
        )
    }

    render() {
        return (
            this.renderTable()

        )
    }
}

export default StoriesTable
