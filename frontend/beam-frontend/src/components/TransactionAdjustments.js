import React from 'react'
import { connect } from "react-redux";
import { updateTransactionAdjustmentsForm, resetSynergiesInfo, newSynergiesInfo, resetNewFinancingInfo, newNewFinancingInfo } from '../actions'
import { Form } from 'semantic-ui-react'

let input_types = [{id: "SetAmount_savings", name: "Set Amount Savings"}, {id: "SetAmount_additional_exp", name: "Set Amount Expense"}, {id: "PercentofTarget", name: "% of Target"}, {id: "PercentofAcquiror", name: ">% of Acquiror"}]


let debt_input_types = [{id: "debt", name: "Debt"}, {id: "preferred", name: "Preferred Equity"}, {id: "debt_secured", name: "Secured Debt"}]

class TransactionAdjustments extends React.Component {

 handleChange = (e) => {
   if (e.target.type !== "radio") {
     this.props.updateTransactionAdjustmentsForm({
        [e.target.name]:  e.target.value
      })
   } else {
     this.props.updateTransactionAdjustmentsForm({
        New_financing_1_plug: false,
        New_financing_2_plug: false,
        New_financing_3_plug: false,
        [e.target.dataset.name]:  e.target.checked
      })
   }
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
       this.props.resetNewFinancingInfo(data[i])
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
         input_amount: form.Synergies_input || 0
       },
       {
         id: form.New_financing_1_id,
         model_id: this.props.modelData.id,
         item_name: "New_financing_1",
         form_for: "newFinancing",
         item_type: form.New_financing_1_type_of,
         amount: form.New_financing_1_amount || 0,
         rate: form.New_financing_1_rate || 0,
         plug: form.New_financing_1_plug || false

       },
       {
         id: form.New_financing_2_id,
         model_id: this.props.modelData.id,
         item_name: "New_financing_2",
         form_for: "newFinancing",
         item_type: form.New_financing_2_type_of,
         amount: form.New_financing_2_amount || 0,
         rate: form.New_financing_2_rate || 0,
         plug: form.New_financing_2_plug || false

       },
       {
         id: form.New_financing_3_id,
         model_id: this.props.modelData.id,
         item_name: "New_financing_3",
         form_for: "newFinancing",
         item_type: form.New_financing_3_type_of,
         amount: form.New_financing_3_amount || 0,
         rate: form.New_financing_3_rate || 0,
         plug : form.New_financing_3_plug || false
       },
     ]
    this.handleDataSave(info)
   this.props.next()
  }


 render() {
   return (
     <div className="form">
       <i onClick={this.props.exit} className="window close outline icon large grey"></i>
        <h3>Transaction Adjustments Info</h3>
     <div >
       <form onSubmit={this.handleSubmit} className="five-columns-form">

       <label className="form-input-1">Type Detail</label>
       <label className="form-input-2">Input Amount</label>
       <label className="form-input-3">New Financing Rate</label>
        <label className="form-input-4">Financing Plug</label>
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

         <span></span>
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

     <input
        type="radio"
        name="plug"
        data-name="New_financing_1_plug"
        value={this.props.TransactionAdjustmentsFormData.New_financing_1_plug}
        onChange={this.handleChange}
        checked={this.props.TransactionAdjustmentsFormData.New_financing_1_plug===true}
        className="form-input-4"
        />

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

          <input
             type="radio"
             name="plug"
             data-name="New_financing_2_plug"
             value={this.props.TransactionAdjustmentsFormData.New_financing_2_plug}
             onChange={this.handleChange}
             checked={this.props.TransactionAdjustmentsFormData.New_financing_2_plug===true}
             className="form-input-4"
             />

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
            type="radio"
            name="plug"
            data-name="New_financing_3_plug"
            value={this.props.TransactionAdjustmentsFormData.New_financing_3_plug}
            onChange={this.handleChange}
            checked={this.props.TransactionAdjustmentsFormData.New_financing_3_plug===true}
            className="form-input-4"
            />

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
