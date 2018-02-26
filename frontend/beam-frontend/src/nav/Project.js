import React from 'react';
import { Redirect } from 'react-router'
import WithAuth from '../wrappers/WithAuth'
import { connect } from 'react-redux'
import Model from './Model'
import ExistingModelsForProject from '../components/ExistingModelsForProject'


class Project extends React.Component {

  state = {
    showExistingModelList: true,
    showNewModelButton: true,
    showNewModelForm: false
  }

  handleNewModelClick = () => {
    this.setState({
      showExistingModelList: !this.state.showExistingModelList,
      showNewModelButton: !this.state.showNewModelButton,
      showNewModelForm: !this.state.showNewModelForm
    })
  }

  render () {
  return (
    <div>
     {this.state.showExistingModelList &&
        <div>
          <h3> Select an Existing Model </h3>
          <ExistingModelsForProject />
        </div>
      }
     {this.state.showNewModelButton &&
       <div>
         <h3> Or Start a New One </h3>
         <button onClick={this.handleNewModelClick}>Start Here</button>
       </div>
     }
      {this.state.showNewModelForm &&
        <div>
          <Model auth={this.props.auth}
          history={this.props.history}/>
        </div>
      }

    </div>
  )
 }
}

 export default connect((state)=> ({state: state}), { })(WithAuth(Project))
