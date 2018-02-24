import React from 'react';
import { Redirect } from 'react-router'
import WithAuth from '../wrappers/WithAuth'
import MyProjects from '../components/MyProjects';
import NewProjectForm from '../components/NewProjectForm';
import BasicInfoForm from '../components/BasicInfoForm';
import EquityForm from '../components/EquityForm';
import OfferForm from '../components/OfferForm';
import { fetchExistingProjects } from '../actions'
import { connect } from 'react-redux'

class Profile extends React.Component {

 state = {
   showNewProjectForm: false,
   showNewProjectButton: true
 }


 componentDidMount() {
   this.props.fetchExistingProjects()
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
      <MyProjects projects={this.props.allProjects}
      currentUser={this.props.auth.currentUser}
      history={this.props.history}
      />
      {this.state.showNewProjectButton &&
       <button onClick={this.handleNewProjectClick}>Start New Project</button>
      }
      { this.state.showNewProjectForm &&
      <NewProjectForm currentUser={this.props.auth.currentUser}
      exit={this.handleNewProjectClick}
      history={this.props.history}/>
      }
        <BasicInfoForm />
        <EquityForm />
        <OfferForm />
      </div>
    </div>
  )
 }
}

 export default connect((state)=> ({allProjects: state.allProjects}), { fetchExistingProjects })(WithAuth(Profile))
