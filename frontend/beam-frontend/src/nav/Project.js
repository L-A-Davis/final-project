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
      showExistingModelList: false,
      showNewModelButton: false,
      showModel: true
    })
  }

  componentDidMount() {
    this.props.selectedProjectData.id ?
    this.props.fetchExistingModels(this.props.selectedProjectData.id) : null
    this.props.modelData.hasOwnProperty("id")?
    this.setState({
      showExistingModelList: false,
      showNewModelButton: false,
      showModel: true
    }) :
    this.setState({
      showExistingModelList: true,
      showNewModelButton: true,
      showModel: false
    })
  }


  render () {
    console.log(this.state)
  return (
    <div>
     {(this.state.showExistingModelList) &&
        <div>
          <h3> Select an Existing Model </h3>
          <ExistingModelsForProject
            next={this.handleSelection}
            auth={this.props.auth}
            history={this.props.history}/>
        </div>
      }

     {(this.state.showNewModelButton)&&
       <div>
         <h3> Or Start a New One </h3>
         <button onClick={this.handleSelection}>Start Here</button>
       </div>
     }
      {(this.state.showModel) &&
        <div>
          <Model
            auth={this.props.auth}
            history={this.props.history}/>
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
