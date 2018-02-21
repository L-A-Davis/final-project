import React from 'react';
import { Link } from 'react-router-dom';
import MyProjects from './MyProjects';

const Navbar = (props) => {

const loggedIn = !!props.currentUser

return (
  <nav>
   <div>
    <ul>
     { loggedIn ?
       <li><a onClick={props.logOut}>Logout</a></li>
      :
       <div>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Sing Up</Link></li>
       </div>
     }
     {
       loggedIn &&
       <div>
         <li><Link to="/profile">Profile</Link></li>
         <li><MyProjects projects={props.projects} onChange={props.onChange}/></li>
       </div>
     }
     </ul>
   </div>
  </nav>
)

}

export default Navbar
