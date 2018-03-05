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

const STOCK_URL =`https://api.iextrading.com/1.0/stock`

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
  return fetch(`${API_ROOT}/basic_info_data/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({basic_info_datum: {model_id: m.model_id, company: m.company, ticker: m.ticker, codename: m.codename, acquiror: m.acquiror}})
}).then(res => res.json())
}

const saveEquityInfo = (m) => {
  return fetch(`${API_ROOT}/equity_info_data`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({equity_info_datum: {model_id: m.model_id, company: m.company, currentSharePrice: m.currentSharePrice, shares: m.shares, dividend: m.dividend}})
  }).then(res => res.json())
}

const editEquityInfo = (m) => {
  return fetch(`${API_ROOT}/equity_info_data/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({equity_info_datum: {model_id: m.model_id, company: m.company, currentSharePrice: m.currentSharePrice, shares: m.shares, dividend: m.dividend}})
}).then(res => res.json())
}

const saveOfferInfo = (m) => {
  return fetch(`${API_ROOT}/offer_info_data`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({offer_info_datum: {model_id: m.model_id, offer_type: m.offer_type, offer_metric: m.offer_metric, percentage_stock: m.percentage_stock}})
  }).then(res => res.json())
}

const editOfferInfo = (m) => {
  return fetch(`${API_ROOT}/offer_info_data/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({offer_info_datum: {model_id: m.model_id, offer_type: m.offer_type, offer_metric: m.offer_metric, percentage_stock: m.percentage_stock}})
}).then(res => res.json())
}

const saveCapitalizationInfo = (m) => {
  return fetch(`${API_ROOT}/capitalization_info_data`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({capitalization_info_datum: {model_id: m.model_id, company: m.company, item_name: m.item_name, item_type: m.item_type, repay: m.repay, rate: m.rate, amount: m.amount}})
  }).then(res => res.json())
}

const editCapitalizationInfo = (m) => {
  return fetch(`${API_ROOT}/capitalization_info_data/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({capitalization_info_datum: {model_id: m.model_id, company: m.company, item_name: m.item_name, item_type: m.item_type, repay: m.repay, rate: m.rate, amount: m.amount}})
}).then(res => res.json())
}


const saveCashFlowInfo = (m) => {
  return fetch(`${API_ROOT}/cash_flow_info_data`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({cash_flow_info_datum: {model_id: m.model_id, company: m.company, item_name: m.item_name, amount_year1: m.amount_year1}})
  }).then(res => res.json())
}

const editCashFlowInfo = (m) => {
  return fetch(`${API_ROOT}/cash_flow_info_data/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({cash_flow_info_datum: {model_id: m.model_id, company: m.company, item_name: m.item_name, amount_year1: m.amount_year1}})
}).then(res => res.json())
}

const saveTransactionCostInfo = (m) => {
  return fetch(`${API_ROOT}/transaction_costs`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({transaction_cost: {model_id: m.model_id, name: m.name, input_type: m.input_type, data_input: m.data_input}})
  }).then(res => res.json())
}


const editTransactionCostInfo = (m) => {
  return fetch(`${API_ROOT}/transaction_costs/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({transaction_cost: {model_id: m.model_id, name: m.name, input_type: m.input_type, data_input: m.data_input}})
}).then(res => res.json())
}

const saveSynergiesInfo = (m) => {
  return fetch(`${API_ROOT}/synergies_info_data`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({synergies_info_datum: {model_id: m.model_id, item_name: m.item_name, input_type: m.input_type, input_amount: m.input_amount}})
  }).then(res => res.json())
}

const editSynergiesInfo = (m) => {
  return fetch(`${API_ROOT}/synergies_info_data/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({synergies_info_datum: {model_id: m.model_id, item_name: m.item_name, input_type: m.input_type, input_amount: m.input_amount}})
}).then(res => res.json())
}

const saveNewFinancingInfo = (m) => {
  return fetch(`${API_ROOT}/new_financing_info_data`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({new_financing_info_datum: {model_id: m.model_id, item_name: m.item_name, item_type: m.item_type, amount: m.amount, rate: m.rate, plug: m.plug}})
  }).then(res => res.json())
}

const editNewFinancingInfo = (m) => {
  return fetch(`${API_ROOT}/new_financing_info_data/${m.id}`, {
  method: 'PATCH',
  headers: headers(),
  body: JSON.stringify({new_financing_info_datum: {model_id: m.model_id, item_name: m.item_name, item_type: m.item_type, amount: m.amount, rate: m.rate, plug: m.plug}})
}).then(res => res.json())
}

const handleErrors = (response) => {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

const getTradingData = (ticker) => {
  return fetch(`${STOCK_URL}/${ticker}/chart/1y`).then(handleErrors).then(resp=> resp.json()).catch(error => console.log(error))
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
     editBasicInfo,
     saveEquityInfo,
     editEquityInfo,
     saveOfferInfo,
     editOfferInfo,
     saveCapitalizationInfo,
     editCapitalizationInfo,
     saveCashFlowInfo,
     editCashFlowInfo,
     saveTransactionCostInfo,
     editTransactionCostInfo,
     saveSynergiesInfo,
     editSynergiesInfo,
     saveNewFinancingInfo,
     editNewFinancingInfo,
     getTradingData
  },
  auth: {
    login,
    getLoggedInUser,
    signup
  }
}
