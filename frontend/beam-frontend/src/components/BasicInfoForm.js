import React from 'react'
import { connect } from "react-redux";
import { updateForm, setBasicInfo } from '../actions'
import ProjectTypeSelect from './ProjectTypeSelect';

class BasicInfoForm extends React.Component {

 handleChange = (e) => {
   this.props.updateForm({
       ProjectId: this.props.ProjectId,
       CompanyA_ticker: this.props.CompanyA_ticker,
       CompanyB_ticker: this.props.CompanyB_ticker,
       CompanyA_codename: this.props.CompanyA_codename,
       CompanyB_codename: this.props.CompanyB_codename,
       CompanyA_acquiror: this.props.CompanyA_acquiror,
       [e.target.name]: e.target.value
   })
 }

 handleSubmit = (e) => {
   e.preventDefault();
   this.props.setBasicInfo({
     companiesData: {
     ProjectId: this.props.ProjectId
     CompanyA_ticker: this.props.CompanyA_ticker,
     CompanyB_ticker: this.props.CompanyB_ticker,
     CompanyA_codename: this.props.CompanyA_codename,
     CompanyB_codename: this.props.CompanyB_codename,
     CompanyA_acquiror: this.props.CompanyA_acquiror
   }
   });
   this.props.updateForm({
     ProjectId: '',
     CompanyA_ticker: '',
     CompanyB_ticker: '',
     CompanyA_codename: '',
     CompanyB_codename: '',
     CompanyA_acquiror: '',
   })
 }

 render() {
   return (
     <div className="form">
        <button onClick={this.props.exit}>X</button>
       <p>Begin a New Project </p>
       <form onSubmit={this.handleSubmit}>
       <label>Project Name: </label>
       <input
          type="text"
          name="ProjectName"
          value={this.props.ProjectName}
          onChange={this.handleChange}
          placeholder="project name" /> <br/>

       <label>Project Type: </label>
      <ProjectTypeSelect handleChange={this.handleChange}  /> <br/>

       <label>Company Tickers:</label>
       <input
          type="text"
          name="CompanyA_ticker"
          value={this.props.CompanyA_ticker}
          onChange={this.handleChange}
          placeholder="ticker" />

      <input
         type="text"
         name="CompanyB_ticker"
         value={this.props.CompanyB_ticker}
         onChange={this.handleChange}
         placeholder="ticker" /> <br/>

      <label>Model Code Names:</label>
         <input
            type="text"
            name="CompanyA_codename"
            value={this.props.CompanyA_codename}
            onChange={this.handleChange}
            placeholder="code name" />

        <input
           type="text"
           name="CompanyB_codename"
           value={this.props.CompanyB_codename}
           onChange={this.handleChange}
           placeholder="code name" /> <br/>

       <label>Acquiror?</label>
        <input
           type="checkbox"
           name="CompanyA_acquiror"
           value={this.props.CompanyA_acquiror}
           onChange={this.handleChange} /> <br/>
        <input
          type="submit"
          value="Let's Get Started" />
      </form>

   </div>
   )
 }
}

export default connect (state => ({ ...state.formData }), { updateForm, setBasicInfo })(BasicInfoForm);
