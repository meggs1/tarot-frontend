import React, {Component} from 'react'

import { connect } from "react-redux";
import { fetchSuits } from '../actions/suitActions';
import Suits from '../components/suits/Suits'

class SuitsContainer extends Component {
    componentDidMount() {
        this.props.fetchSuits()
    }

    render() {
        console.log('suits contaianer props', this.props)
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

const mapDispatchToProps = (dispatch) => {
    return {
      fetchSuits: () => dispatch(fetchSuits())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SuitsContainer)