import { combineReducers } from 'redux';
import  login from './login.reducer';

const reducer = combineReducers({
  login,
});

export default reducer;
