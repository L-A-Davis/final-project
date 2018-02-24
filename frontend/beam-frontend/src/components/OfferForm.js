import React from 'react'
import { connect } from "react-redux";
import { updateOfferForm, setOfferInfo } from '../actions'

class OfferForm extends React.Component {

  handleChange = (e) => {
    console.log(e.target.value)
    this.props.updateOfferForm({
        OfferType: this.props.OfferFormData.OfferType,
        OfferMetric: this.props.OfferFormData.OfferMetric,
        Percentage_Stock: this.props.OfferFormData.Percentage_Stock,
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setOfferInfo({
     offerInfoData: {
      OfferType: this.props.OfferFormData.OfferType,
      OfferMetric: this.props.OfferFormData.OfferMetric,
      Percentage_Stock: this.props.OfferFormData.Percentage_Stock
    }
    })
    ;
    this.props.updateOfferForm({
      OfferType: '',
      OfferMetric: '',
      Percentage_Stock: '',
    })
  }

  impliedExchangeRatio = (a, b) => {
    let a_num = parseInt(a)
    let b_num = parseInt(b)
    let answer = (b_num / a_num)
    if (answer) {
      return answer
    } else {
      return "NA"
    }
  }

render() {
  const { equityInfoData, basicInfoData } = { ...this.props.modelData }
  return (
    <div className="form">
    {equityInfoData ?
        <div>
       <h3>Offer Support</h3>

         <table>
         <thead>
         <tr>
            <th></th>
            <th>Acquiror</th>
            <th>Target</th>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td>Names:</td>
            <td>{basicInfoData.CompanyA_acquiror ? basicInfoData.CompanyA_codename :
            basicInfoData.CompanyB_codename} </td>
            <td> {basicInfoData.CompanyA_acquiror ? basicInfoData.CompanyB_codename :
            basicInfoData.CompanyA_codename} </td>
         </tr>

         <tr>
            <td>Current Price:</td>
            <td>{basicInfoData.CompanyA_acquiror ? equityInfoData.CompanyA_currentSharePrice :
            equityInfoData.CompanyB_currentSharePrice } </td>
            <td> {basicInfoData.CompanyA_acquiror ? equityInfoData.CompanyB_currentSharePrice :
            equityInfoData.CompanyA_currentSharePrice } </td>
         </tr>
         <tr>
            <td>Exchange Ratio:</td>
            <td></td>
            <td>     {basicInfoData.CompanyA_acquiror ?

                  this.impliedExchangeRatio(equityInfoData.CompanyA_currentSharePrice, equityInfoData.CompanyB_currentSharePrice) :

                  this.impliedExchangeRatio(equityInfoData.CompanyB_currentSharePrice, equityInfoData.CompanyA_currentSharePrice) } </td>
         </tr>
         </tbody>
         </table>
         </div>
         : null }


       <h3>Offer Inputs</h3>
       <form onSubmit={this.handleSubmit} className="two-columns-form">
       <label className="form-label">Offer Type:</label>
       <div className="radio form-input-1">
       <label >
       <input
          type="radio"
          name="OfferType"
          value="SetAmount"
          checked={this.props.OfferFormData.OfferType==="SetAmount"}
          onClick={this.handleChange}
          className="form-input-1" />
          Set Amount
        </label>

        <label>
          <input
             type="radio"
             name="OfferType"
             value="%Premium"
             checked={this.props.OfferFormData.OfferType==="%Premium"}
             onClick={this.handleChange}
             className="form-input-1" />
          % Premium
        </label>

       <label>
         <input
            type="radio"
            name="OfferType"
            value="ExhangeRatio"
            checked={this.props.OfferFormData.OfferType==="ExhangeRatio"}
            onClick={this.handleChange}
            className="form-input-1" />
          Exchange Ratio
        </label>
       </div>

      <label className="form-label">Offer Metric:</label>

      <input
         type="text"
         name="OfferMetric"
         value={this.props.OfferFormData.OfferMetric}
         onChange={this.handleChange}
         className="form-input-1" />

         <label className="form-label">Offer % Stock:</label>

         <input
            type="number"
            min="0"
            max="1"
            step="0.01"
            name="Percentage_Stock"
            value={this.props.OfferFormData.Percentage_Stock}
            onChange={this.handleChange}
            className="form-input-1" />

            <input
              type="submit"
              value="Save Offer Inputs"
              className="form-input-1" />

       </form>
    </div>
  )
}

}

export default connect (state => {return { modelData: state.modelData, OfferFormData: state.OfferFormData }}, { updateOfferForm, setOfferInfo })(OfferForm);


// (
//  <div>
//  { basicInfoData ?
//  <p>{this.props.modelData.basicInfoData.CompanyA_ticker}</p> :
//  <p>placeholder</p>
//  }
//  </div>
// )
