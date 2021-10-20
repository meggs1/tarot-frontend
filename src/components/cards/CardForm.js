import React, { Component } from 'react'

class CardForm extends Component {
    state = {
        name: this.props.name,
        fullMeaning: this.props.full_meaning,
        uprightMeaning: this.props.upright_meaning,
        reversedMeaning: this.props.reversed_meaning,
        image: this.props.image
    }

    handleOnChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    render() {
        console.log('card form props', this.props)
        // console.log('card form state', this.state)
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
                        value={this.state.fullMeaning}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    Card Upright Meaning:
                    <input
                        type="text"
                        name="name"
                        value={this.state.uprightMeaning}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />
                    Card Reverse Meaning:
                    <input
                        type="text"
                        name="name"
                        value={this.state.reversedMeaning}
                        onChange={(e) => this.handleOnChange(e)} 
                    />
                    <br />

                    <input 
                        type="file"
                        name="image"
                        // accept="image/png, image/jpeg"
                    />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default CardForm