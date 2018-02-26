import React from 'react';

let model_types = [{id: "prelim_merger", name: "Preliminary Merger Analytics"}, {id: "fairness", name: "Fairness Opinion Support"}]


const ModelTypeSelect = (props) => {
  return (

    <select
       onChange={props.handleChange}
       name="Model_type"
       defaultValue=""
       >
        <option value="" disabled hidden>Select</option>
       {model_types.map((model_type) =>
         <option key={model_type.id} value={model_type.id}>{model_type.name}</option>
       )}

    </select>

  )
}

export default ModelTypeSelect;
