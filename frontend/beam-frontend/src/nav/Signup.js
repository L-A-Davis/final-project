import React from 'react';
import adapter from '../adapter';
import SelectCompany from '../components/SelectCompany';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Signup extends React.Component {
  state = {
    user_name: '',
    email: '',
    company_id: '',
    phone: '',
    address: '',
    password: '',
    password_confirmation: ''
  }


  handleSignup = (e) => {
    e.preventDefault()
    adapter.auth.signup(this.state).then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        this.props.history.push('/profile')
        this.props.setUser(resp)
      }
    })
  }

   onInputChange = (e) => {
     if (e.target.value === undefined){
       this.setState({
         company_id: e.target.parentNode.id
       })
     } else {
       this.setState({
         [e.target.name]: e.target.value
       })
     }
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
         Join Here
      </Header>


      <Form size='large' onSubmit={this.handleSignup}>
       <Segment>

       <Form.Input
       fluid
       icon='user'
       iconPosition='left'
       value={this.state.user_name}
       name="user_name"
       type="text"
       onChange={this.onInputChange}
       placeholder='User Name'
        />

       <Form.Input
       fluid
       icon='envelope'
       iconPosition='left'
       value={this.state.email}
       name="email"
       type="email"
       onChange={this.onInputChange}
       placeholder='E-mail address'
        />

          <SelectCompany onChange={this.onInputChange}/>

          <Form.Input
          fluid
          icon='phone'
          iconPosition='left'
          value={this.state.phone}
          name="phone"
          type="text"
          onChange={this.onInputChange}
          placeholder='Phone number'
           />

           <Form.Input
           fluid
           icon='building outline'
           iconPosition='left'
           value={this.state.address}
           name="address"
           type="text"
           onChange={this.onInputChange}
           placeholder='Address'
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


        <Form.Input
         fluid
         icon='lock'
         iconPosition='left'
         placeholder='Password confirmation'
         type='password'
         value={this.state.password_confirmation}
         name="password_confirmation"
         onChange={this.onInputChange}
       />

        <Button color='grey' fluid size='large'>Login</Button>

        </Segment>
        </Form>
      <Message>  Already Have an account? <a href='/login'>Log in</a>
        </Message>
        </Grid.Column>
        </Grid>
    </div>

    )
  }

  }
  export default Signup;


         // <label>Select Company</label>
         //   <SelectCompany
         //      // companies={this.props.companies}
         //      onChange={this.props.onInputChange}/> <br/>
         //
         // <div className="form login">
         // <h2>Join Here</h2>
         // <form className="two-columns-form" onSubmit={this.handleSignup}>
         //   <label>User Name</label>
         //   <input value={this.state.user_name} name="user_name" type="text" placeholder="User Name" onChange={this.onInputChange}/>
         //
         //   <label>Email</label>
         //   <input value={this.state.email} name="email" type="email" placeholder="Email" onChange={this.onInputChange}/>
         //
         //  <label>Select Company</label>
         //    <SelectCompany onChange={this.props.onInputChange}/>
         //
         //   <label>Phone Number</label>
         //   <input value={this.state.phone} name="phone" type="text" placeholder="Phone Number" onChange={this.onInputChange}/>
         //
         //   <label>Address</label>
         //   <input value={this.state.address} name="address" type="text" placeholder="Address" onChange={this.onInputChange}/>
         //
         //   <label>Password</label>
         //   <input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onInputChange}/>
         //
         //   <label>Password Confirmation</label>
         //   <input value={this.state.password_confirmation} name="password_confirmation" type="password" placeholder="Password Confirmation" onChange={this.onInputChange}/>
         //
         //   <input type="submit" value="Sign Up" className="login-form-submit" />
         // </form>
         // </div>
