import React, { Component } from 'react'
import LoadingSpinner from '../misc/spinner/LoadingSpinner'

class StoriesTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
            stories : []
        }
    }

    componentDidMount(){
        fetch('https://story-skill.herokuapp.com/api/Stories/GetAllStories')
        .then(res => res.json())
        .then((result) => {
            this.setState({
                loaded : true,
                stories : result
            })
        })
    }

    render() {
        return (
            <div>
                <LoadingSpinner loaded={this.state.loaded}></LoadingSpinner>
            </div>
        )
    }
}

export default StoriesTable
