import React, { Component } from 'react';
import './App.css';
import adapter from './adapter'
import Navbar from './nav/Navbar';
import Login from './nav/Login';
import Signup from './nav/Signup';
import Profile from './nav/Profile';
import Project from './nav/Project';
import HeaderForPage from './components/HeaderForPage';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';



class App extends Component {
  state = {
    projects: [],
    auth: {
      currentUser: null,
      loggingIn: true
    }
  }

 setLoggedInUser = (user) => {
   localStorage.setItem('token', user.token)
   this.setState({
     auth: {
       currentUser: {
         email: user.email,
         id: user.id
       },
       loggingIn: false
     }
   })
   this.props.history.push('/profile')
 }

 removeLoggedInUser = () => {
  localStorage.removeItem('token')
  this.setState({
    auth: { currentUser: null, loggingIn: false }
  })
  this.props.history.push('/login')
}


componentDidMount() {
  const token = localStorage.getItem('token');
  if (token) {
    adapter.auth.getLoggedInUser().then(user => {
      if (user) {
        this.setState({ auth: {
          currentUser: user
        },
        loggingIn: false
      })
        console.log(`user: ${user.email}`)

      } else {
        this.setState({ auth: {
          currentUser: null,
          loggingIn: false
           } })
      }
    })
  } else {
    this.setState({
      auth: { loggingIn: false }
    })
  }
}


  render() {
    return (
      <div className="App">
       <HeaderForPage />
       <Navbar
           currentUser={this.state.auth.currentUser}
           logOut={this.removeLoggedInUser}

           />
      <Switch>
         <Route exact path='/login' render={ (routerProps) => {
           return <Login history={routerProps.history}
           setUser={this.setLoggedInUser} />
         }} />

         <Route exact path='/signup' render={ (routerProps) => {
           return <Signup history={routerProps.history}
           setUser={this.setLoggedInUser} />
         }} />

        <Route exact path='/profile' render={ (routerProps) => {
            return <Profile auth={this.state.auth}
            history={routerProps.history}/>
        }} />

        <Route exact path='/project' render={ (routerProps) => {
            return <Project auth={this.state.auth}
            history={routerProps.history}/>
        }} />

        <Route exact path='/project/model' render={ (routerProps) => {
            return <Project auth={this.state.auth}
            history={routerProps.history}/>
        }} />


        <Redirect exact from="/" to="/login" />
        <Redirect to="/login" />

      </Switch>

      </div>
    );
  }
}

export default withRouter(App);


// api source const URL = `https://api.iextrading.com/1.0/stock/`

// pre-HOC function
// removeLoggedInUser = () => {
//  localStorage.removeItem('token')
//  this.setState({
//    auth: { currentUser: null }
//  })
//  this.props.history.push('/login')
// }
// was last part of CWM..  alert('No token')
