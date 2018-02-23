import React from 'react'
import { connect } from "react-redux";
import { updateNewProjectForm, setProjectInfo, addNewProject } from '../actions'
import ProjectTypeSelect from './ProjectTypeSelect';

class NewProjectForm extends React.Component {

 handleChange = (e) => {
   this.props.updateNewProjectForm({
       ProjectName: this.props.ProjectName,
       Deal_type: this.props.Deal_type,
       User_id: this.props.currentUser.id,
       [e.target.name]: e.target.value
   })
 }

 handleSubmit = (e) => {
   e.preventDefault();
   let project = {
     name: this.props.ProjectName,
     deal_type: this.props.Deal_type,
     user_id: this.props.currentUser.id
   }
   this.props.addNewProject(project)
   ;
   this.props.updateNewProjectForm({
     ProjectName: '',
     Deal_type: '',
     User_id: '',
   })
   this.props.history.push('/project')
 }

 render() {
   return (
     <div className="form">
        <button onClick={this.props.exit}>X</button>
       <p>Begin a New Project </p>
       <form onSubmit={this.handleSubmit}>
       <label>Project Name: </label>
       <input
          type="text"
          name="ProjectName"
          value={this.props.ProjectName}
          onChange={this.handleChange}
          placeholder="project name" /> <br/>

       <label>Project Type: </label>
      <ProjectTypeSelect handleChange={this.handleChange}  /> <br/>

        <input
          type="submit"
          value="Let's Get Started" />
      </form>

   </div>
   )
 }
}

export default connect (state => ({ ...state.formData }), { updateNewProjectForm, setProjectInfo, addNewProject })(NewProjectForm);