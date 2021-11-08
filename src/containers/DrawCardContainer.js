import { Component } from "react"
import { connect } from "react-redux"
import DrawCard from "../components/cards/DrawCard"

class DrawCardContainer extends Component {    
    render() {
        return <DrawCard cards={this.props.cards.cards}/>
    }
}

const mapStateToProps = (state) => {
    return {
      cards: state.cards
    }
}

export default connect(mapStateToProps)(DrawCardContainer)