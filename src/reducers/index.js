import { combineReducers } from 'redux';

import auth0 from '@reducers/auth0';
import user from '@reducers/user';

export default combineReducers({
  auth0,
  user
});