import React from 'react'
import { connect } from "react-redux";
import { updateCapitalizationForm, resetCapitalizationInfo, newCapitalizationInfo } from '../actions'
import { Form } from 'semantic-ui-react'

class CapitalizationForm extends React.Component {

 handleChange = (e) => {
   this.props.updateCapitalizationForm({
    [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
  })
 }

 handleDataSave = (data) =>{
   for (let i = 0; i< data.length; i++){
     if (data[i].id !== "") {
     this.props.resetCapitalizationInfo(data[i])
   } else {
     this.props.newCapitalizationInfo(data[i])
   }
  }
 }


 handleSubmit = (e) => {
   e.preventDefault();
   const form  = this.props.CapitalizationFormData
   let info =  [
       {
         id: form.CompanyA_cash_id,
         model_id: this.props.modelData.id,
         company: "A",
         item_name: "cash_and_equivalents",
         item_type: "cash",
         amount: form.CompanyA_cash || 0,
         repay: form.CompanyA_cash_use || false,
         rate: form.CompanyA_cash_rate || 0,
       },
       {
         id: form.CompanyB_cash_id,
         model_id: this.props.modelData.id,
         company: "B",
         item_name: "cash_and_equivalents",
         item_type: "cash",
         amount: form.CompanyB_cash || 0,
         repay: form.CompanyB_cash_use || false ,
         rate: form.CompanyB_cash_rate || 0,
       },
       {
         id: form.CompanyA_otherLiquidAssets_id,
         model_id: this.props.modelData.id,
         company: "A",
         item_name: "other_liquid_assets",
         item_type: "cash",
         amount: form.CompanyA_otherLiquidAssets || 0,
         repay: form.CompanyA_otherLiquidAssets_use || false ,
         rate: form.CompanyA_otherLiquidAssets_rate || 0,
       },
       {
         id: form.CompanyB_otherLiquidAssets_id,
         model_id: this.props.modelData.id,
         company: "B",
         item_name: "other_liquid_assets",
         item_type: "cash",
         amount: form.CompanyB_otherLiquidAssets || 0,
         repay: form.CompanyB_otherLiquidAssets_use || false ,
         rate: form.CompanyB_otherLiquidAssets_rate || 0,
       },
       {
         id: form.CompanyA_mortgageDebt_id,
         model_id: this.props.modelData.id,
         company: "A",
         item_name: "mortgage_debt",
         item_type: "debt",
         amount: form.CompanyA_mortgageDebt || 0,
         repay: form.CompanyA_mortgageDebt_repay || false ,
         rate: form.CompanyA_mortgageDebt_rate || 0,
       },
       {
         id: form.CompanyB_mortgageDebt_id,
         model_id: this.props.modelData.id,
         company: "B",
         item_name: "mortgage_debt",
         item_type: "debt",
         amount: form.CompanyB_mortgageDebt || 0,
         repay: form.CompanyB_mortgageDebt_repay || false ,
         rate: form.CompanyB_mortgageDebt_rate || 0,
       },
       {
         id: form.CompanyA_shareOfJVDebt_id,
         model_id: this.props.modelData.id,
         company: "A",
         item_name: "share_JV_debt",
         item_type: "debt",
         amount: form.CompanyA_shareOfJVDebt || 0,
         repay: form.CompanyA_shareOfJVDebt_repay || false ,
         rate: form.CompanyA_shareOfJVDebt_rate || 0,
       },
       {
         id: form.CompanyB_shareOfJVDebt_id,
         model_id: this.props.modelData.id,
         company: "B",
         item_name: "share_JV_debt",
         item_type: "debt",
         amount: form.CompanyB_shareOfJVDebt || 0,
         repay: form.CompanyB_shareOfJVDebt_repay || false ,
         rate: form.CompanyB_shareOfJVDebt_rate || 0,
       },
       {
         id: form.CompanyA_bonds_id,
         model_id: this.props.modelData.id,
         company: "A",
         item_name: "bonds",
         item_type: "debt",
         amount: form.CompanyA_bonds || 0,
         repay: form.CompanyA_bonds_repay || false,
         rate: form.CompanyA_bonds_rate || 0,
       },
       {
         id: form.CompanyB_bonds_id,
         model_id: this.props.modelData.id,
         company: "B",
         item_name: "bonds",
         item_type: "debt",
         amount: form.CompanyB_bonds || 0,
         repay: form.CompanyB_bonds_repay || false ,
         rate: form.CompanyB_bonds_rate || 0,
       },
       {
         id: form.CompanyA_creditFacility_id,
         model_id: this.props.modelData.id,
         company: "A",
         item_name: "credit_facility",
         item_type: "debt",
         amount: form.CompanyA_creditFacility || 0,
         repay: form.CompanyA_creditFacility_repay || false,
         rate: form.CompanyA_creditFacility_rate || 0,
       },
       {
         id: form.CompanyB_creditFacility_id,
         model_id: this.props.modelData.id,
         company: "B",
         item_name: "credit_facility",
         item_type: "debt",
         amount: form.CompanyB_creditFacility || 0,
         repay: form.CompanyB_creditFacility_repay || false,
         rate: form.CompanyB_creditFacility_rate || 0,
       },
       {
         id: form.CompanyA_mezzDebt_id,
         model_id: this.props.modelData.id,
         company: "A",
         item_name: "mezz_debt",
         item_type: "debt",
         amount: form.CompanyA_mezzDebt || 0,
         repay: form.CompanyA_mezzDebt_repay || false,
         rate: form.CompanyA_mezzDebt_rate || 0,
       },
       {
         id: form.CompanyB_mezzDebt_id,
         model_id: this.props.modelData.id,
         company: "B",
         item_name: "mezz_debt",
         item_type: "debt",
         amount: form.CompanyB_mezzDebt || 0,
         repay: form.CompanyB_mezzDebt_repay || false,
         rate: form.CompanyB_mezzDebt_rate || 0,
       },
       {
         id: form.CompanyA_preferredEquity_id,
         model_id: this.props.modelData.id,
         company: "A",
         item_name: "preferred_equity",
         item_type: "preferred",
         amount: form.CompanyA_preferredEquity || 0,
         repay: form.CompanyA_preferredEquity_repay || false,
         rate: form.CompanyA_preferredEquity_rate || 0,
       },
       {
         id: form.CompanyB_preferredEquity_id,
         model_id: this.props.modelData.id,
         company: "B",
         item_name: "preferred_equity",
         item_type: "preferred",
         amount: form.CompanyB_preferredEquity || 0,
         repay: form.CompanyB_preferredEquity_repay || false,
         rate: form.CompanyB_preferredEquity_rate || 0,
       },
     ];
   this.handleDataSave(info)
   this.props.next()
 }

 render() {
   return (
     <div className="form">
      <i onClick={this.props.exit} className="window close outline icon large grey"></i>
        <h3>Capitalization Inputs</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="seven-columns-form">
       {this.props.modelData.basic_info_datum &&
         this.props.modelData.basic_info_datum.legnth > 0  ?
        <label className="form-input-1">
        {this.props.modelData.basic_info_datum[0].codename} </label>

         :
        <label className="form-input-1">Company A</label> }
         <label className="form-input-2">Repay?</label>
         <label className="form-input-3">Rate</label>
        {this.props.modelData.basic_info_datum &&
          this.props.modelData.basic_info_datum.legnth > 0 ?
         <label className="form-input-4">
         {this.props.modelData.basic_info_datum[1].codename} </label>

          :
         <label className="form-input-4">Company B</label> }
         <label className="form-input-5">Repay?</label>
         <label className="form-input-6">Rate</label>
       <label className="form-label">Cash and Cash Equivalents:</label>
       <input
          type="number"
          name="CompanyA_cash"
          value={this.props.CapitalizationFormData.CompanyA_cash}
          onChange={this.handleChange}
          className="form-input-1" />

        <input
           type="checkbox"
           name="CompanyA_cash_use"
           value={this.props.CapitalizationFormData.CompanyA_cash_use}
           onChange={this.handleChange}
           checked={this.props.CapitalizationFormData.CompanyA_cash_use===true}
           className="form-input-2"/>

           { this.props.CapitalizationFormData.CompanyA_cash_use===true ?
         <input
            type="number"
            min='0'
            max='1'
            step='.0001'
            name="CompanyA_cash_rate"
            value={this.props.CapitalizationFormData.CompanyA_cash_rate}
            onChange={this.handleChange}
            className="form-input-3"/> :
            null
           }


      <input
         type="number"
         name="CompanyB_cash"
         value={this.props.CapitalizationFormData.CompanyB_cash}
         onChange={this.handleChange}
         className="form-input-4" />


     <input
        type="checkbox"
        name="CompanyB_cash_use"
        value={this.props.CapitalizationFormData.CompanyB_cash_use}
        onChange={this.handleChange}
        checked={this.props.CapitalizationFormData.CompanyB_cash_use===true}
        className="form-input-5"/>

      { this.props.CapitalizationFormData.CompanyB_cash_use===true ?
      <input
         type="number"
         min='0'
         max='1'
         step='.0001'
         name="CompanyB_cash_rate"
         value={this.props.CapitalizationFormData.CompanyB_cash_rate}
         onChange={this.handleChange}
         className="form-input-6"/> :
         null
     }



       <label className="form-label">Other Liquid Assets:</label>
       <input
          type="number"
          name="CompanyA_otherLiquidAssets"
          value={this.props.CapitalizationFormData.CompanyA_otherLiquidAssets}
          onChange={this.handleChange}
          className="form-input-1" />

      <input
         type="checkbox"
         name="CompanyA_otherLiquidAssets_use"
         value={this.props.CapitalizationFormData.CompanyA_otherLiquidAssets_use}
         onChange={this.handleChange}
         checked={this.props.CapitalizationFormData.CompanyA_otherLiquidAssets_use===true}
         className="form-input-2"/>

     { this.props.CapitalizationFormData.CompanyA_otherLiquidAssets_use===true ?
       <input
          type="number"
          min='0'
          max='1'
          step='.0001'
          name="CompanyA_otherLiquidAssets_rate"
          value={this.props.CapitalizationFormData.CompanyA_otherLiquidAssets_rate}
          onChange={this.handleChange}
          className="form-input-3"/> :
          null
      }


      <input
         type="number"
         name="CompanyB_otherLiquidAssets"
         value={this.props.CapitalizationFormData.CompanyB_otherLiquidAssets}
         onChange={this.handleChange}
         className="form-input-4" />

       <input
          type="checkbox"
          name="CompanyB_otherLiquidAssets_use"
          value={this.props.CapitalizationFormData.CompanyB_otherLiquidAssets_use}
          onChange={this.handleChange}
          checked={this.props.CapitalizationFormData.CompanyB_otherLiquidAssets_use===true}
          className="form-input-5"/>

       { this.props.CapitalizationFormData.CompanyB_otherLiquidAssets_use===true ?
      <input
         type="number"
         min='0'
         max='1'
         step='.0001'
         name="CompanyB_otherLiquidAssets_rate"
         value={this.props.CapitalizationFormData.CompanyB_otherLiquidAssets_rate}
         onChange={this.handleChange}
         className="form-input-6"/>
         :
         null
       }



       <label className="form-label">Mortgage Debt:</label>
       <input
          type="number"
          name="CompanyA_mortgageDebt"
          value={this.props.CapitalizationFormData.CompanyA_mortgageDebt}
          onChange={this.handleChange}
          className="form-input-1" />

        <input
           type="checkbox"
           name="CompanyA_mortgageDebt_repay"
           value={this.props.CapitalizationFormData.CompanyA_mortgageDebt_repay}
           onChange={this.handleChange}
           checked={this.props.CapitalizationFormData.CompanyA_mortgageDebt_repay===true}
           className="form-input-2"/>

        { this.props.CapitalizationFormData.CompanyA_mortgageDebt_repay===true ?
       <input
          type="number"
          min='0'
          max='1'
          step='.0001'
          name="CompanyA_mortgageDebt_rate"
          value={this.props.CapitalizationFormData.CompanyA_mortgageDebt_rate}
          onChange={this.handleChange}
          className="form-input-3"/>
          :
          null
        }

      <input
         type="number"
         name="CompanyB_mortgageDebt"
         value={this.props.CapitalizationFormData.CompanyB_mortgageDebt}
         onChange={this.handleChange}
         className="form-input-4" />

       <input
          type="checkbox"
          name="CompanyB_mortgageDebt_repay"
          value={this.props.CapitalizationFormData.CompanyB_mortgageDebt_repay}
          onChange={this.handleChange}
          checked={this.props.CapitalizationFormData.CompanyB_mortgageDebt_repay===true}
          className="form-input-5"/>

       { this.props.CapitalizationFormData.CompanyB_mortgageDebt_repay===true ?
       <input
         type="number"
         min='0'
         max='1'
         step='.0001'
         name="CompanyB_mortgageDebt_rate"
         value={this.props.CapitalizationFormData.CompanyB_mortgageDebt_rate}
         onChange={this.handleChange}
         className="form-input-6"/>
         :
         null
       }


     <label className="form-label">Share of JV Debt:</label>
     <input
        type="number"
        name="CompanyA_shareOfJVDebt"
        value={this.props.CapitalizationFormData.CompanyA_shareOfJVDebt}
        onChange={this.handleChange}
        className="form-input-1" />

      <input
         type="checkbox"
         name="CompanyA_shareOfJVDebt_repay"
         value={this.props.CapitalizationFormData.CompanyA_shareOfJVDebt_repay}
         onChange={this.handleChange}
         checked={this.props.CapitalizationFormData.CompanyA_shareOfJVDebt_repay===true}
         className="form-input-2"/>

      { this.props.CapitalizationFormData.CompanyA_shareOfJVDebt_repay===true ?
     <input
        type="number"
        min='0'
        max='1'
        step='.0001'
        name="CompanyA_shareOfJVDebt_rate"
        value={this.props.CapitalizationFormData.CompanyA_shareOfJVDebt_rate}
        onChange={this.handleChange}
        className="form-input-3"/>
        :
        null
      }

    <input
       type="number"
       name="CompanyB_shareOfJVDebt"
       value={this.props.CapitalizationFormData.CompanyB_shareOfJVDebt}
       onChange={this.handleChange}
       className="form-input-4" />

     <input
        type="checkbox"
        name="CompanyB_shareOfJVDebt_repay"
        value={this.props.CapitalizationFormData.CompanyB_shareOfJVDebt_repay}
        onChange={this.handleChange}
        checked={this.props.CapitalizationFormData.CompanyB_shareOfJVDebt_repay===true}
        className="form-input-5"/>

     { this.props.CapitalizationFormData.CompanyB_shareOfJVDebt_repay===true ?
     <input
       type="number"
       min='0'
       max='1'
       step='.0001'
       name="CompanyB_shareOfJVDebt_rate"
       value={this.props.CapitalizationFormData.CompanyB_shareOfJVDebt_rate}
       onChange={this.handleChange}
       className="form-input-6"/>
       :
       null
     }

       <label className="form-label">Bonds:</label>
       <input
          type="number"
          name="CompanyA_bonds"
          value={this.props.CapitalizationFormData.CompanyA_bonds}
          onChange={this.handleChange}
          className="form-input-1" />

        <input
           type="checkbox"
           name="CompanyA_bonds_repay"
           value={this.props.CapitalizationFormData.CompanyA_bonds_repay}
           onChange={this.handleChange}
           checked={this.props.CapitalizationFormData.CompanyA_bonds_repay===true}
           className="form-input-2"/>

        { this.props.CapitalizationFormData.CompanyA_bonds_repay===true ?
       <input
          type="number"
          min='0'
          max='1'
          step='.0001'
          name="CompanyA_bonds_rate"
          value={this.props.CapitalizationFormData.CompanyA_bonds_rate}
          onChange={this.handleChange}
          className="form-input-3"/>
          :
          null
        }


      <input
         type="number"
         name="CompanyB_bonds"
         value={this.props.CapitalizationFormData.CompanyB_bonds}
         onChange={this.handleChange}
         className="form-input-4" />

     <input
        type="checkbox"
        name="CompanyB_bonds_repay"
        value={this.props.CapitalizationFormData.CompanyB_bonds_repay}
        onChange={this.handleChange}
        checked={this.props.CapitalizationFormData.CompanyB_bonds_repay===true}
        className="form-input-5"/>

     { this.props.CapitalizationFormData.CompanyB_bonds_repay===true ?
     <input
       type="number"
       min='0'
       max='1'
       step='.0001'
       name="CompanyB_bonds_rate"
       value={this.props.CapitalizationFormData.CompanyB_bonds_rate}
       onChange={this.handleChange}
       className="form-input-6"/>
       :
       null
     }

       <label className="form-label">Credit Facility:</label>
       <input
          type="number"
          name="CompanyA_creditFacility"
          value={this.props.CapitalizationFormData.CompanyA_creditFacility}
          onChange={this.handleChange}
          className="form-input-1" />
      <input
         type="checkbox"
         name="CompanyA_creditFacility_repay"
         value={this.props.CapitalizationFormData.CompanyA_creditFacility_repay}
         onChange={this.handleChange}
         checked={this.props.CapitalizationFormData.CompanyA_creditFacility_repay===true}
         className="form-input-2"/>

      { this.props.CapitalizationFormData.CompanyA_creditFacility_repay===true ?
     <input
        type="number"
        min='0'
        max='1'
        step='.0001'
        name="CompanyA_creditFacility_rate"
        value={this.props.CapitalizationFormData.CompanyA_creditFacility_rate}
        onChange={this.handleChange}
        className="form-input-3"/>
        :
        null
      }

      <input
         type="number"
         name="CompanyB_creditFacility"
         value={this.props.CapitalizationFormData.CompanyB_creditFacility}
         onChange={this.handleChange}
         className="form-input-4" />

       <input
          type="checkbox"
          name="CompanyB_creditFacility_repay"
          value={this.props.CapitalizationFormData.CompanyB_creditFacility_repay}
          onChange={this.handleChange}
          checked={this.props.CapitalizationFormData.CompanyB_creditFacility_repay===true}
          className="form-input-5"/>

       { this.props.CapitalizationFormData.CompanyB_creditFacility_repay===true ?
       <input
         type="number"
         min='0'
         max='1'
         step='.0001'
         name="CompanyB_creditFacility_rate"
         value={this.props.CapitalizationFormData.CompanyB_creditFacility_rate}
         onChange={this.handleChange}
         className="form-input-6"/>
         :
         null
       }


       <label className="form-label">Mezzanine Debt:</label>
       <input
          type="number"
          name="CompanyA_mezzDebt"
          value={this.props.CapitalizationFormData.CompanyA_mezzDebt}
          onChange={this.handleChange}
          className="form-input-1" />

        <input
           type="checkbox"
           name="CompanyA_mezzDebt_repay"
           value={this.props.CapitalizationFormData.CompanyA_mezzDebt_repay}
           onChange={this.handleChange}
           checked={this.props.CapitalizationFormData.CompanyA_mezzDebt_repay===true}
           className="form-input-2"/>

        { this.props.CapitalizationFormData.CompanyA_mezzDebt_repay===true ?
       <input
          type="number"
          min='0'
          max='1'
          step='.0001'
          name="CompanyA_mezzDebt_rate"
          value={this.props.CapitalizationFormData.CompanyA_mezzDebt_rate}
          onChange={this.handleChange}
          className="form-input-3"/>
          :
          null
        }

       <input
         type="number"
         name="CompanyB_mezzDebt"
         value={this.props.CapitalizationFormData.CompanyB_mezzDebt}
         onChange={this.handleChange}
         className="form-input-4" />

       <input
          type="checkbox"
          name="CompanyB_mezzDebt_repay"
          value={this.props.CapitalizationFormData.CompanyB_mezzDebt_repay}
          onChange={this.handleChange}
          checked={this.props.CapitalizationFormData.CompanyB_mezzDebt_repay===true}
          className="form-input-5"/>

       { this.props.CapitalizationFormData.CompanyB_mezzDebt_repay===true ?
       <input
         type="number"
         min='0'
         max='1'
         step='.0001'
         name="CompanyB_mezzDebt_rate"
         value={this.props.CapitalizationFormData.CompanyB_mezzDebt_rate}
         onChange={this.handleChange}
         className="form-input-6"/>
         :
         null
       }

       <label className="form-label">Preferred Equity:</label>
       <input
          type="number"
          name="CompanyA_preferredEquity"
          value={this.props.CapitalizationFormData.CompanyA_preferredEquity}
          onChange={this.handleChange}
          className="form-input-1" />

      <input
         type="checkbox"
         name="CompanyA_preferredEquity_repay"
         value={this.props.CapitalizationFormData.CompanyA_preferredEquity_repay}
         onChange={this.handleChange}
         checked={this.props.CapitalizationFormData.CompanyA_preferredEquity_repay===true}
         className="form-input-2"/>

      { this.props.CapitalizationFormData.CompanyA_preferredEquity_repay===true ?
     <input
        type="number"
        min='0'
        max='1'
        step='.0001'
        name="CompanyA_preferredEquity_rate"
        value={this.props.CapitalizationFormData.CompanyA_preferredEquity_rate}
        onChange={this.handleChange}
        className="form-input-3"/>
        :
        null
      }

       <input
         type="number"
         name="CompanyB_preferredEquity"
         value={this.props.CapitalizationFormData.CompanyB_preferredEquity}
         onChange={this.handleChange}
         className="form-input-4" />

       <input
          type="checkbox"
          name="CompanyB_preferredEquity_repay"
          value={this.props.CapitalizationFormData.CompanyB_preferredEquity_repay}
          onChange={this.handleChange}
          checked={this.props.CapitalizationFormData.CompanyB_preferredEquity_repay===true}
          className="form-input-5"/>

       { this.props.CapitalizationFormData.CompanyB_preferredEquity_repay===true ?
       <input
         type="number"
         min='0'
         max='1'
         step='.0001'
         name="CompanyB_preferredEquity_rate"
         value={this.props.CapitalizationFormData.CompanyB_preferredEquity_rate}
         onChange={this.handleChange}
         className="form-input-6"/>
         :
         null
       }

        <input
          type="submit"
          value="Save Capitalization Info"
          className="form-input-submit" />
      </form>
    </div>
   </div>
   )
 }
}

export default connect (state => {return {CapitalizationFormData: state.CapitalizationFormData, modelData: state.modelData }}, { updateCapitalizationForm, resetCapitalizationInfo, newCapitalizationInfo })(CapitalizationForm);


//
// CompanyA_cash: {amount: '', use: false, rate: ''},
// CompanyB_cash: {amount: '', use: false, rate: ''},
// CompanyA_otherLiquidAssets: {amount: '', use: false, rate: ''},
// CompanyB_otherLiquidAssets: {amount: '', use: false, rate: ''},
// CompanyA_mortgageDebt: {amount: '', repay: false, rate: ''},
// CompanyB_mortgageDebt: {amount: '', repay: false, rate: ''},
// CompanyA_shareOfJVDebt: {amount: '', repay: false, rate: ''},
// CompanyB_shareOfJVDebt: {amount: '', repay: false, rate: ''},
// CompanyA_bonds: {amount: '', repay: false, rate: ''},
// CompanyB_bonds: {amount: '', repay: false, rate: ''},
// CompanyA_creditFacility: {amount: '', repay: false, rate: ''},
// CompanyB_creditFacility: {amount: '', repay: false, rate: ''},
// CompanyA_mezzDebt: {amount: '', repay: false, rate: ''},
// CompanyB_mezzDebt: {amount: '', repay: false, rate: ''},
// CompanyA_preferredEquity: {amount: '', repay: false, rate: ''},
// CompanyB_preferredEquity: {amount: '', repay: false, rate: ''}



// handleChange = (e) => {
//   this.props.updateCapitalizationForm({
//    [e.target.name.split(".")[0]]: {[e.target.name.split(".")[1]]: e.target.type === 'checkbox' ? e.target.checked : e.target.value}
//  })
// }
