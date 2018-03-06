import React from 'react'
import { connect } from "react-redux";
import OfferSummary from './modelOutputs/OfferSummary';
import SourcesAndUses from './modelOutputs/SourcesAndUses'
import Accretion from './modelOutputs/Accretion';
import Capitalization from './modelOutputs/Capitalization';
import Contribution from './modelOutputs/Contribution';
import CostSummary from './modelOutputs/CostSummary';
import HistoricalTrading from './modelOutputs/HistoricalTrading';
import 'react-table/react-table.css'
import { handleCalculateOutputs, handleGetTradingData, handleHideOutputs } from '../actions'



class Outputs extends React.Component {

  componentDidMount() {
    this.props.handleCalculateOutputs(this.props.modelData)
    this.props.tradingData.length < 1 ?
    this.props.handleGetTradingData(this.props.modelData.basic_info_datum[0].ticker) : null
    this.props.tradingData.length < 2 ?
    this.props.handleGetTradingData(this.props.modelData.basic_info_datum[1].ticker) : null
  }

  handleBackClick = (e) => {
    this.props.handleHideOutputs()
    this.props.showButtons()
  }

  render() {
    return (
      <div>
      <i class="backward icon"
      onClick={this.handleBackClick}></i>
      <button
      onClick={this.handleBackClick}
      >back to forms</button>
      <OfferSummary />
      <SourcesAndUses />
      <Accretion />
      <Capitalization />
      <Contribution />
      <CostSummary />
      <HistoricalTrading />
      </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, tradingData: state.tradingData }}, {handleCalculateOutputs, handleGetTradingData, handleHideOutputs } )(Outputs)
