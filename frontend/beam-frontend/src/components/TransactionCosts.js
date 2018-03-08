import React from 'react'
import { connect } from "react-redux";
import { updateTransactionCostForm, resetTransactionCostInfo, newTransactionCostInfo } from '../actions'
import { Form, Segment, Grid } from 'semantic-ui-react'

let input_types = [{id: "percentage", name: "Percentage of Item"}, {id: "setAmount", name: "Set Dollar Amount"}]

let overall_input_types = [{id: "detailed", name: "Set Specific Items"}, {id: "overall", name: "Overall Amount"}]

class TransactionCosts extends React.Component {

 state = {
   showAdditionalCosts: false,
   showSetOverallAmount: false,

 }


 handleChange = (e) => {
   this.props.updateTransactionCostForm({
       [e.target.name]: e.target.value
   })
   e.target.name === "Deal_costs_type" && e.target.value === "detailed" ?
    this.setState ({
      showAdditionalCosts: true,
      showSetOverallAmount: false,
    }) :
    e.target.name === "Deal_costs_type" && e.target.value === "overall" ?
    this.setState ({
      showSetOverallAmount: true,
      showAdditionalCosts: false,
    }) : null
 }
 handleDataSave = (data) =>{
   for (let i = 0; i< data.length; i++){
     if (data[i].id !== "") {
     this.props.resetTransactionCostInfo(data[i])
   } else {
     this.props.newTransactionCostInfo(data[i])
   }
  }
 }


 handleSubmit = (e) => {
   e.preventDefault();
   const form = this.props.TransactionCostsFormData
   let info = [
       {
         id: form.Deal_costs_id,
         model_id: this.props.modelData.id,
         name: "Overall_deal_costs",
         input_type: form.Deal_costs_type ,
         data_input: form.Deal_costs_input || 0
       },
       {
         id: form.CompanyA_LAO_costs_id,
         model_id: this.props.modelData.id,
         name: "CompanyA_LAO_costs",
         input_type: form.CompanyA_LAO_costs_type || 'setAmount',
         data_input: form.CompanyA_LAO_costs_input || 0
       },
       {
         id: form.CompanyB_LAO_costs_id,
         model_id: this.props.modelData.id,
         name: "CompanyB_LAO_costs",
         input_type: form.CompanyB_LAO_costs_type || 'setAmount',
         data_input: form.CompanyB_LAO_costs_input || 0
       },
       {
         id: form.Swap_Breakage_id,
         model_id: this.props.modelData.id,
         name: "swap_breakage_costs",
         input_type: form.Swap_Breakage_type || 'setAmount',
         data_input: form.Swap_Breakage_input || 0
       },
       {
         id: form.Debt_Prepayment_id,
         model_id: this.props.modelData.id,
         name: "debt_prepayment_costs",
         input_type: form.Debt_Prepayment_type || 'setAmount',
         data_input: form.Debt_Prepayment_input || 0
       },
       {
         id: form.Debt_Assumption_id,
         model_id: this.props.modelData.id,
         name: "debt_assumption_costs",
         input_type: form.Debt_Assumption_type || 'setAmount',
         data_input: form.Debt_Assumption_input || 0
       },
       {
         id: form.Debt_Issuance_id,
         model_id: this.props.modelData.id,
         name: "debt_issuance_costs",
         input_type: form.Debt_Issuance_type || 'setAmount',
         data_input: form.Debt_Issuance_input || 0
       },
       {
         id: form.Bond_Prepayment_id,
         model_id: this.props.modelData.id,
         name: "bond_prepayment_costs",
         input_type: "setAmount",
         data_input: form.Bond_Prepayment_input || 0
       },
       {
         id: form.Transfer_Taxes_id,
         model_id: this.props.modelData.id,
         name: "transfer_taxes",
         input_type: "setAmount",
         data_input: form.Transfer_Taxes_input || 0
       },
       {
         id: form.Employee_Costs_id,
         model_id: this.props.modelData.id,
         name: "employee_costs",
         input_type: "setAmount",
         data_input: form.Employee_Costs_input || 0
       },
       {
         id: form.Other_Costs_id,
         model_id: this.props.modelData.id,
         name: "other_costs",
         input_type: "setAmount",
         data_input: form.Other_Costs_input || 0
       }
     ]
    this.handleDataSave(info)
   this.props.next()
  }



 render() {
   return (
     <Grid
     textAlign='center'
     style={{ height: '100%' }}
     verticalAlign='top'
   >
   <Grid.Column style={{ maxWidth: 1000 }}>

     <div className="form">
      <Segment>
     <i onClick={this.props.exit} className="window close outline icon large grey"></i>
        <h3>Transaction Costs Info</h3>
     <div >
       <form onSubmit={this.handleSubmit} >
       <div className="three-columns-form">
       <label className="form-input-1">Input Type</label>
       <label className="form-input-2">Input</label>
    <label className="form-label">Overall Transaction Costs:</label>

        <select
           onChange={this.handleChange}
           className="form-input-1"
           name="Deal_costs_type"
           defaultValue=""
           >
            <option value="" disabled hidden>Select</option>
            {overall_input_types.map((type) =>
              <option key={type.id} value={type.id}>{type.name}</option>
            )}
        </select>

        { this.state.showSetOverallAmount &&
          <input
             type="number"
             name="Deal_costs_input"
             value={this.props.TransactionCostsFormData.Deal_costs}
             onChange={this.handleChange}
             className="form-input-2"
             step= "any"/>
        }
        </div>

        { this.state.showAdditionalCosts &&
          <div className="three-columns-form">
        { (!("basic_info_datum" in this.props.modelData) ||
          this.props.modelData.basic_info_datum.length === 0 ||
          (this.props.modelData.basic_info_datum[0].company === "A" && this.props.modelData.basic_info_datum[0].acquiror ) || (this.props.modelData.basic_info_datum[0].company === "B" && !this.props.modelData.basic_info_datum[0].acquiror )) ?

        <label className="form-label">Acquiror Legal, Advisory, Other Costs:</label> :
          <label className="form-label">Target Legal, Advisory, Other Costs:</label>
        }

        <select
           onChange={this.handleChange}
           className="form-input-1"
           name="CompanyA_LAO_costs_type"
           defaultValue=""
           >
            <option value="" disabled hidden>Select</option>
            {input_types.map((deal_type) =>
              <option key={deal_type.id} value={deal_type.id}>{deal_type.name}</option>
            )}
        </select>

       <input
          type="number"
          name="CompanyA_LAO_costs_input"
          value={this.props.TransactionCostsFormData.CompanyA_LAO_costs_input}
          onChange={this.handleChange}
          className="form-input-2"
          step= "any"/>


    { (!("basic_info_datum" in this.props.modelData) ||
      this.props.modelData.basic_info_datum.length === 0 ||
      (this.props.modelData.basic_info_datum[1].company === "A" && this.props.modelData.basic_info_datum[1].acquiror) ||
      (this.props.modelData.basic_info_datum[1].company === "B" && !this.props.modelData.basic_info_datum[1].acquiror )
    ) ?
    <label className="form-label">Target Legal, Advisory, Other Costs:</label> :
      <label className="form-label">Acquiror Legal, Advisory, Other Costs:</label>
    }


      <select
         onChange={this.handleChange}
         className="form-input-1"
         name="CompanyB_LAO_costs_type"
         defaultValue=""
         >
          <option value="" disabled hidden>Select</option>
          {input_types.map((deal_type) =>
            <option key={deal_type.id} value={deal_type.id}>{deal_type.name}</option>
          )}
      </select>

     <input
        type="number"
        name="CompanyB_LAO_costs_input"
        value={this.props.TransactionCostsFormData.CompanyB_LAO_costs_input}
        onChange={this.handleChange}
        className="form-input-2"
        step= "any"/>

    <label className="form-label">Swap Breakage Costs:</label>

        <select
           onChange={this.handleChange}
           className="form-input-1"
           name="Swap_Breakage_type"
           defaultValue=""
           >
            <option value="" disabled hidden>Select</option>
            {input_types.map((deal_type) =>
              <option key={deal_type.id} value={deal_type.id}>{deal_type.name}</option>
            )}
        </select>

       <input
          type="number"
          name="Swap_Breakage_input"
          value={this.props.TransactionCostsFormData.Swap_Breakage_input}
          onChange={this.handleChange}
          className="form-input-2"
          step= "any"/>

      <label className="form-label">Debt Prepayment Costs:</label>

          <select
             onChange={this.handleChange}
             className="form-input-1"
             name="Debt_Prepayment_type"
             defaultValue=""
             >
              <option value="" disabled hidden>Select</option>
              {input_types.map((deal_type) =>
                <option key={deal_type.id} value={deal_type.id}>{deal_type.name}</option>
              )}
          </select>

         <input
            type="number"
            name="Debt_Prepayment_input"
            value={this.props.TransactionCostsFormData.Debt_Prepayment_input}
            onChange={this.handleChange}
            className="form-input-2"
            step= "any"/>

    <label className="form-label">Debt Assumption Costs:</label>

        <select
           onChange={this.handleChange}
           className="form-input-1"
           name="Debt_Assumption_type"
           defaultValue=""
           >
            <option value="" disabled hidden>Select</option>
            {input_types.map((deal_type) =>
              <option key={deal_type.id} value={deal_type.id}>{deal_type.name}</option>
            )}
        </select>

       <input
          type="number"
          name="Debt_Assumption_input"
          value={this.props.TransactionCostsFormData.Debt_Assumption_input}
          onChange={this.handleChange}
          className="form-input-2"
          step= "any"/>

      <label className="form-label">Debt Issuance Costs:</label>

          <select
             onChange={this.handleChange}
             className="form-input-1"
             name="Debt_Issuance_type"
             defaultValue=""
             >
              <option value="" disabled hidden>Select</option>
              {input_types.map((deal_type) =>
                <option key={deal_type.id} value={deal_type.id}>{deal_type.name}</option>
              )}
          </select>

         <input
            type="number"
            name="Debt_Issuance_input"
            value={this.props.TransactionCostsFormData.Debt_Issuance_input}
            onChange={this.handleChange}
            className="form-input-2"
            step= "any"/>

      <label className="form-label">Bond Prepayment Costs:</label>

         <input
            type="number"
            name="Bond_Prepayment_input"
            value={this.props.TransactionCostsFormData.Bond_Prepayment_input}
            onChange={this.handleChange}
            className="form-input-2"
            step= "any"/>

      <label className="form-label">Transfer Taxes Estimate:</label>

         <input
            type="number"
            name="Transfer_Taxes_input"
            value={this.props.TransactionCostsFormData.Transfer_Taxes_input}
            onChange={this.handleChange}
            className="form-input-2"
            step= "any"/>

      <label className="form-label">Change of Control (not in Shares):</label>

         <input
            type="number"
            name="Employee_Costs_input"
            value={this.props.TransactionCostsFormData.Employee_Costs_input}
            onChange={this.handleChange}
            className="form-input-2"
            step= "any"/>

      <label className="form-label">Other Costs:</label>

         <input
            type="number"
            name="Other_Costs_input"
            value={this.props.TransactionCostsFormData.Other_Costs_input}
            onChange={this.handleChange}
            className="form-input-2"
            step= "any"/>
        </div>
        }
        <div className="three-columns-form">
        <input
          type="submit"
          value="Save Transaction Costs Info"
          className="form-input-1" />

        </div>

      </form>
    </div>
    </Segment>
   </div>
   </Grid.Column>
   </Grid>
   )
 }
}

export default connect (state => {return {TransactionCostsFormData: state.TransactionCostsFormData, modelData: state.modelData }}, { updateTransactionCostForm, resetTransactionCostInfo, newTransactionCostInfo })(TransactionCosts);
