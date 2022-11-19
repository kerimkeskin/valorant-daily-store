import { authService } from './../services/auth-service';
import { combineReducers } from 'redux';

export default combineReducers({
  [authService.reducerPath]: authService.reducer,
});
