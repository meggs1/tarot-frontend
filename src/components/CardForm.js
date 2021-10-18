import React, { Component } from 'react'

class CardForm extends Component {
    state = {
        name: '',
        fullMeaning: '',
        uprightMeaning: '',
        reverseMeaning: ''
    }

    handleOnChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <form>
                    Card Name:
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    Card Full Meaning:
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    Card Upright Meaning:
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    Card Reverse Meaning:
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default CardForm