import React from 'react'
import { connect } from "react-redux";

class Contribution extends React.Component {

  render() {
    return (
       <div className="outputholder">
        <h4>Contribution Analysis</h4>
        <p>Table to Come Here</p>
       </div>
    )
  }
}


export default connect (state => {return {selectedProjectData: state.selectedProjectData, modelData: state.modelData }}, )(Contribution)