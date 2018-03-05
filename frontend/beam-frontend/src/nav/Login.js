import React from 'react';
import adapter from '../adapter';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


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
    <div className="login-form">
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='top'
    >
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' className='navy-text' textAlign='center'>
       Log-in to your account
    </Header>
    <Form size='large' onSubmit={this.handleLogin}>
     <Segment stacked>
     <Form.Input
     fluid
     icon='user'
     iconPosition='left'
     value={this.state.email}
     name="email"
     type="email"
     onChange={this.onInputChange}
     placeholder='E-mail address'
      />
      <Form.Input
       fluid
       icon='lock'
       iconPosition='left'
       placeholder='Password'
       type='password'
       value={this.state.password}
       name="password"
       onChange={this.onInputChange}
     />

      <Button color='grey' fluid size='large'>Login</Button>

      </Segment>
      </Form>
    <Message>  New to us? <a href='/signup'>Sign Up</a>
      </Message>
      </Grid.Column>
      </Grid>
  </div>

  )
}

}

export default Login;


// <h2>Welcome Back</h2>
// <form className="two-columns-form" onSubmit={this.handleLogin}>
// <label>Email </label>
//   <input value={this.state.email} name="email" type="email" placeholder="Email" onChange={this.onInputChange}/>
//
//   <label>Password </label>
//   <input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onInputChange}/>
//
//   <input type="submit" value="Submit" className="login-form-submit"/>
// </form>
// </div>
// )
// }
//
// }
