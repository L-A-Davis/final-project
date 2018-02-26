import React from 'react'
import { connect } from "react-redux";
import { updateOfferForm, setOfferInfo } from '../actions'

class OfferForm extends React.Component {

  handleChange = (e) => {
    this.props.updateOfferForm({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setOfferInfo({
     offer_info_datum: [{
       model_id: this.props.modelData.id,
       offer_type: this.props.OfferFormData.OfferType,
       offer_metric: this.props.OfferFormData.OfferMetric,
       percentage_Stock: this.props.OfferFormData.Percentage_Stock
     }]
    })
    ;
    this.props.updateOfferForm({
      OfferType: '',
      OfferMetric: '',
      Percentage_Stock: '',
    })
    this.props.next()
  }

  impliedExchangeRatio = (a, b) => {
    let a_num = parseInt(a, 10)
    let b_num = parseInt(b, 10)
    let answer = (b_num / a_num)
    if (answer) {
      return answer
    } else {
      return "NA"
    }
  }

render() {
  const { equity_info_datum, basic_info_datum } = { ...this.props.modelData }
  return (
    <div className="form">
    {equity_info_datum ?
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
            <td>{basic_info_datum[0].acquiror ? basic_info_datum[0].codename :
            basic_info_datum[1].codename} </td>
            <td> {basic_info_datum[0].acquiror ? basic_info_datum[1].codename :
            basic_info_datum[0].codename} </td>
         </tr>

         <tr>
            <td>Current Price:</td>
            <td>{basic_info_datum[0].acquiror ? equity_info_datum[0].currentSharePrice :
            equity_info_datum[1].currentSharePrice } </td>
            <td> {basic_info_datum[0].acquiror? equity_info_datum[1].currentSharePrice  :
            equity_info_datum[0].currentSharePrice} </td>
         </tr>
         <tr>
            <td>Exchange Ratio:</td>
            <td></td>
            <td>     {basic_info_datum[0].acquiror?

                  this.impliedExchangeRatio(equity_info_datum[0].currentSharePrice, equity_info_datum[1].currentSharePrice) :

                  this.impliedExchangeRatio(equity_info_datum[1].currentSharePrice, equity_info_datum[0].currentSharePrice) } </td>
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
          onChange={this.handleChange}
          className="form-input-1" />
          Set Amount
        </label>

        <label>
          <input
             type="radio"
             name="OfferType"
             value="%Premium"
             checked={this.props.OfferFormData.OfferType==="%Premium"}
             onChange={this.handleChange}
             className="form-input-1" />
          % Premium
        </label>

       <label>
         <input
            type="radio"
            name="OfferType"
            value="ExhangeRatio"
            checked={this.props.OfferFormData.OfferType==="ExhangeRatio"}
            onChange={this.handleChange}
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
//  { basic_info_datum ?
//  <p>{this.props.modelData.basic_info_datum[0].ticker}</p> :
//  <p>placeholder</p>
//  }
//  </div>
// )
