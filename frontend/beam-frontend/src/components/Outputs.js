import React from 'react'
import { connect } from "react-redux";
import OfferSummary from './modelOutputs/OfferSummary';
import SourcesAndUses from './modelOutputs/SourcesAndUses'
import Accretion from './modelOutputs/Accretion';
import Capitalization from './modelOutputs/Capitalization';
import Contribution from './modelOutputs/Contribution';
import CostSummary from './modelOutputs/CostSummary';
import 'react-table/react-table.css'
import { handleCalculateOutputs } from '../actions'



class Outputs extends React.Component {

  componentDidMount() {
    this.props.handleCalculateOutputs(this.props.modelData)
  }

  render() {
    return (
      <div>
      <OfferSummary />
      <SourcesAndUses />
      <Accretion />
      <Capitalization />
      <Contribution />
      <CostSummary />
      </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData }}, {handleCalculateOutputs} )(Outputs)
