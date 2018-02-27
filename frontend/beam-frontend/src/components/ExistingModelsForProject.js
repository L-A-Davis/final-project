import React from 'react'
import { connect } from "react-redux";
import { fetchModelParts } from '../actions'

class ExistingModelsForProject extends React.Component {

  handleSelection = (event) => {
    console.log(event.target.value)
    this.props.fetchModelParts(event.target.value)
    this.props.next()
 }

  render() {
    return (
      <select
      defaultValue=""
      onChange={this.handleSelection}
      >
       <option value="" disabled hidden>Select</option>

      { (this.props.allModelsforProject && this.props.allModelsforProject.length > 0) ?
        this.props.allModelsforProject.map((model) =>
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


export default connect (state => {return {allModelsforProject: state.allModelsforProject, modelData: state.modelData }}, { fetchModelParts})(ExistingModelsForProject)
