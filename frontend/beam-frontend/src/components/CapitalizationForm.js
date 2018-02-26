import React from 'react'
import { connect } from "react-redux";
import { updateCapitalizationForm, setCapitalizationInfo } from '../actions'


class CapitalizationForm extends React.Component {

 handleChange = (e) => {
   this.props.updateCapitalizationForm({
    [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
  })
 }


 handleSubmit = (e) => {
   e.preventDefault();
   const form  = this.props.CapitalizationFormData
   this.props.setCapitalizationInfo({
     capitalizationInfoData: {
     CompanyA_cash: form.CompanyA_cash,
     CompanyA_use: form.CompanyA_cash_use,
     CompanyA_cash_rate:form.CompanyA_cash_rate,
     CompanyB_cash: form.CompanyB_cash,
     CompanyB_cash_use: form.CompanyB_cash_use,
     CompanyB_cash_rate: form.CompanyB_cash_rate,

     CompanyA_otherLiquidAssets: form.CompanyA_otherLiquidAssets,
     CompanyA_otherLiquidAssets_use: form.CompanyA_otherLiquidAssets_use,
     CompanyA_otherLiquidAssets_rate: form.CompanyA_otherLiquidAssets_rate,
     CompanyB_otherLiquidAssets: form.CompanyB_otherLiquidAssets,
     CompanyB_otherLiquidAssets_use: form.CompanyB_otherLiquidAssets_use,
     CompanyB_otherLiquidAssets_rate: form.CompanyB_otherLiquidAssets_rate,

     CompanyA_mortgageDebt: form.CompanyA_mortgageDebt,
     CompanyA_mortgageDebt_repay: form.CompanyA_mortgageDebt_repay,
     CompanyA_mortgageDebt_rate: form.CompanyA_mortgageDebt_rate,
     CompanyB_mortgageDebt: form.CompanyB_mortgageDebt,
     CompanyB_mortgageDebt_repay: form.CompanyB_mortgageDebt_repay,
     CompanyB_mortgageDebt_rate: form.CompanyB_mortgageDebt_rate,

     CompanyA_shareOfJVDebt: form.CompanyA_shareOfJVDebt,
     CompanyA_shareOfJVDebt_repay: form.CompanyA_shareOfJVDebt_repay,
     CompanyA_shareOfJVDebt_rate: form.CompanyA_shareOfJVDebt_rate,
     CompanyB_shareOfJVDebt: form.CompanyB_shareOfJVDebt,
     CompanyB_shareOfJVDebt_repay: form.CompanyB_shareOfJVDebt_repay,
     CompanyB_shareOfJVDebt_rate: form.CompanyB_shareOfJVDebt_rate,

     CompanyA_bonds: form.CompanyA_bonds,
     CompanyA_bonds_repay: form.CompanyA_bonds_repay,
     CompanyA_bonds_rate: form.CompanyA_bonds_rate,
     CompanyB_bonds: form.CompanyB_bonds,
     CompanyB_bonds_repay: form.CompanyB_bonds_repay,
     CompanyB_bonds_rate: form.CompanyB_bonds_rate,

     CompanyA_creditFacility: form.CompanyA_creditFacility,
     CompanyA_creditFacility_repay: form.CompanyA_creditFacility_repay,
     CompanyA_creditFacility_rate: form.CompanyA_creditFacility_rate,
     CompanyB_creditFacility: form.CompanyB_creditFacility,
     CompanyB_creditFacility_repay: form.CompanyB_creditFacility_repay,
     CompanyB_creditFacility_rate: form.CompanyB_creditFacility_rate,

     CompanyA_mezzDebt: form.CompanyA_mezzDebt,
     CompanyA_mezzDebt_repay: form.CompanyA_mezzDebt_repay,
     CompanyA_mezzDebt_rate: form.CompanyA_mezzDebt_rate,
     CompanyB_mezzDebt: form.CompanyB_mezzDebt,
     CompanyB_mezzDebt_repay: form.CompanyB_mezzDebt_repay,
     CompanyB_mezzDebt_rate: form.CompanyB_mezzDebt_rate,

     CompanyA_preferredEquity: form.CompanyA_preferredEquity,
     CompanyA_preferredEquity_repay: form.CompanyA_preferredEquity_repay,
     CompanyA_preferredEquity_rate: form.CompanyA_preferredEquity_rate,
     CompanyB_preferredEquity: form.CompanyB_preferredEquity,
     CompanyB_preferredEquity_repay: form.CompanyB_preferredEquity_repay,
     CompanyB_preferredEquity_rate: form.CompanyB_preferredEquity_rate,
   }
   });
   this.props.updateCapitalizationForm({
     CompanyA_cash: '',
     CompanyA_cash_use: false,
     CompanyA_cash_rate: '',
     CompanyB_cash: '',
     CompanyB_cash_use: false,
     CompanyB_cash_rate: '',

     CompanyA_otherLiquidAssets: '',
     CompanyA_otherLiquidAssets_use: false,
     CompanyA_otherLiquidAssets_rate: '',
     CompanyB_otherLiquidAssets: '',
     CompanyB_otherLiquidAssets_use: false,
     CompanyB_otherLiquidAssets_rate: '',

     CompanyA_mortgageDebt: '',
     CompanyA_mortgageDebt_repay: false,
     CompanyA_mortgageDebt_rate: '',
     CompanyB_mortgageDebt: '',
     CompanyB_mortgageDebt_repay: false,
     CompanyB_mortgageDebt_rate: '',

     CompanyA_shareOfJVDebt: '',
     CompanyA_shareOfJVDebt_repay: false,
     CompanyA_shareOfJVDebt_rate: '',
     CompanyB_shareOfJVDebt: '',
     CompanyB_shareOfJVDebt_repay: false,
     CompanyB_shareOfJVDebt_rate: '',

     CompanyA_bonds: '',
     CompanyA_bonds_repay: false,
     CompanyA_bonds_rate: '',
     CompanyB_bonds: '',
     CompanyB_bonds_repay: false,
     CompanyB_bonds_rate: '',

     CompanyA_creditFacility: '',
     CompanyA_creditFacility_repay: false,
     CompanyA_creditFacility_rate: '',
     CompanyB_creditFacility: '',
     CompanyB_creditFacility_repay: false,
     CompanyB_creditFacility_rate: '',

     CompanyA_mezzDebt: '',
     CompanyA_mezzDebt_repay: false,
     CompanyA_mezzDebt_rate: '',
     CompanyB_mezzDebt: '',
     CompanyB_mezzDebt_repay: false,
     CompanyB_mezzDebt_rate: '',

     CompanyA_preferredEquity: '',
     CompanyA_preferredEquity_repay: false,
     CompanyA_preferredEquity_rate: '',
     CompanyB_preferredEquity: '',
     CompanyB_preferredEquity_repay: false,
     CompanyB_preferredEquity_rate: ''
   })
   this.props.next()
 }

 render() {
   return (
     <div className="form">
        <h3>Capitalization Inputs</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="seven-columns-form">
       {this.props.modelData.basicInfoData ?
        <label className="form-input-1">
        {this.props.modelData.basicInfoData.CompanyA_codename} </label>

         :
        <label className="form-input-1">Company A</label> }
         <label className="form-input-2">Repay?</label>
         <label className="form-input-3">Rate</label>
        {this.props.modelData.basicInfoData ?
         <label className="form-input-4">
         {this.props.modelData.basicInfoData.CompanyB_codename} </label>

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

export default connect (state => {return {CapitalizationFormData: state.CapitalizationFormData, modelData: state.modelData }}, { updateCapitalizationForm, setCapitalizationInfo })(CapitalizationForm);


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
