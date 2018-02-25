import React from 'react'
import { connect } from "react-redux";
import { updateEquityForm, setEquityInfo } from '../actions'


class EquityForm extends React.Component {

 handleChange = (e) => {
   this.props.updateEquityForm({
       [e.target.name]: e.target.value
   })
 }

 handleSubmit = (e) => {
   e.preventDefault();
   this.props.setEquityInfo({
     equityInfoData: {
     CompanyA_currentSharePrice: this.props.EquityFormData.CompanyA_currentSharePrice,
     CompanyB_currentSharePrice: this.props.EquityFormData.CompanyB_currentSharePrice,
     CompanyA_shares: this.props.EquityFormData.CompanyA_shares,
     CompanyB_shares: this.props.EquityFormData.CompanyB_shares,
     CompanyA_dividend: this.props.EquityFormData.CompanyA_dividend,
     CompanyB_dividend: this.props.EquityFormData.CompanyB_dividend
   }
   });
   this.props.updateEquityForm({
     CompanyA_currentSharePrice: '',
     CompanyB_currentSharePrice: '',
     CompanyA_shares: '',
     CompanyB_shares: '',
     CompanyA_dividend: '',
     CompanyB_dividend: ''
   })
 }

 render() {
   return (
     <div className="form">
        <h3>Equity Info</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="three-columns-form">
       {this.props.modelData.basicInfoData ?
        <label className="form-input-1">
        {this.props.modelData.basicInfoData.CompanyA_codename} </label>

         :
        <label className="form-input-1">Company A</label> }

        {this.props.modelData.basicInfoData ?
         <label className="form-input-2">
         {this.props.modelData.basicInfoData.CompanyB_codename} </label>

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

export default connect (state => {return {EquityFormData: state.EquityFormData, modelData: state.modelData }}, { updateEquityForm, setEquityInfo })(EquityForm);
