import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'

import './spinner.css'

class LoadingSpinner extends Component {

    renderSpinner() {
        let loaded = this.props.loaded

        if (!loaded) {
            return (
                <div className='spinner'>
                    <Spinner animation='border' role='status' variant='primary' size=''>
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
        } else {
            return (null)
        }
    }

    render() {
        return (
            this.renderSpinner()
        )
    }
}

export default LoadingSpinner
