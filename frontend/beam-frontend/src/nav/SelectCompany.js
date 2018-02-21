import React from 'react';

let companies = [{id: 1, name: "Hansen-Rogahn"}, {id:2, name: "Wehner-Abshire"}]

const SelectCompany = (props) => {
  return (

    <select
       onChange={props.onChange}
       name="company_id"
       >
       {companies.map((company) =>
         <option key={company.id} value={company.id}>{company.name}</option>
       )}

    </select>

  )
}

export default SelectCompany;
