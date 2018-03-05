import React from 'react'
import { connect } from "react-redux";
import OfferSummary from './modelOutputs/OfferSummary';
import SourcesAndUses from './modelOutputs/SourcesAndUses'
import Accretion from './modelOutputs/Accretion';
import Capitalization from './modelOutputs/Capitalization';
import Contribution from './modelOutputs/Contribution';
import CostSummary from './modelOutputs/CostSummary';
import 'react-table/react-table.css'
import { handleCalculateOutputs, handleGetTradingData } from '../actions'



class Outputs extends React.Component {

  componentDidMount() {
    debugger
    this.props.handleCalculateOutputs(this.props.modelData)
    this.props.handleGetTradingData(this.props.modelData.basic_info_datum[0].ticker)
    this.props.handleGetTradingData(this.props.modelData.basic_info_datum[1].ticker)
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


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData }}, {handleCalculateOutputs, handleGetTradingData } )(Outputs)
