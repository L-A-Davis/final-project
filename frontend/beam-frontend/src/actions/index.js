import adapter from '../adapter'

export function updateNewProjectForm(formData) {
  return { type: "UPDATE_NEWPROJECT_FORM", payload: formData };
}

export function setProjectInfo(formData) {
  return { type: "SUBMIT_NEWPROJECT_FORM", payload: formData };
}

export function updateBasicInfoForm(formData) {
  return { type: "UPDATE_BASICINFO_FORM", payload: formData };
}

export function setBasicInfo(formData) {
  return { type: "UPDATE_MODELDATA", payload: formData };
}

export function setEquityInfo(formData) {
  return { type: "UPDATE_MODELDATA", payload: formData };
}

export function updateEquityForm(formData) {
  return { type: "UPDATE_EQUITYINFO_FORM", payload: formData };
}

export function setOfferInfo(formData) {
  return { type: "UPDATE_MODELDATA", payload: formData };
}

export function updateOfferForm(formData) {
  return { type: "UPDATE_OFFER_FORM", payload: formData };
}

export function selectExistingProject(id) {
  return { type: "SELECT_PROJECT", payload: id };
}

export function fetchExistingProjects() {
  return dispatch => {
  adapter.eventHandlers.getProjects().then(data => {
      dispatch({ type: "PROJECTS_LOAD", payload: data });
    });
  };
}

export function addNewProject(project) {
  return dispatch => {
    adapter.eventHandlers.addProject(project).then(resp => {
      dispatch({ type: 'SET_NEW_PROJECT', payload: resp})
    })
  }
}
