import React from 'react'
import { connect } from "react-redux";
import { updateBasicInfoForm, setBasicInfo } from '../actions'

class BasicInfoForm extends React.Component {

 handleChange = (e) => {
   console.log(e.target.value)
   this.props.updateBasicInfoForm({
       ProjectId: this.props.ProjectId,
       CompanyA_ticker: this.props.CompanyA_ticker,
       CompanyB_ticker: this.props.CompanyB_ticker,
       CompanyA_codename: this.props.CompanyA_codename,
       CompanyB_codename: this.props.CompanyB_codename,
       CompanyA_acquiror: this.props.CompanyA_acquiror,
       [e.target.name]: e.target.value,
       CompanyA_acquiror: e.target.checked
   })
 }

 handleSubmit = (e) => {
   e.preventDefault();
   this.props.setBasicInfo({
     basicInfoData: {
     ProjectId: this.props.ProjectId,
     CompanyA_ticker: this.props.CompanyA_ticker,
     CompanyB_ticker: this.props.CompanyB_ticker,
     CompanyA_codename: this.props.CompanyA_codename,
     CompanyB_codename: this.props.CompanyB_codename,
     CompanyA_acquiror: this.props.CompanyA_acquiror
   }
   });
   this.props.updateBasicInfoForm({
     ProjectId: '',
     CompanyA_ticker: '',
     CompanyB_ticker: '',
     CompanyA_codename: '',
     CompanyB_codename: '',
     CompanyA_acquiror: false,
   })
 }

 render() {
   return (
     <div className="form">
        <h3>Model Starting Point</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="three-columns-form">
        <label className="form-input-1">Company A</label>
        <label className="form-input-2">Company B</label>
       <label className="form-label">Company Tickers:</label>
       <input
          type="text"
          name="CompanyA_ticker"
          value={this.props.CompanyA_ticker}
          onChange={this.handleChange}
          placeholder="ticker"
          className="form-input-1" />

      <input
         type="text"
         name="CompanyB_ticker"
         value={this.props.CompanyB_ticker}
         onChange={this.handleChange}
         placeholder="ticker"
         className="form-input-2" />

      <label className="form-label">Model Code Names:</label>
         <input
            type="text"
            name="CompanyA_codename"
            value={this.props.CompanyA_codename}
            onChange={this.handleChange}
            placeholder="code name"
            className="form-input-1"/>

        <input
           type="text"
           name="CompanyB_codename"
           value={this.props.CompanyB_codename}
           onChange={this.handleChange}
           placeholder="code name"
           className="form-input-2"/>

       <label className="form-label">Company A Acquiror?</label>
        <input
           type="checkbox"
           name="CompanyA_acquiror"
           value={this.props.CompanyA_acquiror}
           onChange={this.handleChange}
           className="form-input-1"/> <br/>
        <input
          type="submit"
          value="Let's Get Started"
          className="form-input-1" />
      </form>
    </div>
   </div>
   )
 }
}

export default connect (state => ({ ...state.BasicInfoFormData }), { updateBasicInfoForm, setBasicInfo })(BasicInfoForm);
