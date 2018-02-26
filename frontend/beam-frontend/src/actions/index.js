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

export function resetBasicInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.editBasicInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_BASICINFO_DATA', payload: resp})
    })
  }
}

export function newBasicInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.saveBasicInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_BASICINFO_DATA', payload: resp})
    })
  }
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

export function setCapitalizationInfo(formData) {
  return { type: "UPDATE_MODELDATA", payload: formData };
}

export function updateCapitalizationForm(formData) {
  return { type: "UPDATE_CAPITALIZATION_FORM", payload: formData };
}

export function setCashFlowInfo(formData) {
  return { type: "UPDATE_MODELDATA", payload: formData };
}

export function updateCashFlowForm(formData) {
  return { type: "UPDATE_CASHFLOW_FORM", payload: formData };
}
export function setTransactionCostsInfo(formData) {
  return { type: "UPDATE_MODELDATA", payload: formData };
}

export function updateTransactionCostsForm(formData) {
  return { type: "UPDATE_TRANSACTIONCOSTS_FORM", payload: formData };
}



export function selectExistingProject(id) {
  return { type: "SELECT_PROJECT", payload: id };
}

export function selectExistingModel(id) {
  return { type: "SELECT_MODEL", payload: id };
}

export function fetchExistingProjects(id) {
  return dispatch => {
  adapter.eventHandlers.getProjects(id).then(data => {
      dispatch({ type: "PROJECTS_LOAD", payload: data.projects });
    });
  };
}

export function fetchExistingModels(id) {
  return dispatch => {
  adapter.eventHandlers.getModels(id).then(data => {
      dispatch({ type: "MODELS_LOAD", payload: data.models });
    });
  };
}

export function fetchModelParts(id) {
  return dispatch => {
  adapter.eventHandlers.getModelParts(id).then(data => {
      dispatch({ type: "MODEL_PARTS_LOAD", payload: data });
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

export function saveModel(info) {
  return dispatch => {
    adapter.eventHandlers.saveModel(info).then(resp => {
      dispatch({ type: 'SET_NEW_MODEL', payload: resp})
    })
  }
}

export function editModel(info) {
  return dispatch => {
    adapter.eventHandlers.editModel(info).then(resp => {
      dispatch({ type: 'EDIT_MODEL', payload: resp})
    })
  }
}
