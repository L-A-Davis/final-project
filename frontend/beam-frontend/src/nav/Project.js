import React from 'react';
import { Redirect } from 'react-router'
import WithAuth from '../wrappers/WithAuth'
import { connect } from 'react-redux'


class Project extends React.Component {

  render () {
  return (
    <div>
      <div>
       project page
      </div>
    </div>
  )
 }
}

 export default connect((state)=> ({allProjects: state.allProjects}), { })(WithAuth(Project))
