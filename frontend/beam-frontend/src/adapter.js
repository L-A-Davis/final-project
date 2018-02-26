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

const addProject = (p) => {
  return fetch(`${API_ROOT}/projects`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({project: p})
  }).then(res => res.json())
}

const saveModel = (p) => {
  return fetch(`${API_ROOT}/models`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({model: p})
  }).then(res => res.json())
}



export default {
  eventHandlers: {
     getProjects,
     addProject,
     saveModel,
     getModels
  },
  auth: {
    login,
    getLoggedInUser,
    signup
  }
}
