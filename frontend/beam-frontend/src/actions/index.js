import adapter from '../adapter'
import mergerMath from './mergerMath'

export function updateNewProjectForm(formData) {
  return { type: "UPDATE_NEWPROJECT_FORM", payload: formData };
}

export function setProjectInfo(formData) {
  return { type: "SUBMIT_NEWPROJECT_FORM", payload: formData };
}

export function updateNewModelForm(formData) {
  return { type: "UPDATE_NEWMODEL_FORM", payload: formData };
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
      dispatch({ type: 'SAVE_BASICINFO_DATA', payload: resp})
    })
  }
}


export function updateEquityForm(formData) {
  return { type: "UPDATE_EQUITYINFO_FORM", payload: formData };
}

export function resetEquityInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.editEquityInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_EQUITY_DATA', payload: resp})
    })
  }
}

export function newEquityInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.saveEquityInfo(formData).then(resp => {
      dispatch({ type: 'SAVE_EQUITY_DATA', payload: resp})
    })
  }
}


export function updateOfferForm(formData) {
  return { type: "UPDATE_OFFER_FORM", payload: formData };
}

export function resetOfferInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.editOfferInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_OFFER_DATA', payload: resp})
    })
  }
}

export function newOfferInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.saveOfferInfo(formData).then(resp => {
      dispatch({ type: 'SAVE_OFFER_DATA', payload: resp})
    })
  }
}

export function updateCapitalizationForm(formData) {
  return { type: "UPDATE_CAPITALIZATION_FORM", payload: formData };
}

export function resetCapitalizationInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.editCapitalizationInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_CAPITALIZATION_DATA', payload: resp})
    })
  }
}

export function newCapitalizationInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.saveCapitalizationInfo(formData).then(resp => {
      dispatch({ type: 'SAVE_CAPITALIZATION_DATA', payload: resp})
    })
  }
}


export function updateCashFlowForm(formData) {
  return { type: "UPDATE_CASHFLOW_FORM", payload: formData };
}


export function resetCashFlowInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.editCashFlowInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_CASHFLOW_DATA', payload: resp})
    })
  }
}

export function newCashFlowInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.saveCashFlowInfo(formData).then(resp => {
      dispatch({ type: 'SAVE_CASHFLOW_DATA', payload: resp})
    })
  }
}


export function updateTransactionCostForm(formData) {
  return { type: "UPDATE_TRANSACTIONCOSTS_FORM", payload: formData };
}

export function resetTransactionCostInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.editTransactionCostInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_TRANSACTIONCOSTS_DATA', payload: resp})
    })
  }
}

export function newTransactionCostInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.saveTransactionCostInfo(formData).then(resp => {
      dispatch({ type: 'SAVE_TRANSACTIONCOSTS_DATA', payload: resp})
    })
  }
}

export function updateTransactionAdjustmentsForm(formData) {
  return { type: "UPDATE_TRANSACTIONADJUSTMENTS_FORM", payload: formData };
}


export function resetSynergiesInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.editSynergiesInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_SYNERGIES_DATA', payload: resp})
    })
  }
}

export function newSynergiesInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.saveSynergiesInfo(formData).then(resp => {
      dispatch({ type: 'SAVE_SYNERGIES_DATA', payload: resp})
    })
  }
}

export function resetNewFinancingInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.editNewFinancingInfo(formData).then(resp => {
      dispatch({ type: 'UPDATE_NEWFINANCING_DATA', payload: resp})
    })
  }
}

export function newNewFinancingInfo(formData) {
  return dispatch => {
    adapter.eventHandlers.saveNewFinancingInfo(formData).then(resp => {
      dispatch({ type: 'SAVE_NEWFINANCING_DATA', payload: resp})
    })
  }
}



export function selectExistingProject(id) {
  return { type: "SELECT_PROJECT", payload: id };
}

// export function selectExistingModel(id) {
//   return { type: "SELECT_MODEL", payload: id };
// }

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

export function addNewModel(info) {
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


export function resetModelData() {
  return { type: "RESET_MODEL_DATA", payload: "" };
}

export function resetFormData() {
  return { type: "CLEAR_FORMS", payload: "" };
}

export function changeCompletedStatus(form_name) {
  return { type: "CHANGE_FORM_STATUS", payload: form_name };
}

export function handleShowOutputs() {
  return { type: "SHOW_OUTPUTS", payload: "" };
}

export function handleCalculateOutputs(info) {
    let results = mergerMath.calculateMergerMath(info)
    return { type: "CALCULATE_OUTPUTS", payload: results };
}
