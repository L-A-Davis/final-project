import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import logo from '../DAlogoBlue2.png'

const HeaderForPage = (props) => {
  return (
    <Header as='h1'>
      <Image circular src={logo} />
      {' '}Digital Analyst
    </Header>
  )
}

export default HeaderForPage;


// <header className="App-header">
//   <h1 className="App-title">Digital Analyst</h1>
// </header>
