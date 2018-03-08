import React from 'react'
import { connect } from "react-redux";
import { updateNewProjectForm, setProjectInfo, addNewProject, resetModelData } from '../actions'
import ProjectTypeSelect from './ProjectTypeSelect';
import { Form } from 'semantic-ui-react'

class NewProjectForm extends React.Component {

 handleChange = (e) => {
   this.props.updateNewProjectForm({
       [e.target.name]: e.target.value
   })
 }

 handleSubmit = (e) => {
   e.preventDefault();
   this.props.resetModelData()
   this.props.addNewProject({
     name: this.props.ProjectName,
     deal_type: this.props.Deal_type,
     user_id: this.props.currentUser.id,
   })
   ;
   this.props.updateNewProjectForm({
     ProjectName: '',
     Deal_type: '',
     User_id: '',
   })
   this.props.exit()
   this.props.history.push('/project')
 }

 render() {
   return (
     <div className="form">
        <i onClick={this.props.exit} className="window close outline icon large grey"></i>
       <h3>Begin a New Project </h3>
       <form onSubmit={this.handleSubmit}>
       <input
          type="text"
          name="ProjectName"
          value={this.props.ProjectName}
          onChange={this.handleChange}
          placeholder="project name" /> <br/>
        <div className="form-input-spacer"></div>
      <ProjectTypeSelect handleChange={this.handleChange}  /> <br/>

        <input
          type="submit"
          value="Let's Get Started"
          className="navy-grey-button" />
      </form>

   </div>
   )
 }
}

export default connect (state => ({ ...state.newProjectFormData }), { updateNewProjectForm, setProjectInfo, addNewProject, resetModelData })(NewProjectForm);
