import axios from 'axios'
import { 
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_PRESCRIPTIONS,
  FETCH_COMPLIANCES,
  FETCH_COMPLIANCES_ERROR,
  SELECTED_USER
} from './types'

const ROOT_URL = 'http://localhost:3090'

export function fetchUsers() {
  return function(dispatch) {
    const url = `${ROOT_URL}/users`

    axios.get(url)
      .then(response => {
        dispatch({ type: FETCH_USERS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_USERS_ERROR, payload: error })
      })
  }
}

export function setSelectedUser(user) {
  return function(dispatch) {
    fetchPrescriptions(user._id, dispatch)
    fetchCompliances(user._id, dispatch)

    dispatch({ type: SELECTED_USER, payload: user })
  }
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
