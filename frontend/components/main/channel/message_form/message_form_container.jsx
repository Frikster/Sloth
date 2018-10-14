import {connect} from 'react-redux';
import MessageForm from './message_form';
import { withRouter } from 'react-router-dom';

// import {logout} from '../../actions/session_actions';
// import {fetchChannels, fetchChannel} from '../../actions/channel_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.channels[ownProps.match.params.channelId],
  };
};

const mdp = (dispatch) => {
  return {
    // logout: () => logout()(dispatch),
    // fetchChannels: () => dispatch(fetchChannels())
  };
};

export default withRouter(connect(msp, mdp)(MessageForm));
