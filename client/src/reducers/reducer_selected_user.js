import { 
  FETCH_PRESCRIPTIONS,
  FETCH_COMPLIANCES,
  SELECTED_USER
 } from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRESCRIPTIONS:
      return { ...state, 'prescriptions': action.payload }
    case FETCH_COMPLIANCES:
      return { ...state, 'compliances': action.payload }
    case SELECTED_USER:
      return { ...state, 'data': action.payload }
    default:
      return state
  }
}