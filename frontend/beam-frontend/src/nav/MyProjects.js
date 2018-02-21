import React from 'react';

const MyProjects = (props) => {
  return (
    <div>
    <select>
    {props.projects.map((project) =>
      <option key={project.id} value={project.id}>{project.name}</option>
    )}
    </select>
    </div>
  )
}

export default MyProjects;
