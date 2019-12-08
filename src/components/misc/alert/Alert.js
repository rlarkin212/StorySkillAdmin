import React, { Component } from 'react'

class Alert extends Component {

    renderAlert() {
        if (this.props.alertText !== '') {
            return (
                <Alert variant={this.props.alertType}>
                    {this.props.alertText}
                </Alert>
            )
        } else {
            return (null)
        }
    }

    render() {
        return (
            <div>
                {this.renderAlert()}
            </div>
        )
    }
}

export default Alert
