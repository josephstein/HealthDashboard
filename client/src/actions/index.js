import axios from 'axios'
import { 
  FETCH_USERS,
  FETCH_USERS_ERROR
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
        dispatch({ type: FETCH_USERS_ERROR, payload: error.response.data.error })
      })
  }
}
