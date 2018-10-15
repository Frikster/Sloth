// jscs:disable maximumLineLength
import {connect} from 'react-redux';
import MessageForm from './message_form';
import { withRouter } from 'react-router-dom';
import {createMessage, receiveMessage} from '../../../../actions/message_actions';

// import {logout} from '../../actions/session_actions';
// import {fetchChannels, fetchChannel} from '../../actions/channel_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.channels[ownProps.match.params.channelId]
  };
};

const mdp = (dispatch) => {
  return {
    // logout: () => logout()(dispatch),
    // createMessage: (message) => {
    //   dispatch(createMessage(message));
    // },
    newMessage: (message) => dispatch(receiveMessage(message))
  };
};

export default withRouter(connect(msp, mdp)(MessageForm));
