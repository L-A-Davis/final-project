import React from 'react';
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WithAuth from '../wrappers/WithAuth'
import MyProjects from '../components/MyProjects';
import NewProjectForm from '../components/NewProjectForm';
import Project from './Project'
import { fetchExistingProjects, resetModelData, resetFormData } from '../actions'
import { connect } from 'react-redux'
import { Form, Header, Button, Grid, Segment } from 'semantic-ui-react'

class Profile extends React.Component {

 state = {
   showNewProjectForm: false,
   showNewProjectButton: true,
   showProjectList: true
 }


 componentDidMount() {
   this.props.auth.currentUser ? this.props.fetchExistingProjects(this.props.auth.currentUser.id) : null
   this.props.resetModelData()
   this.props.resetFormData()
 }

 handleNewProjectClick = () => {
   this.setState({
     showNewProjectForm: !this.state.showNewProjectForm,
     showNewProjectButton: !this.state.showNewProjectButton,
     showProjectList: !this.state.showProjectList

   })
 }

  render () {
  return (
    <div>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='top'
    >
    <Grid.Column style={{ maxWidth: 500 }}>


    <Form>
     <Segment>
      <div>
      {!this.state.showNewProjectForm &&
      <Header as='h3' className='navy-text' textAlign='center'>
         Select an existing project or start a new one:
      </Header>
      }
      { this.props.allProjects && this.state.showProjectList &&
      <MyProjects projects={this.props.allProjects}
      currentUser={this.props.auth.currentUser}
      history={this.props.history}
      />
      }
      {this.state.showNewProjectButton &&
       <Button
       onClick={this.handleNewProjectClick}
       className={'navy-grey-button'}
       fluid={true}
       >Start New Project</Button>
     } <br/>
      { this.state.showNewProjectForm &&
      <NewProjectForm currentUser={this.props.auth.currentUser}
      exit={this.handleNewProjectClick}
      history={this.props.history}
      />
      }

      </div>
      </Segment>
      </Form>
      </Grid.Column>
      </Grid>
    </div>
  )
 }
}

 export default connect(state=> {return {allProjects: state.allProjects, modelData: state.modelData}}, { fetchExistingProjects, resetModelData, resetFormData })(WithAuth(Profile))
