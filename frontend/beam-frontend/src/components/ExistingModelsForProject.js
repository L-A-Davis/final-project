import React from 'react'
import { connect } from "react-redux";

class ExistingModelsForProject extends React.Component {

  render() {
    return (
      <select
      defaultValue=""
      onChange={this.handleSelection}
      >
       <option value="" disabled hidden>Select</option>

      { (this.props.selectedProjectData.status !== 500 && this.props.selectedProjectData.models) ?
        this.props.selectedProjectData.models.map((model) =>
        <option key={model.id}
          value={model.id} name={model.name}
          >{model.name}</option>
          )
          : null
       }
      </select>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData }}, )(ExistingModelsForProject)
