import React from 'react'
import { connect } from "react-redux";
import { updateTransactionCostsForm, setTransactionCostsInfo } from '../actions'
import SaveModelButton from './SaveModelButton'

let input_types = [{id: "percentage", name: "Percentage of Item"}, {id: "setAmount", name: "Set Dollar Amount"}]

let overall_input_types = [{id: "detailed", name: "Set Specific Items"}, {id: "overall", name: "Overall Amount"}]

class TransactionCosts extends React.Component {

 handleChange = (e) => {
   this.props.updateTransactionCostsForm({
       [e.target.name]: e.target.value
   })
 }

 handleSubmit = (e) => {
   e.preventDefault();
   const form = this.props.TransactionCostsFormData
   this.props.setTransactionCostsInfo({
     transaction_cost: [
       {
         model_id: this.props.modelData.id,
         name: "Overall_deal_costs",
         input_type: form.Deal_costs_type,
         data_input: form.Deal_costs_input
       },
       {
         model_id: this.props.modelData.id,
         name: "CompanyA_LAO_costs",
         input_type: form.CompanyA_LAO_costs_type,
         data_input: form.CompanyA_LAO_costs_input
       },
       {
         model_id: this.props.modelData.id,
         name: "CompanyB_LAO_costs",
         input_type: form.CompanyB_LAO_costs_type,
         data_input: form.CompanyB_LAO_costs_input
       },
       {
         model_id: this.props.modelData.id,
         name: "swap_breakage_costs",
         input_type: form.Swap_Breakage_type,
         data_input: form.Swap_Breakage_input
       },
       {
         model_id: this.props.modelData.id,
         name: "debt_prepayment_costs",
         input_type: form.Debt_Prepayment_type,
         data_input: form.Debt_Prepayment_input
       },
       {
         model_id: this.props.modelData.id,
         name: "debt_assumption_costs",
         input_type: form.Debt_Assumption_type,
         data_input: form.Debt_Assumption_input
       },
       {
         model_id: this.props.modelData.id,
         name: "debt_issuance_costs",
         input_type: form.Debt_Issuance_type,
         data_input: form.Debt_Issuance_input
       },
       {
         model_id: this.props.modelData.id,
         name: "bond_prepayment_costs",
         input_type: "setAmount",
         data_input: form.Bond_Prepayment_input
       },
       {
         model_id: this.props.modelData.id,
         name: "transfer_taxes",
         input_type: "setAmount",
         data_input: form.Transfer_Taxes_input
       },
       {
         model_id: this.props.modelData.id,
         name: "employee_costs",
         input_type: "setAmount",
         data_input: form.Employee_Costs_input
       },
       {
         model_id: this.props.modelData.id,
         name: "other_costs",
         input_type: "setAmount",
         data_input: form.Other_Costs_input
       }
     ]
     });
     this.props.updateTransactionCostsForm({
       Deal_costs_type: "",
       Deal_costs_input: "",
       CompanyA_LAO_costs_type: "",
       CompanyA_LAO_costs_input: "",
       CompanyB_LAO_costs_type: "",
       CompanyB_LAO_costs_input: "",
       Swap_Breakage_type: "",
       Swap_Breakage_input: "",
       Debt_Prepayment_type: "",
       Debt_Prepayment_input: "",
       Debt_Assumption_type: "",
       Debt_Assumption_input: "",
       Debt_Issuance_type: "",
       Debt_Issuance_input: "",
       Bond_Prepayment_input: "",
       Transfer_Taxes_input: "",
       Employee_Costs_input: "",
       Other_Costs_input: ""
   })
   this.props.next()
  }



 render() {
   return (
     <div className="form">
        <h3>TransactionCosts Info</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="three-columns-form">

    <label className="form-label">Overall Transaction Costs:</label>

        <select
           onChange={this.handleChange}
           className="form-input-1"
           name="Deal_costs_type"
           defaultValue=""
           >
            <option value="" disabled hidden>Select</option>
            {overall_input_types.map((deal_type) =>
              <option key={deal_type.id} value={deal_type.id}>{deal_type.name}</option>
            )}
        </select>

       <input
          type="number"
          name="Deal_costs_input"
          value={this.props.TransactionCostsFormData.Deal_costs}
          onChange={this.handleChange}
          className="form-input-2"
          step= "any"/>


// swtich label names based on inputs
      <label className="form-label">Acquiror Legal, Advisory, Other Costs:</label>

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

// swtich label names based on inputs
    <label className="form-label">Target Legal, Advisory, Other Costs:</label>

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

// do not show if no debt prepaid
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

// do not show if no debt assumed
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

// do not show if no debt issued
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

// do not show if no bonds and repaid
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

        <input
          type="submit"
          value="Save TransactionCosts Info"
          className="form-input-1" />



      </form>
      <SaveModelButton/>
    </div>
   </div>
   )
 }
}

export default connect (state => {return {TransactionCostsFormData: state.TransactionCostsFormData, modelData: state.modelData }}, { updateTransactionCostsForm, setTransactionCostsInfo })(TransactionCosts);
