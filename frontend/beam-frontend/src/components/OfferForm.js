import React from 'react'
import { connect } from "react-redux";
import { updateOfferForm, setOfferInfo } from '../actions'

class OfferForm extends React.Component {



render() {
  return (
    <div className="form">
       <h3>Offer Inputs</h3>
       <form onSubmit={this.handleSubmit} className="three-columns-form">
       </form>
    <div >
    </div>
    </div>
  )
}

}

export default connect (state => {return { modelData: state.modelData, offerFormData: state.offerFormData }}, { updateOfferForm, setOfferInfo })(OfferForm);


// (
//  <div>
//  { this.props.modelData.basicInfoData ?
//  <p>{this.props.modelData.basicInfoData.CompanyA_ticker}</p> :
//  <p>placeholder</p>
//  }
//  </div>
// )
