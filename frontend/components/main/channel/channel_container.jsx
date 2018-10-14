import {connect} from 'react-redux';
import Channel from './channel';
import { withRouter } from 'react-router-dom';
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

export default withRouter(connect(msp, mdp)(Channel));
