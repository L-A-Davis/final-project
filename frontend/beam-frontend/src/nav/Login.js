import React from 'react';
import adapter from '../adapter';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

onInputChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleLogin = (e) => {
  e.preventDefault()
  adapter.auth.login(this.state.email, this.state.password)
  .then(resp => {
    if (resp.error) {
      alert(resp.error)
    } else {
      this.props.history.push('/profile')
      this.props.setUser(resp)
    }
  })
}

render(){
  return (
    <div className="form login">
    <h2>Welcome Back</h2>
    <form className="two-columns-form" onSubmit={this.handleLogin}>
    <label>Email </label>
      <input value={this.state.email} name="email" type="email" placeholder="Email" onChange={this.onInputChange}/>

      <label>Password </label>
      <input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onInputChange}/>

      <input type="submit" value="Submit" className="login-form-submit"/>
    </form>
    </div>
  )
}

}

export default Login;
