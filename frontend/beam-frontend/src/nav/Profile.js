import React from 'react';
import { Redirect } from 'react-router'
import WithAuth from '../wrappers/WithAuth'
import MyProjects from '../components/MyProjects';
import NewProjectForm from '../components/NewProjectForm';
import Project from './Project'
import { fetchExistingProjects, resetModelData, resetFormData } from '../actions'
import { connect } from 'react-redux'

class Profile extends React.Component {

 state = {
   showNewProjectForm: false,
   showNewProjectButton: true
 }


 componentDidMount() {
   this.props.fetchExistingProjects(this.props.auth.currentUser.id)
   this.props.resetModelData()
   this.props.resetFormData()
 }

 handleNewProjectClick = () => {
   this.setState({
     showNewProjectForm: !this.state.showNewProjectForm,
     showNewProjectButton: !this.state.showNewProjectButton
   })
 }

  render () {
  return (
    <div>
      <div>
      <p>Select an Existing Project or Start One: </p>
      { this.props.allProjects &&
      <MyProjects projects={this.props.allProjects}
      currentUser={this.props.auth.currentUser}
      history={this.props.history}
      />
      }
      {this.state.showNewProjectButton &&
       <button onClick={this.handleNewProjectClick}>Start New Project</button>
      }
      { this.state.showNewProjectForm &&
      <NewProjectForm currentUser={this.props.auth.currentUser}
      exit={this.handleNewProjectClick}
      history={this.props.history}
      />
      }

      </div>
    </div>
  )
 }
}

 export default connect(state=> {return {allProjects: state.allProjects, modelData: state.modelData}}, { fetchExistingProjects, resetModelData, resetFormData })(WithAuth(Profile))
