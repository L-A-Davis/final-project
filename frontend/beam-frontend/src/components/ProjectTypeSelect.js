import React from 'react';

let deal_types = [{id: "merger", name: "Public Company Merger"}, {id: "lbo", name: "Privitization"}]


const ProjectTypeSelect = (props) => {
  return (

    <select
       onChange={props.handleChange}
       name="Deal_type"
       defaultValue=""
       >
        <option value="" disabled hidden>Select</option>
       {deal_types.map((deal_type) =>
         <option key={deal_type.id} value={deal_type.id}>{deal_type.name}</option>
       )}

    </select>

  )
}

export default ProjectTypeSelect;
