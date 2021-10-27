import React, {Component} from 'react'

// import { connect } from "react-redux";

// import { fetchArcanas } from "../actions/arcanaActions"
import Arcanas from '../components/arcanas/Arcanas'

class ArcanasContainer extends Component {

    // componentDidMount() {
    //     this.props.fetchArcanas()
    // }

    render() {
        console.log('arcanas container props', this.props)
        return(
            <div>
                <Arcanas arcanas={this.props.arcanas} suits={this.props.suits} cards={this.props.cards}/>
            </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//       arcanas: state.arcanas,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//       fetchArcanas: () => dispatch(fetchArcanas()),
//     }
//   }

export default ArcanasContainer

// export default connect(mapStateToProps, mapDispatchToProps)(ArcanasContainer)