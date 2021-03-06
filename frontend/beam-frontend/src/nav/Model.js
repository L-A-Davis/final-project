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
import TransactionAdjustments from '../components/TransactionAdjustments';
import Outputs from '../components/Outputs'
import { changeCompletedStatus, handleShowOutputs, handleCalculateOutputs } from '../actions'
import { Grid, Segment } from 'semantic-ui-react'

class Model extends React.Component {

  state = {
    showNewModelForm: false,
    showBasicInfoForm: false,
    showEquityForm: false,
    showOfferForm: false,
    showCapitalizationForm: false,
    showCashFlowForm: false,
    showTransactionCosts: false,
    showTransactionAdjustments: false,
    showButtons: false,
    showBackToOutputs: false
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
      showTransactionAdjustments: false,
      showButtons: true,
    })
  }

handleButtonClick = (e) =>{
  let form_name = e.target.parentNode.id
  if (this.props.FormCompletedStatus[form_name]) {
    return
  } else {
    let name = e.target.name
    this.setState({
      [name]: !this.state.name,
      showButtons: false
    })
  }
}

handleEditButtonClick = (e) =>{
  let form_name = e.target.parentNode.id
  if (!this.props.FormCompletedStatus[form_name]) {
    return
  } else {
    let name = e.target.name
    this.setState({
      [name]: !this.state.name,
      showButtons: false
    })
  }
}


 handleStatusCheck = (current_form) =>{
   let forms = this.props.FormCompletedStatus
   let array_of_names = ["newModelFormData", "BasicInfoFormData", "EquityFormData", "OfferFormData", "CapitalizationFormData", "CashFlowFormData", "TransactionCostsFormData", "TransactionAdjustmentsFormData" ]
   let completed = []
   for (let i =0; i < array_of_names.length; i++) {
     if (array_of_names[i] === current_form) {
       completed.push("true")
     } else if (forms[array_of_names[i]] === true ){
       completed.push("true")
     } else {
     }
   }
     completed.length === array_of_names.length ? this.setState({
       showBackToOutputs: true
     }): null
 }

 handleStatusCheckNoForm = () =>{
   let forms = this.props.FormCompletedStatus
   let array_of_names = ["newModelFormData", "BasicInfoFormData", "EquityFormData", "OfferFormData", "CapitalizationFormData", "CashFlowFormData", "TransactionCostsFormData", "TransactionAdjustmentsFormData" ]
   let completed = []
   for (let i =0; i < array_of_names.length; i++) {
    if (forms[array_of_names[i]] === true ){
       completed.push("true")
     } else {
     }
   }
     completed.length === array_of_names.length ? this.setState({
       showBackToOutputs: true
     }): null
 }


  handleNewModelSubmission = () => {
    let form = "newModelFormData"
    this.props.changeCompletedStatus(form)
    this.handleStatusCheck(form)
    this.setState({
      showNewModelForm: false,
      showBasicInfoForm: true,
    })
  }
  handleBasicInfoFormSubmission = () => {
    let form = "BasicInfoFormData"
    this.props.changeCompletedStatus(form)
    this.handleStatusCheck(form)
    this.setState({
      showBasicInfoForm: false,
      showButtons: true
    })
  }

  handleEquityFormSubmission = () => {
    let form = "EquityFormData"
    this.props.changeCompletedStatus(form)
    this.handleStatusCheck(form)
    this.setState({
      showEquityForm: false,
      showButtons: true
    })
  }

  handleOfferFormSubmission = () => {
    let form = "OfferFormData"
    this.props.changeCompletedStatus(form)
    this.handleStatusCheck(form)
    this.setState({
      showOfferForm: false,
      showButtons: true
    })
  }

  handleCapitalizationFormSubmission = () => {
    let form = "CapitalizationFormData"
    this.props.changeCompletedStatus(form)
    this.handleStatusCheck(form)
    this.setState({
      showCapitalizationForm: false,
      showButtons: true
    })
  }

  handleCashFlowFormSubmission = () => {
    let form = "CashFlowFormData"
    this.props.changeCompletedStatus(form)
    this.handleStatusCheck(form)
    this.setState({
      showCashFlowForm: false,
      showButtons: true
    })
  }

  handleTransactionCostsSubmission = () => {
    let form = "TransactionCostsFormData"
    this.props.changeCompletedStatus(form)
    this.handleStatusCheck(form)
    this.setState({
      showTransactionCosts: false,
      showButtons: true
    })
  }


  handleTransactionAdjustmentsSubmission = () => {
    let form = "TransactionAdjustmentsFormData"
    this.props.changeCompletedStatus(form)
    this.handleStatusCheck(form)
    this.setState({
      showTransactionAdjustments: false,
      showButtons: true
    })
  }

handleShowButtons = () => {
  this.setState({
    showButtons: true,
    showBackToOutputs: true
  })
}

handleGoForward = () => {
  this.props.handleShowOutputs()
  this.props.handleCalculateOutputs(this.props.modelData)
}

componentDidMount() {
  this.props.startWithNewForm ?
     this.setState({
       showNewModelForm: true
     }) :
  this.props.showOutputs ? this.setState({
    showButtons: false
  }) : this.setState({
    showButtons: true
  })
  this.handleStatusCheckNoForm()
}

  render () {
    console.log(this.state.showButtons, this.props.showOutputs, this.state.showBackToOutputs)
  return (
    <div>
      <h1 className="project-header">Project {this.props.selectedProjectData.name}</h1>
      <h2 className="model-header">{this.props.modelData.name}</h2>
      <div className="lightgrey-background">
      {(this.state.showButtons && !this.props.showOutputs) &&
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='top'
        >
        <Grid.Column style={{ maxWidth: 600 }}>
        <div className="form">
        <Segment>
        <h3> Input Status </h3>
        <div className="allButtonHolder">

            <div className="buttonAndCheckBoxHolder">
                <h4>Form</h4>
                <h4>Completed?</h4>
                <h4></h4>
            </div>

          <div className="buttonAndCheckBoxHolder" id="BasicInfoFormData">
             <button
             data-status={this.props.FormCompletedStatus.BasicInfoFormData}
             className="modelFormButton"
             name="showBasicInfoForm"
             onClick={this.handleButtonClick}> Basic Info Form </button>
             <div className="formCheckBoxHolder">
                 <input type="checkbox" className="formStatusCheckBox"
                  checked={this.props.FormCompletedStatus.BasicInfoFormData} readOnly />
                  <label></label>
                  </div>
            {this.props.FormCompletedStatus.BasicInfoFormData &&
            <button
             data-status={!this.props.FormCompletedStatus.BasicInfoFormData}
            className="modelFormButton"
            name="showBasicInfoForm"
            onClick={this.handleEditButtonClick}>Edit</button>
            }
          </div>

          <div className="buttonAndCheckBoxHolder" id="EquityFormData">
             <button
             data-status={this.props.FormCompletedStatus.EquityFormData}
             className="modelFormButton"
             name="showEquityForm"
             onClick={this.handleButtonClick}> Equity Info Form </button>
             <div className="formCheckBoxHolder">
               <input type="checkbox" className="formStatusCheckBox" checked={this.props.FormCompletedStatus.EquityFormData} readOnly />
               <label></label>
               </div>
               {this.props.FormCompletedStatus.EquityFormData &&
               <button
                 data-status={!this.props.FormCompletedStatus.EquityFormData}
                 className="modelFormButton"
                 name="showEquityForm"
                 onClick={this.handleEditButtonClick}>Edit</button>
               }
           </div>

           <div className="buttonAndCheckBoxHolder" id="OfferFormData">
             <button
             data-status={this.props.FormCompletedStatus.OfferFormData}
             className="modelFormButton"
             name="showOfferForm"
             onClick={this.handleButtonClick}> Offer Inputs </button>
             <div className="formCheckBoxHolder">
               <input type="checkbox" className="formStatusCheckBox" checked={this.props.FormCompletedStatus.OfferFormData} readOnly />
              <label></label>
               </div>
               {this.props.FormCompletedStatus.OfferFormData &&
               <button
                 data-status={!this.props.FormCompletedStatus.OfferFormData}
                 className="modelFormButton"
                 name="showOfferForm"
                 onClick={this.handleEditButtonClick}>Edit</button>
               }
           </div>

           <div className="buttonAndCheckBoxHolder" id="CapitalizationFormData">
             <button
             data-status={this.props.FormCompletedStatus.CapitalizationFormData}
             className="modelFormButton"
             name="showCapitalizationForm" onClick={this.handleButtonClick}> Capitalization </button>
             <div className="formCheckBoxHolder">
               <input type="checkbox" className="formStatusCheckBox" checked={this.props.FormCompletedStatus.CapitalizationFormData} readOnly />
               <label></label>
                </div>
                {this.props.FormCompletedStatus.CapitalizationFormData &&
                <button
                  data-status={!this.props.FormCompletedStatus.CapitalizationFormData}
                  className="modelFormButton"
                  name="showCapitalizationForm" onClick={this.handleEditButtonClick}>Edit</button>
                  }
           </div>

           <div className="buttonAndCheckBoxHolder" id="CashFlowFormData">
           <button
           data-status={this.props.FormCompletedStatus.CashFlowFormData}
           className="modelFormButton"
           name="showCashFlowForm"
           onClick={this.handleButtonClick}> Cash Flow Inputs </button>
           <div className="formCheckBoxHolder">
             <input type="checkbox" className="formStatusCheckBox"  checked={this.props.FormCompletedStatus.CashFlowFormData} readOnly />
             <label></label>
              </div>
          {this.props.FormCompletedStatus.CashFlowFormData &&
          <button
            data-status={!this.props.FormCompletedStatus.CashFlowFormData}
            className="modelFormButton"
            name="showCashFlowForm"
            onClick={this.handleEditButtonClick}>Edit</button>
          }
           </div>

           <div className="buttonAndCheckBoxHolder" id="TransactionCostsFormData">
             <button
             data-status={this.props.FormCompletedStatus.TransactionCostsFormData}
             className="modelFormButton"
             name="showTransactionCosts" onClick={this.handleButtonClick}> Transaction Costs </button>
             <div className="formCheckBoxHolder">
               <input type="checkbox" className="formStatusCheckBox" checked={this.props.FormCompletedStatus.TransactionCostsFormData} readOnly />
               <label></label>
                </div>
            {this.props.FormCompletedStatus.TransactionCostsFormData &&
            <button
            data-status={!this.props.FormCompletedStatus.TransactionCostsFormData}
            className="modelFormButton"
            name="showTransactionCosts" onClick={this.handleEditButtonClick}>Edit</button>
            }
           </div>

           <div className="buttonAndCheckBoxHolder" id="TransactionAdjustmentsFormData">
             <button
             data-status={this.props.FormCompletedStatus.TransactionAdjustmentsFormData}
             className="modelFormButton"
             name="showTransactionAdjustments" onClick={this.handleButtonClick}> Transaction Adjustments </button>
             <div className="formCheckBoxHolder">
               <input type="checkbox" className="formStatusCheckBox" checked={this.props.FormCompletedStatus.TransactionAdjustmentsFormData} readOnly />
               <label></label>
                </div>
            {this.props.FormCompletedStatus.TransactionAdjustmentsFormData &&
            <button
            data-status={!this.props.FormCompletedStatus.TransactionAdjustmentsFormData}
            className="modelFormButton"
            name="showTransactionAdjustments" onClick={this.handleEditButtonClick}>Edit</button>
            }
            <br/>
           </div>
           {
             this.state.showBackToOutputs &&
             <i className="arrow alternate circle right outline icon big grey"
             onClick={this.handleGoForward}
             ></i>
           }
          </div>
          </Segment>
          </div>
          </Grid.Column>
          </Grid>

      }

      { this.state.showNewModelForm &&
      <NewModelForm
      next={this.handleNewModelSubmission}
      exit={this.handleExit}
      auth={this.props.auth}
      history={this.props.history}/>
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
      { this.state.showTransactionAdjustments &&
        <TransactionAdjustments next={this.handleTransactionAdjustmentsSubmission}
        exit={this.handleExit} />
      }

      {
        this.props.showOutputs &&
        <div id="allOutputsHolder">
        <Outputs showButtons={this.handleShowButtons}/>
        </div>
      }
      </div>

    </div>
  )
 }
}

 export default connect(state => {return {allModelsforProject: state.allModelsforProject, modelData: state.modelData, FormCompletedStatus: state.FormCompletedStatus, showOutputs: state.showOutputs, selectedProjectData: state.selectedProjectData }}, { changeCompletedStatus, handleShowOutputs, handleCalculateOutputs })(WithAuth(Model))


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
//  //   }
//  <div className="buttonAndCheckBoxHolder" id="newModelFormData">
//    <button data-status={this.props.FormCompletedStatus.newModelFormData}
//    className="modelFormButton"
//    name="showNewModelForm" onClick={this.handleButtonClick}
//    > New Model Form </button>
//    <div className="formCheckBoxHolder">
//        <input type="checkbox" className="formStatusCheckBox"
//         checked={this.props.FormCompletedStatus.newModelFormData} readOnly />
//         <label></label>
//         </div>
// </div>
// <button
//   onClick={this.props.handleShowOutputs}>Back To Outputs </button>
