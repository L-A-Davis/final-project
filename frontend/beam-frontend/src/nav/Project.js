import React from 'react';
import { Redirect } from 'react-router'
import WithAuth from '../wrappers/WithAuth'
import { connect } from 'react-redux'
import Model from './Model'
import ExistingModelsForProject from '../components/ExistingModelsForProject'
import { fetchExistingModels } from '../actions'


class Project extends React.Component {

  state = {
    showExistingModelList: true,
    showNewModelButton: true,
    showModel: false
  }

  handleSelection = () => {
    this.setState({
      showExistingModelList: !this.state.showExistingModelList,
      showNewModelButton: !this.state.showNewModelButton,
      showModel: !this.state.showNewModelForm
    })
  }

  componentDidMount() {
    this.props.selectedProjectData.id ?
    this.props.fetchExistingModels(this.props.selectedProjectData.id) : null
  }


  render () {
  return (
    <div>
     {this.state.showExistingModelList &&
        <div>
          <h3> Select an Existing Model </h3>
          <ExistingModelsForProject next={this.handleSelection}/>
        </div>
      }
     {this.state.showNewModelButton &&
       <div>
         <h3> Or Start a New One </h3>
         <button onClick={this.handleSelection}>Start Here</button>
       </div>
     }
      {this.state.showModel &&
        <div>
          <Model auth={this.props.auth}
          history={this.props.history}/>
        </div>
      }

    </div>
  )
 }
}


 export default connect(state=> {return {allModelsforProject: state.allModelsforProject, selectedProjectData: state.selectedProjectData, FormCompletedStatus: state.FormCompletedStatus }}, { fetchExistingModels })(WithAuth(Project))
