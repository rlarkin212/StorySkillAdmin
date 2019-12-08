import React, { Component } from 'react'
import StoriesTable from './../storiesTable/StoriesTable'
import AddStory from './../addStory/AddStory'

class Stories extends Component {
    render() {
        return (
            <div>
                <h1>Stories</h1>
                <AddStory></AddStory>
                <StoriesTable></StoriesTable>
            </div>
        )
    }
}

export default Stories
