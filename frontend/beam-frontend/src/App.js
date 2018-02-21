import React, { Component } from 'react';
import './App.css';
import adapter from './adapter'
import Navbar from './nav/Navbar';
import Login from './nav/Login';
import Signup from './nav/Signup';
import Profile from './nav/Profile';
import Header from './components/Header';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';


class App extends Component {
  state = {
    auth: { currentUser: null }
  }

 setLoggedInUser = (user) => {
   localStorage.setItem('token', user.token)
   this.setState({
     auth: {
       currentUser: {
         email: user.email,
         id: user.id
       }
     }
   })
 }

 removeLoggedInUser = () => {
  localStorage.removeItem('token')
  this.setState({
    auth: { currentUser: null }
  })
  this.props.history.push('/login')
}

componentDidMount() {
  const token = localStorage.getItem('token');
  if (token) {
    adapter.auth.getLoggedInUser().then(user => {
      if (user) {
        this.setState({ auth: { currentUser: user} })
        console.log(`user: ${user.email}`)
      } else {
        this.setState({ auth: { currentUser: null } })
      }
    })
  } else {
    alert('No token')
  }
}


  render() {
    return (
      <div className="App">
        <Header />
       <Navbar
           currentUser={this.state.auth.currentUser}
           logOut={this.removeLoggedInUser} />
      <Switch>
         <Route exact path='/login' render={ (routerProps) => {
           return <Login history={routerProps.history}
           setUser={this.setLoggedInUser} />
         }} />

         <Route exact path='/signup' render={ (routerProps) => {
           return <Signup history={routerProps.history}
           setUser={this.setLoggedInUser} />
         }} />

        <Route exact path='/profile' render={ () => {
            return <Profile />
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
