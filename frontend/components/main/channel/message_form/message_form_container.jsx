import {connect} from 'react-redux';
import MessageForm from './message_form';
// import {logout} from '../../actions/session_actions';
// import {fetchChannels, fetchChannel} from '../../actions/channel_actions';

const msp = (state) => {
  return {
    // currentUser: state.entities.users[state.session.id],
    // channels: Object.values(state.entities.channels)
  };
};

const mdp = (dispatch) => {
  return {
    // logout: () => logout()(dispatch),
    // fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(msp, mdp)(MessageForm);
