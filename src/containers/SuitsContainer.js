import React, {Component} from 'react'

import { connect } from "react-redux";
import Suits from '../components/suits/Suits'

class SuitsContainer extends Component {

    render() {
        return(
            <div>
                <Suits suits={this.props.suits.suits} cards={this.props.cards.cards}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
    suits: state.suits,
    cards: state.cards
    }
}

export default connect(mapStateToProps)(SuitsContainer)