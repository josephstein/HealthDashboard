import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import SelectedUserReducer from './reducer_selected_user'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  users: UsersReducer,
  selectedUser: SelectedUserReducer,
  form: formReducer
});

export default rootReducer;
