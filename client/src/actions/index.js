import axios from 'axios'
import { 
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_PRESCRIPTIONS,
  FETCH_COMPLIANCES,
  FETCH_COMPLIANCES_ERROR,
  SELECTED_USER,
  UPDATE_USER,
  UPDATE_USER_ERROR
} from './types'

const ROOT_URL = 'http://localhost:3090'

export function fetchUsers() {
  return function(dispatch) {
    sendFetchUsersRequest(dispatch)
  }
}

export function setSelectedUser(user) {
  return function(dispatch) {
    fetchPrescriptions(user._id, dispatch)
    fetchCompliances(user._id, dispatch)

    dispatch({ type: SELECTED_USER, payload: user })
  }
}

export function updateUser(values, dispatch) {
  const userId = values._id
  const url = `${ROOT_URL}/user/${userId}`

  return axios.put(url, {
    user_id: values._id,
    first_name: values.firstName,
    last_name: values.lastName,
    email: values.email,
    phone: values.phonenumber,
    provider: values.provider,
    program: values.program,
    doctor: values.doctor,
    insurance: values.insurance,
    pharmacy: values.pharmacyType
  })
  .then(response => {
    dispatch({ type: UPDATE_USER, payload: response.data})
    sendFetchUsersRequest(dispatch)
  })
  .catch(error => {
    dispatch({ type: UPDATE_USER_ERROR, payload: error })
  })
}

function sendFetchUsersRequest(dispatch) {
  const url = `${ROOT_URL}/users`

  axios.get(url)
    .then(response => {
      dispatch({ type: FETCH_USERS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: FETCH_USERS_ERROR, payload: error })
    })
}

function fetchPrescriptions(userId, dispatch) {
  const url = `${ROOT_URL}/prescriptions/${userId}`

  axios.get(url)
    .then(response => {
      dispatch({ type: FETCH_PRESCRIPTIONS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: FETCH_USERS_ERROR, payload: error })
    })
}

function fetchCompliances(userId, dispatch) {
  const url = `${ROOT_URL}/compliances/${userId}`

  axios.get(url)
    .then(response => {
      dispatch({ type: FETCH_COMPLIANCES, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: FETCH_COMPLIANCES_ERROR, payload: error })
    })
}
