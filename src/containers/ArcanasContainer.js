import React, {Component} from 'react'

import { connect } from "react-redux";

import { fetchArcanas } from "../actions/arcanaActions"
import Arcanas from '../components/arcanas/Arcanas'

class ArcanasContainer extends Component {
    
    componentDidMount() {
        this.props.fetchArcanas()
    }

    render() {
        return(
            <div>
                <Arcanas arcanas={this.props.arcanas.arcanas} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      arcanas: state.arcanas,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchArcanas: () => dispatch(fetchArcanas()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ArcanasContainer)