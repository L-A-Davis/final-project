import React from 'react'
import { connect } from "react-redux";
import { updateEquityForm, resetEquityInfo, newEquityInfo } from '../actions'
// import { Button } from 'semantic-ui-react'

class EquityForm extends React.Component {

 handleChange = (e) => {
   this.props.updateEquityForm({
       [e.target.name]: e.target.value
   })
 }

 handleDataSave = (data) =>{
   for (let i = 0; i< data.length; i++){
     if (data[i].id !== "") {
     this.props.resetEquityInfo(data[i])
   } else {
     this.props.newEquityInfo(data[i])
   }
  }
 }

 handleSubmit = (e) => {
   e.preventDefault();
   let info = [
     {  company: "A",
        id: this.props.EquityFormData.CompanyA_id,
        currentSharePrice: this.props.EquityFormData.CompanyA_currentSharePrice,
        shares: this.props.EquityFormData.CompanyA_shares,
        dividend: this.props.EquityFormData.CompanyA_dividend,
        model_id: this.props.modelData.id},
     { company: "B",
        id: this.props.EquityFormData.CompanyB_id,
        currentSharePrice: this.props.EquityFormData.CompanyB_currentSharePrice,
        shares: this.props.EquityFormData.CompanyB_shares,
        dividend: this.props.EquityFormData.CompanyB_dividend,
        model_id: this.props.modelData.id}
   ]
   this.handleDataSave(info)
   this.props.next()
 }

 render() {
   return (
     <div className="form">
       <i onClick={this.props.exit} className="window close outline icon large grey"></i>
        <h3>Equity Info</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="three-columns-form">
       {(this.props.modelData.basic_info_datum && this.props.modelData.basic_info_datum.length === 2) ?
        <label className="form-input-1">
        {this.props.modelData.basic_info_datum[0].codename} </label>

         :
        <label className="form-input-1">Company A</label> }

        {(this.props.modelData.basic_info_datum && this.props.modelData.basic_info_datum.length === 2)  ?
         <label className="form-input-2">
         {this.props.modelData.basic_info_datum[1].codename} </label>

          :
         <label className="form-input-2">Company B</label> }

       <label className="form-label">Share Price:</label>
       <input
          type="number"
          name="CompanyA_currentSharePrice"
          value={this.props.EquityFormData.CompanyA_currentSharePrice}
          onChange={this.handleChange}
          className="form-input-1" />

      <input
         type="number"
         name="CompanyB_currentSharePrice"
         value={this.props.EquityFormData.CompanyB_currentSharePrice}
         onChange={this.handleChange}
         className="form-input-2" />

      <label className="form-label">Shares and Units:</label>
         <input
            type="number"
            name="CompanyA_shares"
            value={this.props.EquityFormData.CompanyA_shares}
            onChange={this.handleChange}
            className="form-input-1"/>

        <input
           type="number"
           name="CompanyB_shares"
           value={this.props.EquityFormData.CompanyB_shares}
           onChange={this.handleChange}
           className="form-input-2"/>

       <label className="form-label">Annual Dividend</label>

       <input
          type="number"
          name="CompanyA_dividend"
          value={this.props.EquityFormData.CompanyA_dividend}
          onChange={this.handleChange}
          className="form-input-1"/>

      <input
         type="number"
         name="CompanyB_dividend"
         value={this.props.EquityFormData.CompanyB_dividend}
         onChange={this.handleChange}
         className="form-input-2"/>

        <input
          type="submit"
          value="Save Equity Info"
          className="form-input-1" />
      </form>
    </div>
   </div>
   )
 }
}

export default connect (state => {return {EquityFormData: state.EquityFormData, modelData: state.modelData }}, { updateEquityForm, resetEquityInfo, newEquityInfo })(EquityForm);
