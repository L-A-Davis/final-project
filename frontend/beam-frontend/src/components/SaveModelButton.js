import React from 'react'
import { connect } from "react-redux";
import { addNewModel, editModel } from '../actions'

class SaveModelButton extends React.Component {

 handleModelSave = () => {
   (this.props.modelData.id > 0) ?
   this.props.editModel(this.props.modelData) :
   this.props.addNewModel({
     name: this.props.modelData.name,
     data: this.props.modelData.data,
     project_id: this.props.modelData.project_id,
     model_type: this.props.modelData.model_type
   })
   this.props.history.push('/project')
 }

  render() {
    return (
      <button onClick={this.handleModelSave}>Save Model</button>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData }}, { addNewModel, editModel })(SaveModelButton)
