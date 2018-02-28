import React from 'react';
import adapter from '../adapter';
import SelectCompany from '../components/SelectCompany';

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
     this.setState({
       [e.target.name]: e.target.value
     })
   }

  render(){
    return (
      <div>
      <h2>Join Here!</h2>
      <form className="form two-columns-form login" onSubmit={this.handleSignup}>
        <label>User Name</label>
        <input value={this.state.user_name} name="user_name" type="text" placeholder="User Name" onChange={this.onInputChange}/>

        <label>Email</label>
        <input value={this.state.email} name="email" type="email" placeholder="Email" onChange={this.onInputChange}/>

       <label>Select Company</label>
         <SelectCompany onChange={this.props.onInputChange}/>

        <label>Phone Number</label>
        <input value={this.state.phone} name="phone" type="text" placeholder="Phone Number" onChange={this.onInputChange}/>

        <label>address...make own thig</label>
        <input value={this.state.address} name="address" type="text" placeholder="Address" onChange={this.onInputChange}/>

        <label>Password</label>
        <input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onInputChange}/>

        <label>Password Confirmation</label>
        <input value={this.state.password_confirmation} name="password_confirmation" type="password" placeholder="Password Confirmation" onChange={this.onInputChange}/> 

        <input type="submit" value="Sign Up" />
      </form>
      </div>
    )
  }

  }
  export default Signup;


         // <label>Select Company</label>
         //   <SelectCompany
         //      // companies={this.props.companies}
         //      onChange={this.props.onInputChange}/> <br/>
