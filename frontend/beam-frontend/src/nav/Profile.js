import React from 'react';
import { Redirect } from 'react-router'
import WithAuth from '../wrappers/WithAuth'

const Profile = (props) => {
  return (
    <div>
      get info from backend here
    </div>
  )
}

export default WithAuth(Profile)
