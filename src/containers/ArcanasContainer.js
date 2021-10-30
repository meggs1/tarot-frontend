import React, {Component} from 'react'

import { connect } from "react-redux";

import { fetchArcanas } from "../actions/arcanaActions"
import Arcanas from '../components/arcanas/Arcanas'

class ArcanasContainer extends Component {
    componentDidMount() {
        this.props.fetchArcanas()
    }

    render() {
        console.log(this.props)
        return(
            <div className="container">
                <Arcanas arcanas={this.props.arcanas.arcanas} suits={this.props.suits.suits} cards={this.props.cards.cards}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      arcanas: state.arcanas,
      suits: state.suits,
      cards: state.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchArcanas: () => dispatch(fetchArcanas()),
    }
}

// export default ArcanasContainer
export default connect(mapStateToProps, mapDispatchToProps)(ArcanasContainer)