import React from 'react'
import { connect } from "react-redux";
import OfferSummary from './modelOutputs/OfferSummary';
import SourcesAndUses from './modelOutputs/SourcesAndUses'
import Accretion from './modelOutputs/Accretion';
import Capitalization from './modelOutputs/Capitalization';
import Contribution from './modelOutputs/Contribution';
import CostSummary from './modelOutputs/CostSummary';
import HistoricalTrading from './modelOutputs/HistoricalTrading';
import CapitalizationChart from './modelOutputs/CapitalizationChart';
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
      <i className="backward icon large grey left-side"
      onClick={this.handleBackClick}></i>
      <div id="subOutputsHolder">
        <SourcesAndUses />
        <OfferSummary />
        <Accretion />
        {this.props.modelData.cash_flow_info_datum.length > 1 &&
          <Contribution />
        }
        <Capitalization />
        <CostSummary />
        {this.props.modelData.capitalization_info_datum.length > 1 &&
         <CapitalizationChart />
        }
        {this.props.tradingData.length > 1 &&
          <HistoricalTrading />
        }
      </div>
      </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData, tradingData: state.tradingData }}, {handleCalculateOutputs, handleGetTradingData, handleHideOutputs } )(Outputs)
//
// <button
// onClick={this.handleBackClick}
// >back to forms</button>
