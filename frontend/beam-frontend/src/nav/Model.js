import React from 'react';
import { Redirect } from 'react-router'
import WithAuth from '../wrappers/WithAuth'
import { connect } from 'react-redux'
import NewModelForm from '../components/NewModelForm';
import BasicInfoForm from '../components/BasicInfoForm';
import EquityForm from '../components/EquityForm';
import OfferForm from '../components/OfferForm';
import CapitalizationForm from '../components/CapitalizationForm';
import CashFlowForm from '../components/CashFlowForm';
import TransactionCosts from '../components/TransactionCosts';
import SaveModelButton from '../components/SaveModelButton'
import Outputs from '../components/Outputs'

class Model extends React.Component {

  state = {
    showNewModelForm: false,
    showBasicInfoForm: false,
    showEquityForm: false,
    showOfferForm: false,
    showCapitalizationForm: false,
    showCashFlowForm: false,
    showTransactionCosts: false,
    showOutputs: false,
    showButtons: true,
    completedNewModelForm: false,
    completedBasicInfoForm: false,
    completedEquityForm: false,
    completedOfferForm: false,
    completedCapitalizationForm: false,
    completedCashFlowForm: false,
    completedTransactionCosts: false,
  }

  handleExit = () => {
    this.setState({
      showNewModelForm: false,
      showBasicInfoForm: false,
      showEquityForm: false,
      showOfferForm: false,
      showCapitalizationForm: false,
      showCashFlowForm: false,
      showTransactionCosts: false,
      showOutputs: false,
      showButtons: true,

    })
  }

handleButtonClick = (e) =>{
  let name = e.target.name
  this.setState({
    [name]: !this.state.name,
    showButtons: false
  })
}


  handleNewModelSubmission = () => {
    this.setState({
      showNewModelForm: !this.state.showNewModelForm,
      completedNewModelForm: !this.state.completedNewModelForm,
      showBasicInfoForm: !this.state.showBasicInfoForm,
    })
  }
  handleBasicInfoFormSubmission = () => {
    this.setState({
      showBasicInfoForm: !this.state.showBasicInfoForm,
      completedBasicInfoForm: !this.state.completedBasicInfoForm,
      showEquityForm: !this.state.showEquityForm
    })
  }

  handleEquityFormSubmission = () => {
    this.setState({
      showEquityForm: !this.state.showEquityForm,
      completedEquityForm: !this.state.completedEquityForm,
      showOfferForm: !this.state.showOfferForm
    })
  }

  handleOfferFormSubmission = () => {
    this.setState({
      showOfferForm: !this.state.showOfferForm,
      completedOfferForm: !this.state.completedOfferForm,
      showCapitalizationForm: !this.state.showCapitalizationForm
    })
  }

  handleCapitalizationFormSubmission = () => {
    this.setState({
      showCapitalizationForm: !this.state.showCapitalizationForm,
      completedCapitalizationForm: !this.state.completedCapitalizationForm,
      showCashFlowForm: !this.state.showCashFlowForm
    })
  }

  handleCashFlowFormSubmission = () => {
    this.setState({
      showCashFlowForm: !this.state.showCashFlowForm,
      completedCashFlowForm: !this.state.completedCashFlowForm,
      showTransactionCosts: !this.state.showTransactionCosts
    })
  }

  handleTransactionCostsSubmission = () => {
    this.setState({
      showTransactionCosts: !this.state.showTransactionCosts,
      completedTransactionCosts: !this.state.completedTransactionCosts,
      showOutputs: !this.state.showOutputs
    })
  }

  render () {
  return (
    <div>
      <h2>{this.props.modelData.name}</h2>
      <div>
      {this.state.showButtons &&
        <div>
           <button name="showNewModelForm" onClick={this.handleButtonClick}
           > New Model Form </button>
           <input type="checkbox"  checked={this.state.completedNewModelForm} readOnly /><br/>

           <button name="showBasicInfoForm"
           onClick={this.handleButtonClick}> Basic Info Form </button>
            <input type="checkbox" checked={this.state.completedBasicInfoForm} readOnly />
           <br/>

           <button name="showEquityForm"
           onClick={this.handleButtonClick}> Equity Info Form </button>
             <input type="checkbox" checked={this.state.completedEquityForm} readOnly />
           <br/>

           <button name="showOfferForm"
           onClick={this.handleButtonClick}> Offer Inputs </button>
             <input type="checkbox" checked={this.state.completedOfferForm} readOnly />
           <br/>

           <button name="showCapitalizationForm" onClick={this.handleButtonClick}> Capitalization </button>
             <input type="checkbox" checked={this.state.completedCapitalizationForm} readOnly />
           <br/>

           <button name="showCashFlowForm"
           onClick={this.handleButtonClick}> Cash Flow Inputs </button>
             <input type="checkbox" checked={this.state.completedCashFlowForm} readOnly />
           <br/>

           <button name="showTransactionCosts" onClick={this.handleButtonClick}> Transaction Costs </button>
             <input type="checkbox" checked={this.state.completedTransactionCosts} readOnly />
           <br/>
          </div>
      }

      { this.state.showNewModelForm &&
      <NewModelForm
      next={this.handleNewModelSubmission}
      exit={this.handleExit} />
      }

      { this.state.showBasicInfoForm &&
        <BasicInfoForm next={this.handleBasicInfoFormSubmission}
        exit={this.handleExit} />
      }
      { this.state.showEquityForm &&
        <EquityForm next={this.handleEquityFormSubmission}
        exit={this.handleExit} />
      }
      { this.state.showOfferForm &&
        <OfferForm next={this.handleOfferFormSubmission}
        exit={this.handleExit}  />
      }
      { this.state.showCapitalizationForm &&
        <CapitalizationForm next={this.handleCapitalizationFormSubmission}
        exit={this.handleExit} />
      }
      { this.state.showCashFlowForm &&
        <CashFlowForm next={this.handleCashFlowFormSubmission}
        exit={this.handleExit} />
      }
      { this.state.showTransactionCosts &&
        <TransactionCosts next={this.handleTransactionCostsSubmission}
        exit={this.handleExit} />
      }
      {
        this.state.showOutputs &&
        <Outputs />
      }
      </div>

    </div>
  )
 }
}

 export default connect(state => {return {allModelsforProject: state.allModelsforProject, modelData: state.modelData }}, { })(WithAuth(Model))


 // handleSetUp = () => {
 //   if (this.props.modelData.id === "") {
 //     this.setState({
 //       showNewModelForm: true
 //     })
 //   } else if (this.props.modelData.basic_info_datum.length === 0){
 //     this.setState({
 //       showBasicInfoForm: true
 //     })
 //   } else if (this.props.modelData.equity_info_datum.length === 0){
 //     this.setState({
 //       showEquityForm: true
 //     })
 //   } else if (this.props.modelData.offer_info_datum.length === 0) {
 //     this.setState({
 //       showOfferForm: true
 //     })
 //   } else if (this.props.modelData.capitalization_info_datum.length === 0) {
 //     this.setState({
 //       showCapitalizationForm: true
 //     })
 //   } else if (this.props.modelData.cash_flow_info_datum.length === 0){
 //     this.setState({
 //       showCashFlowForm: true
 //     })
 //   } else if (this.props.modelData.transaction_cost.length === 0){
 //     this.setState({
 //       showTransactionCosts: true
 //     })
 //   } else {
 //       this.setState({
 //         showOutputs: true
 //       })
 //     }
 //   }
