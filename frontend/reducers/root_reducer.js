// frontend/reducers/entities_reducer.jsx
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './session_errors_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
