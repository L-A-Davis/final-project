import React from 'react'
import { connect } from "react-redux";
import { updateCashFlowForm, setCashFlowInfo } from '../actions'


class CashFlowForm extends React.Component {

 handleChange = (e) => {
   this.props.updateCashFlowForm({
       [e.target.name]: e.target.value
   })
 }

 handleSubmit = (e) => {
   e.preventDefault();
  const form  = this.props.CashFlowFormData
   this.props.setCashFlowInfo({
     cash_flow_info_datum:[
        {
          model_id: this.props.modelData.id,
          company: "A",
          item_name: "FFO_Per_Share",
          amount_year1: form.CompanyA_FFOPerShare_1
        },
        {
          model_id: this.props.modelData.id,
          company: "B",
          item_name: "FFO_Per_Share",
          amount_year1: form.CompanyB_FFOPerShare_1
        },
        {
          model_id: this.props.modelData.id,
          company: "A",
          item_name: "AFFO_Per_Share",
          amount_year1: form.CompanyA_AFFOPerShare_1
        },
        {
          model_id: this.props.modelData.id,
          company: "B",
          item_name: "AFFO_Per_Share",
          amount_year1: form.CompanyB_AFFOPerShare_1
        },
        {
          model_id: this.props.modelData.id,
          company: "A",
          item_name: "Revenue",
          amount_year1: form.CompanyA_revenue_1
        },
        {
          model_id: this.props.modelData.id,
          company: "B",
          item_name: "Revenue",
          amount_year1: form.CompanyB_revenue_1
        },
        {
          model_id: this.props.modelData.id,
          company: "A",
          item_name: "NOI",
          amount_year1: form.CompanyA_NOI_1
        },
        {
          model_id: this.props.modelData.id,
          company: "B",
          item_name: "NOI",
          amount_year1: form.CompanyB_NOI_1
        },
        {
          model_id: this.props.modelData.id,
          company: "A",
          item_name: "GA",
          amount_year1: form.CompanyA_GA_1
        },
        {
          model_id: this.props.modelData.id,
          company: "B",
          item_name: "GA",
          amount_year1: form.CompanyB_GA_1
        },
        {
          model_id: this.props.modelData.id,
          company: "A",
          item_name: "EBITDA",
          amount_year1: form.CompanyA_EBITDA_1
        },
        {
          model_id: this.props.modelData.id,
          company: "B",
          item_name: "EBITDA",
          amount_year1: form.CompanyB_EBITDA_1
        }
     ]
     });
     this.props.updateCashFlowForm({
       CompanyA_FFOPerShare_1: "",
       CompanyB_FFOPerShare_1: "",
       CompanyA_AFFOPerShare_1: "",
       CompanyB_AFFOPerShare_1: "",
       CompanyA_revenue_1: "",
       CompanyB_revenue_1: "",
       CompanyA_NOI_1: "",
       CompanyB_NOI_1: "",
       CompanyA_GA_1: "",
       CompanyB_GA_1: "",
       CompanyA_EBITDA_1: "",
       CompanyB_EBITDA_1: "",
       GA_synergies_type: '',
       GA_synergies_input: ""
     })
     this.props.next()
    }

 render() {
   return (
     <div className="form">
     <button onClick={this.props.exit}>X</button>
        <h3>Cash Flow Info</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="three-columns-form">
       {this.props.modelData.basic_info_datum ?
        <label className="form-input-1">
        {this.props.modelData.basic_info_datum[0].codename} </label>

         :
        <label className="form-input-1">Company A</label> }

        {this.props.modelData.basic_info_datum ?
         <label className="form-input-2">
         {this.props.modelData.basic_info_datum[1].codename} </label>

          :
         <label className="form-input-2">Company B</label> }

       <label className="form-label">Year 1 FFO per Share:</label>
       <input
          type="number"
          name="CompanyA_FFOPerShare_1"
          value={this.props.CashFlowFormData.CompanyA_FFOPerShare_1}
          onChange={this.handleChange}
          className="form-input-1"
          step= "0.01"/>

      <input
         type="number"
         name="CompanyB_FFOPerShare_1"
         value={this.props.CashFlowFormData.CompanyB_FFOPerShare_1}
         onChange={this.handleChange}
         className="form-input-2"
         step= "0.01"
          />

      <label className="form-label">Year 1 AFFO per Share:</label>
         <input
            type="number"
            name="CompanyA_AFFOPerShare_1"
            value={this.props.CashFlowFormData.CompanyA_AFFOPerShare_1}
            onChange={this.handleChange}
            className="form-input-1"
            step= "0.01"/>

        <input
           type="number"
           name="CompanyB_AFFOPerShare_1"
           value={this.props.CashFlowFormData.CompanyB_AFFOPerShare_1}
           onChange={this.handleChange}
           className="form-input-2"
           step= "0.01"/>

       <label className="form-label">Year 1 Total Revenue:</label>

       <input
          type="number"
          name="CompanyA_revenue_1"
          value={this.props.CashFlowFormData.CompanyA_revenue_1}
          onChange={this.handleChange}
          className="form-input-1"
          step= "any"/>

      <input
         type="number"
         name="CompanyB_revenue_1"
         value={this.props.CashFlowFormData.CompanyB_revenue_1}
         onChange={this.handleChange}
         className="form-input-2"
         step= "any"/>


        <label className="form-label">Year 1 NOI: </label>

        <input
           type="number"
           name="CompanyA_NOI_1"
           value={this.props.CashFlowFormData.CompanyA_NOI_1}
           onChange={this.handleChange}
           className="form-input-1"
           step= "any"/>

       <input
          type="number"
          name="CompanyB_NOI_1"
          value={this.props.CashFlowFormData.CompanyB_NOI_1}
          onChange={this.handleChange}
          className="form-input-2"
          step= "any"/>

         <label className="form-label">Year 1 G&A Expense: </label>

         <input
            type="number"
            name="CompanyA_GA_1"
            value={this.props.CashFlowFormData.CompanyA_GA_1}
            onChange={this.handleChange}
            className="form-input-1"
            step= "any"/>

        <input
           type="number"
           name="CompanyB_GA_1"
           value={this.props.CashFlowFormData.CompanyB_GA_1}
           onChange={this.handleChange}
           className="form-input-2"
           step= "any"/>


        <label className="form-label">Year 1 EBITDA: </label>

        <input
           type="number"
           name="CompanyA_EBITDA_1"
           value={this.props.CashFlowFormData.CompanyA_EBITDA_1}
           onChange={this.handleChange}
           className="form-input-1"
           step= "any"/>

       <input
          type="number"
          name="CompanyB_EBITDA_1"
          value={this.props.CashFlowFormData.CompanyB_EBITDA_1}
          onChange={this.handleChange}
          className="form-input-2"
          step= "any"/>


       <label className="form-label">Synergies:</label>

       <select
          onChange={this.handleChange}
          className="form-input-1"
          name="GA_synergies_type"
          defaultValue=""
          >
           <option value="" disabled hidden>Select</option>
           <option value="PercentofTarget">% of Target</option>
           <option value="PercentofAcquiror">% of Acquiror</option>
           <option value="SetAmount">Set Amount</option>
       </select>

      <input
         type="number"
         name="GA_synergies_input"
         value={this.props.CashFlowFormData.GA_synergies_input}
         onChange={this.handleChange}
         className="form-input-2"
         step= "any"/>

        <input
          type="submit"
          value="Save Cash Flow Info"
          className="form-input-1" />
      </form>
    </div>
   </div>
   )
 }
}

export default connect (state => {return {CashFlowFormData: state.CashFlowFormData, modelData: state.modelData }}, { updateCashFlowForm, setCashFlowInfo })(CashFlowForm);
