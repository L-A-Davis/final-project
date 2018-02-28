import React from 'react'
import { connect } from "react-redux";
import { updateTransactionAdjustmentsForm, resetSynergiesInfo, newSynergiesInfo, resetNewFinancingInfo, newNewFinancingInfo } from '../actions'

let input_types = [{id: "SetAmount", name: "Set Amount"}, {id: "PercentofTarget", name: "% of Target"}, {id: "PercentofAcquiror", name: ">% of Acquiror"}]


let debt_input_types = [{id: "debt", name: "Debt"}, {id: "preferred", name: "Preferred Equity"}, {id: "debt_secured", name: "Secured Debt"}]

class TransactionAdjustments extends React.Component {

 handleChange = (e) => {
   this.props.updateTransactionAdjustmentsForm({
       [e.target.name]: e.target.value
   })
 }
 handleDataSave = (data) =>{
   for (let i = 0; i< data.length; i++){
     if (data[i].form_for ==="synergies") {
     if (data[i].id !== "") {
         this.props.resetSynergiesInfo(data[i])
       } else {
         this.props.newSynergiesInfo(data[i])
       }
 } else {
       if (data[i].id !== "") {
       this.props.resetNewInfo(data[i])
     } else {
       this.props.newNewFinancingInfo(data[i])
     }
 }
}
 }


 handleSubmit = (e) => {
   e.preventDefault();
   const form = this.props.TransactionAdjustmentsFormData
   let info = [
       {
         id: form.Synergies_id,
         model_id: this.props.modelData.id,
         item_name: "GA_synergies",
         form_for: "synergies",
         input_type: form.Synergies_type,
         input_amount: form.Synergies_input
       },
       {
         id: form.New_financing_1_id,
         model_id: this.props.modelData.id,
         item_name: "New_financing_1",
         form_for: "newFinancing",
         item_type: form.New_financing_1_type_of,
         amount: form.New_financing_1_amount,
         rate: form.New_financing_1_rate

       },
       {
         id: form.New_financing_2_id,
         model_id: this.props.modelData.id,
         item_name: "New_financing_2",
         form_for: "newFinancing",
         item_type: form.New_financing_2_type_of,
         amount: form.New_financing_2_amount,
         rate: form.New_financing_2_rate

       },
       {
         id: form.New_financing_3_id,
         model_id: this.props.modelData.id,
         item_name: "New_financing_3",
         form_for: "newFinancing",
         item_type: form.New_financing_3_type_of,
         amount: form.New_financing_3_amount,
         rate: form.New_financing_3_rate
       },
     ]
    this.handleDataSave(info)
   this.props.next()
  }


 render() {
   return (
     <div className="form">
     <button onClick={this.props.exit}>X</button>
        <h3>Transaction Adjustments Info</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="five-columns-form">

       <label className="form-label">G&A Synergies:</label>

       <select
          onChange={this.handleChange}
          className="form-input-1"
          name="Synergies_type"
          defaultValue=""
          >
           <option value="" disabled hidden>Select</option>
           {input_types.map((type) =>
             <option key={type.id} value={type.id}>{type.name}</option>
           )}
       </select>

      <input
         type="number"
         name="Synergies_input"
         value={this.props.TransactionAdjustmentsFormData.Synergies_input}
         onChange={this.handleChange}
         className="form-input-2"
         step= "any"/>

    <label className="form-label"> New Financing 1:</label>

        <select
           onChange={this.handleChange}
           className="form-input-1"
           name="New_financing_1_type_of"
           defaultValue=""
           >
            <option value="" disabled hidden>Select</option>
            {debt_input_types.map((type) =>
              <option key={type.id} value={type.id}>{type.name}</option>
            )}
        </select>

       <input
          type="number"
          name="New_financing_1_amount"
          value={this.props.TransactionAdjustmentsFormData.New_financing_1_amount}
          onChange={this.handleChange}
          className="form-input-2"
          step= "any"/>

      <input
         type="number"
         name="New_financing_1_rate"
         value={this.props.TransactionAdjustmentsFormData.New_financing_1_rate}
         onChange={this.handleChange}
         className="form-input-3"
         step= "any"/>

     <label className="form-label"> New Financing 2:</label>

         <select
            onChange={this.handleChange}
            className="form-input-1"
            name="New_financing_2_type_of"
            defaultValue=""
            >
             <option value="" disabled hidden>Select</option>
             {debt_input_types.map((type) =>
               <option key={type.id} value={type.id}>{type.name}</option>
             )}
         </select>

        <input
           type="number"
           name="New_financing_2_amount"
           value={this.props.TransactionAdjustmentsFormData.New_financing_2_amount}
           onChange={this.handleChange}
           className="form-input-2"
           step= "any"/>

       <input
          type="number"
          name="New_financing_2_rate"
          value={this.props.TransactionAdjustmentsFormData.New_financing_2_rate}
          onChange={this.handleChange}
          className="form-input-3"
          step= "any"/>



      <label className="form-label"> New Financing 3:</label>

          <select
             onChange={this.handleChange}
             className="form-input-1"
             name="New_financing_3_type_of"
             defaultValue=""
             >
              <option value="" disabled hidden>Select</option>
              {debt_input_types.map((type) =>
                <option key={type.id} value={type.id}>{type.name}</option>
              )}
          </select>

         <input
            type="number"
            name="New_financing_3_amount"
            value={this.props.TransactionAdjustmentsFormData.New_financing_3_amount}
            onChange={this.handleChange}
            className="form-input-2"
            step= "any"/>

        <input
           type="number"
           name="New_financing_3_rate"
           value={this.props.TransactionAdjustmentsFormData.New_financing_3_rate}
           onChange={this.handleChange}
           className="form-input-3"
           step= "any"/>

           <input
             type="submit"
             value="Save Transaction Adjustments"
             className="form-input-1" />

      </form>
    </div>
   </div>
   )
 }
}

export default connect (state => {return {TransactionAdjustmentsFormData: state.TransactionAdjustmentsFormData, modelData: state.modelData }}, { updateTransactionAdjustmentsForm, resetSynergiesInfo, newSynergiesInfo, resetNewFinancingInfo, newNewFinancingInfo  })(TransactionAdjustments);
