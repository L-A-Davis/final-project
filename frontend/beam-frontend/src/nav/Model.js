import React from 'react';
import { Redirect } from 'react-router'
import WithAuth from '../wrappers/WithAuth'
import { connect } from 'react-redux'
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
    showBasicInfoForm: false,
    showEquityForm: false,
    showOfferForm: false,
    showCapitalizationForm: false,
    showCashFlowForm: false,
    showTransactionCosts: false,
    showOutputs: false,
    showButtons: true
  }

 componentDidMount () {
   (this.props.allModelsforProject &&
   this.props.allModelsforProject.length > 0) ?
   this.handleExistingModel() :
   this.setState({
     showBasicInfoForm: true
   })
  }

 handleExistingModel = () => {
   this.setState({
     showBasicInfoForm: true,
     showOutputs: true
   })
 }

  handleBasicInfoFormSubmission = () => {
    this.setState({
      showBasicInfoForm: !this.state.showBasicInfoForm,
      showEquityForm: !this.state.showEquityForm
    })
  }

  handleEquityFormSubmission = () => {
    this.setState({
      showEquityForm: !this.state.showEquityForm,
      showOfferForm: !this.state.showOfferForm
    })
  }

  handleOfferFormSubmission = () => {
    this.setState({
      showOfferForm: !this.state.showOfferForm,
      showCapitalizationForm: !this.state.showCapitalizationForm
    })
  }

  handleOfferFormSubmission = () => {
    this.setState({
      showOfferForm: !this.state.showOfferForm,
      showCapitalizationForm: !this.state.showCapitalizationForm
    })
  }

  handleCapitalizationFormSubmission = () => {
    this.setState({
      showCapitalizationForm: !this.state.showCapitalizationForm,
      showCashFlowForm: !this.state.showCashFlowForm
    })
  }

  handleCashFlowFormSubmission = () => {
    this.setState({
      showCashFlowForm: !this.state.showCashFlowForm,
      showTransactionCosts: !this.state.showTransactionCosts
    })
  }

  handleTransactionCostsSubmission = () => {
    this.setState({
      showTransactionCosts: !this.state.showTransactionCosts,
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
           <button> Basic Info Form </button> <br/>
           <button> Equity Info Form </button> <br/>
           <button> Offer Inputs </button> <br/>
           <button> Capitalization </button> <br/>
           <button> Cash Flow Inputs </button> <br/>
           <button> Transaction Costs </button> <br/>
          </div>
      }
      { this.state.showBasicInfoForm &&
        <BasicInfoForm next={this.handleBasicInfoFormSubmission}/>
      }
      { this.state.showEquityForm &&
        <EquityForm next={this.handleEquityFormSubmission}/>
      }
      { this.state.showOfferForm &&
        <OfferForm next={this.handleOfferFormSubmission} />
      }
      { this.state.showCapitalizationForm &&
        <CapitalizationForm next={this.handleCapitalizationFormSubmission}/>
      }
      { this.state.showCashFlowForm &&
        <CashFlowForm next={this.handleCashFlowFormSubmission}/>
      }
      { this.state.showTransactionCosts &&
        <TransactionCosts next={this.handleTransactionCostsSubmission}/>
      }
      {
        this.state.showOutputs &&
        <Outputs />
      }

        <SaveModelButton
         auth={this.props.auth}
         history={this.props.history} />
      </div>

    </div>
  )
 }
}

 export default connect(state => {return {allModelsforProject: state.allModelsforProject, modelData: state.modelData }}, { })(WithAuth(Model))
