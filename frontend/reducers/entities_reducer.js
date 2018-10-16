// frontend/reducers/entities_reducer.jsx
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import userChannelsReducer from './user_channels_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  userChannels: userChannelsReducer,
});

export default entitiesReducer;
