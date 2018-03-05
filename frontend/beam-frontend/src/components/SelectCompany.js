import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'

let companies = [{key: 1, value: 1, id: 1, text: "Hansen-Rogahn"}, {key: 2, value:2, id: 2, text: "Wehner-Abshire"}]

const SelectCompany = (props) => {
  return (

    <Menu>
       <Dropdown
       // selection
       closeOnChange
       placeholder='Select your company'
       name="company_id"
       onChange={props.onChange}
       options={companies}/>
    </Menu>
   )
 }

export default SelectCompany;


// <select
//   onChange={props.onChange}
//   name="company_id"
//   >
//   {companies.map((company) =>
//     <option key={company.id} value={company.id}>{company.name}</option>
//   )}
//
// </select>
