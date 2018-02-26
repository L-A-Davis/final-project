import React from 'react'
import { connect } from "react-redux";

class Outputs extends React.Component {

  render() {
    return (
      <p>model data</p>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData }}, )(Outputs)
