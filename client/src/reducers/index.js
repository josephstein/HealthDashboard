import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import SelectedUserReducer from './reducer_selected_user'

const rootReducer = combineReducers({
  users: UsersReducer,
  selected_user: SelectedUserReducer
});

export default rootReducer;
