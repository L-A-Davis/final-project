import React from 'react'
import { connect } from "react-redux";
import { saveModel } from '../actions'

class SaveModelButton extends React.Component {

 handleModelSave = () => {
   console.log(this.props.selectedProjectData.ProjectId)
   this.props.saveModel({
     name: this.props.selectedProjectData.Deal_type,
     data: this.props.modelData,
     project_id: this.props.selectedProjectData.ProjectId
   })
   this.props.history.push('/project')
 }

  render() {
    return (
      <button onClick={this.handleModelSave}>Save Model</button>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData }}, { saveModel })(SaveModelButton)
