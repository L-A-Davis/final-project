const token = localStorage.getItem('token')

const headers = () => {
  return {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
  }
}

const Singup_headers = () => {
  return {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
 }
}

const URL_ROOT = 'http://localhost:3001'
const API_ROOT = `${URL_ROOT}/api/v1`

const login = (email, password) => {
  return fetch(`${URL_ROOT}/login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify( {email, password})
  }).then(res => res.json())
}

const signup = (signupBody) => {
  return fetch(`${URL_ROOT}/signup`, {
    method: 'POST',
    headers: Singup_headers(),
    body: JSON.stringify({user: signupBody})
  }).then(res => res.json())
}

const getLoggedInUser = () => {
  return fetch(`${URL_ROOT}/current_user`, {
    headers: headers()
  }).then(res => res.json())
}

const getProjects = (user_id) => {
  return fetch(`${API_ROOT}/users/${user_id}`, {
    headers: headers()
  }).then(res => res.json())
}

const getModels = (project_id) => {
  return fetch(`${API_ROOT}/projects/${project_id}`, {
    headers: headers()
  }).then(res => res.json())
}

const getModelParts = (model_id) => {
  return fetch(`${API_ROOT}/models/${model_id}`, {
    headers: headers()
  }).then(res => res.json())
}

const addProject = (p) => {
  return fetch(`${API_ROOT}/projects`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({project: p})
  }).then(res => res.json())
}

const saveModel = (m) => {
  return fetch(`${API_ROOT}/models`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({model: m})
  }).then(res => res.json())
}

const editModel = (m) => {
  console.log(m.data)
  return fetch(`${API_ROOT}/models/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({model: {name: m.name, project_id: m.project_id, data: m.data, model_type: m.model_type}})
}).then(res => res.json())
}

const saveBasicInfo = (m) => {
  return fetch(`${API_ROOT}/basic_info_data`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({basic_info_datum: {model_id: m.model_id, company: m.company, ticker: m.ticker, codename: m.codename, acquiror: m.acquiror}})
  }).then(res => res.json())
}

const editBasicInfo = (m) => {
  console.log(m.data)
  return fetch(`${API_ROOT}/basic_info_data/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({basic_info_datum: {model_id: m.model_id, company: m.company, ticker: m.ticker, codename: m.codename, acquiror: m.acquiror}})
}).then(res => res.json())
}


export default {
  eventHandlers: {
     getProjects,
     addProject,
     saveModel,
     getModels,
     getModelParts,
     editModel,
     saveBasicInfo,
     editBasicInfo
  },
  auth: {
    login,
    getLoggedInUser,
    signup
  }
}
