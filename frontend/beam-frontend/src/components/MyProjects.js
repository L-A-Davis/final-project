import React from 'react';
import { connect } from "react-redux";
import { selectExistingProject } from '../actions'

class MyProjects extends React.Component {

 handleSelection = (event) => {
   console.log(event.target.value)
   this.props.selectExistingProject({
     id: event.target.value
   })
   this.props.history.push('/project')
}


  render() {
  return (
    <div>
    <select
    defaultValue=""
    onChange={this.handleSelection}
    >
     <option value="" disabled hidden>Select</option>

    { this.props.projects.status !== 500 ?
      this.props.projects.map((project) =>
      <option key={project.id}
        value={project.id} name={project.name}
        deal_type={project.deal_type}
        user_id={project.user.id}
        >{project.name}</option>
        )
        : null
     }
    </select>
    </div>
  )
 }
}

export default connect (state => ({ ...state.selectedProjectData }), { selectExistingProject })(MyProjects);


   // this.props.history.push(`/project/${project.id}`)
