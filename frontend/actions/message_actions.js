export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
import * as messageAPI from '../util/message_api_util';

export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchMessages = () => (dispatch) => {
  return messageAPI.fetchMessages().then(res => dispatch(receiveMessages(res)));
};

export const fetchMessage = (id) => (dispatch) => {
  return messageAPI.fetchMessages(id).then(res => dispatch(receiveMessage(res)));
};

export const createMessage = (message) => (dispatch) => {
  return messageAPI.createMessage(message).then(res => dispatch(receiveMessage(res)));
};
