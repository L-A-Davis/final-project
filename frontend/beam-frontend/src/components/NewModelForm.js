import React from 'react'
import { connect } from "react-redux";
import { addNewModel, updateNewModelForm } from '../actions'
import ModelTypeSelect from './ModelTypeSelect';
import { Form, Grid, Segment } from 'semantic-ui-react'

class NewModelForm extends React.Component {

  handleChange = (e) => {
    this.props.updateNewModelForm({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewModel({
      name: this.props.newModelFormData.name,
      model_type: this.props.newModelFormData.model_type,
      project_id: this.props.selectedProjectData.id,
    })
     this.props.next()
     this.props.history.push('/project/model')
  }

  render() {
    return (

        <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='top'
      >
      <Grid.Column style={{ maxWidth: 600 }}>
      <div className="form">
         <Segment>
        <h3>Begin a New Model</h3>
        <form onSubmit={this.handleSubmit}>
        <label>Model Name: </label>
        <input
           type="text"
           name="name"
           value={this.props.newModelFormData.name}
           onChange={this.handleChange}
           placeholder="model name" /> <br/>

        <label>Model Type: </label>
       <ModelTypeSelect handleChange={this.handleChange}  /> <br/>

         <input
           type="submit"
           value="Let's Go" />
       </form>
       </Segment>
         </div>
       </Grid.Column>
       </Grid>

    )
  }

}


export default connect (state => {return {newModelFormData: state.newModelFormData, selectedProjectData: state.selectedProjectData }}, { addNewModel, updateNewModelForm })(NewModelForm);


        // <i onClick={this.props.exit} className="window close outline icon large grey"></i>
