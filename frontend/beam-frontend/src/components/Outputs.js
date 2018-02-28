import React from 'react'
import { connect } from "react-redux";
import OfferSummary from './modelOutputs/OfferSummary';
import SourcesAndUses from './modelOutputs/SourcesAndUses'

class Outputs extends React.Component {

  render() {
    return (
      <div>
      <p>model data for {this.props.modelData.name}</p>
      <OfferSummary />
      <SourcesAndUses />
      </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData }}, )(Outputs)
