// frontend/reducers/entities_reducer.jsx
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer
});

export default entitiesReducer;
