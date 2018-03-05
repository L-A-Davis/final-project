import React from 'react';
import { Redirect } from 'react-router'
import WithAuth from '../wrappers/WithAuth'
import { connect } from 'react-redux'
import Model from './Model'
import ExistingModelsForProject from '../components/ExistingModelsForProject'
import { fetchExistingModels } from '../actions'
import { Form, Header, Button, Grid } from 'semantic-ui-react'

class Project extends React.Component {

  state = {
    showExistingModelList: true,
    showNewModelButton: true,
    showModel: false,
    newModelFormAvailable: false
  }

  handleExistingSelection = () => {
    this.setState({
      showExistingModelList: false,
      showNewModelButton: false,
      showModel: true,
      newModelFormAvailable: false
    })
  }

  handleNewSelection = () => {
    this.setState({
      showExistingModelList: false,
      showNewModelButton: false,
      showModel: true,
      newModelFormAvailable: true,
    })
  }

  componentDidMount() {
    this.props.selectedProjectData.id ?
    this.props.fetchExistingModels(this.props.selectedProjectData.id) : null
    this.props.modelData.hasOwnProperty("id")?
    this.setState({
      showExistingModelList: false,
      showNewModelButton: false,
      showModel: true,
      newModelFormAvailable: false
    }) :
    this.setState({
      showExistingModelList: true,
      showNewModelButton: true,
      showModel: false,
      newModelFormAvailable:false
    })
  }


  render () {
    console.log(this.state)
  return (
    <div>
     <div>
     {(!this.state.showModel) &&
       <Grid
         textAlign='center'
         style={{ height: '100%' }}
         verticalAlign='top'
       >
       <Grid.Column style={{ maxWidth: 450 }}>

       <div>
     <Form id="modelForm">
     {(this.state.showExistingModelList) &&
        <div>
        <Header as='h3' className='navy-text' textAlign='center'>
           Select an Existing Model:
        </Header>
          <ExistingModelsForProject
            next={this.handleExistingSelection}
            auth={this.props.auth}
            history={this.props.history}/>
        <div className="form-input-spacer"></div>
        </div>
      }
     {(this.state.showNewModelButton)&&
       <div>
       <Header as='h3' className='navy-text' textAlign='center'>
          Or Start a New One:
       </Header>
         <Button
         onClick={this.handleNewSelection}
         className={'navy-grey-button'}
         fluid={true}
         >Start New Model</Button>
       </div>
     }
     </Form>
         </div>
     </Grid.Column>
     </Grid>

   }
    </div>

      {(this.state.showModel) &&
        <div>
          <Model
            auth={this.props.auth}
            history={this.props.history}
            startWithNewForm={this.state.newModelFormAvailable}/>
        </div>
      }
    </div>
  )
 }
}


 export default connect(state=> {return {allModelsforProject: state.allModelsforProject, selectedProjectData: state.selectedProjectData, FormCompletedStatus: state.FormCompletedStatus, showOutputs: state.showOutputs, modelData: state.modelData
  }}, { fetchExistingModels })(WithAuth(Project))


//   render () {
//   return (
//     <div>
//      {this.state.showExistingModelList &&
//         <div>
//           <h3> Select an Existing Model </h3>
//           <ExistingModelsForProject
//             next={this.handleSelection}
//             auth={this.props.auth}
//             history={this.props.history}/>
//         </div>
//       }
//      {this.state.showNewModelButton &&
//        <div>
//          <h3> Or Start a New One </h3>
//          <button onClick={this.handleSelection}>Start Here</button>
//        </div>
//      }
//       {this.state.showModel &&
//         <div>
//           <Model
//             auth={this.props.auth}
//             history={this.props.history}/>
//         </div>
//       }
//     </div>
//   )
//  }
// }
