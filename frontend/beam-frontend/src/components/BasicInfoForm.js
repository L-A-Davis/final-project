import React from 'react'
import { connect } from "react-redux";
import { updateBasicInfoForm, resetBasicInfo, newBasicInfo } from '../actions'
import { Form, Segment, Grid } from 'semantic-ui-react'

class BasicInfoForm extends React.Component {

 handleChange = (e) => {
   this.props.updateBasicInfoForm({
    [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
   })
 }

 handleDataSave = (data) =>{
   for (let i = 0; i< data.length; i++){
     if (data[i].id !== "") {
     this.props.resetBasicInfo(data[i])
   } else {
     this.props.newBasicInfo(data[i])
   }
  }
 }

 handleSubmit = (e) => {
   e.preventDefault();
   const form  = this.props.BasicInfoFormData
   let info = [
   {
     id: form.CompanyA_id,
     company: "A",
     ticker: form.CompanyA_ticker,
     codename: form.CompanyA_codename,
     acquiror: form.CompanyA_acquiror,
     model_id: this.props.modelData.id},
   {
     id: form.CompanyB_id,
     company: "B",
     ticker: form.CompanyB_ticker,
     codename: form.CompanyB_codename,
     acquiror: !form.CompanyA_acquiror,
     model_id: this.props.modelData.id}
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
   <Grid.Column style={{ maxWidth: 800 }}>
     <div className="form">
     <Segment>
        <i onClick={this.props.exit} className="window close outline icon large grey"></i>
        <h3>Company Inputs</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="three-columns-form">
        <label className="form-input-1">Company A</label>
        <label className="form-input-2">Company B</label>
       <label className="form-label">Company Tickers:</label>
       <input
          type="text"
          name="CompanyA_ticker"
          value={this.props.BasicInfoFormData.CompanyA_ticker}
          onChange={this.handleChange}
          placeholder="ticker"
          className="form-input-1" />

      <input
         type="text"
         name="CompanyB_ticker"
         value={this.props.BasicInfoFormData.CompanyB_ticker}
         onChange={this.handleChange}
         placeholder="ticker"
         className="form-input-2" />

      <label className="form-label">Model Code Names:</label>
         <input
            type="text"
            name="CompanyA_codename"
            value={this.props.BasicInfoFormData.CompanyA_codename}
            onChange={this.handleChange}
            placeholder="code name"
            className="form-input-1"/>

        <input
           type="text"
           name="CompanyB_codename"
           value={this.props.BasicInfoFormData.CompanyB_codename}
           onChange={this.handleChange}
           placeholder="code name"
           className="form-input-2"/>

       <label className="form-label">Company A Acquiror?</label>
        <input
           type="checkbox"
           name="CompanyA_acquiror"
           value={this.props.BasicInfoFormData.CompanyA_acquiror}

           onChange={this.handleChange}
           checked={this.props.BasicInfoFormData.CompanyA_acquiror===true}
           className="form-input-1"/> <br/>
        <input
          type="submit"
          value="Save Basic Information"
          className="form-input-1" />
      </form>
    </div>
   </Segment>
     </div>
   </Grid.Column>
   </Grid>
   )
 }
}

export default connect (state => {return {BasicInfoFormData: state.BasicInfoFormData, modelData: state.modelData }}, { updateBasicInfoForm, resetBasicInfo, newBasicInfo })(BasicInfoForm);

//
// ProjectId: this.props.ProjectId,
// CompanyA_ticker: this.props.CompanyA_ticker,
// CompanyB_ticker: this.props.CompanyB_ticker,
// CompanyA_codename: this.props.CompanyA_codename,
// CompanyB_codename: this.props.CompanyB_codename,
// CompanyA_acquiror: this.props.CompanyA_acquiror,
 // ProjectId: this.props.modelData.ProjectId,
 //
 // this.props.updateBasicInfoForm({
 //   CompanyA_id: '',
 //   CompanyB_id: '',
 //   CompanyA_ticker: '',
 //   CompanyB_ticker: '',
 //   CompanyA_codename: '',
 //   CompanyB_codename: '',
 //   CompanyA_acquiror: false,
 // })
