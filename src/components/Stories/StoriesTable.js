import React, { Component } from 'react'

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
                
            </div>
        )
    }
}

export default StoriesTable
