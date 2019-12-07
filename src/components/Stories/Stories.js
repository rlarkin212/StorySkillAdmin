import React, { Component } from 'react'
import StoriesTable from '../storiesTable/StoriesTable'

class Stories extends Component {
    render() {
        return (
            <div>
                <h1>Stories</h1>
                <StoriesTable></StoriesTable>
            </div>
        )
    }
}

export default Stories
