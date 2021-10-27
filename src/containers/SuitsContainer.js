import React, {Component} from 'react'

// import { connect } from "react-redux";

// import { fetchSuits } from "../actions/suitActions"
import Suits from '../components/suits/Suits'

class SuitsContainer extends Component {
    
    // componentDidMount() {
    //     this.props.fetchSuits()
    // }

    render() {
        return(
            <div>
                <Suits suits={this.props.suits} cards={this.props.cards}/>
            </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//       suits: state.suits,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//       fetchSuits: () => dispatch(fetchSuits()),
//     }
// }

export default SuitsContainer
// export default connect(mapStateToProps, mapDispatchToProps)(SuitsContainer)