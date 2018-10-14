import {connect} from 'react-redux';
import ChannelHeader from './channel_header';
import { withRouter } from 'react-router-dom';
// import {logout} from '../../actions/session_actions';
import {fetchChannel} from '../../../../actions/channel_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.channels[ownProps.match.params.channelId],
  };
};

const mdp = (dispatch) => {
  return {
    // logout: () => logout()(dispatch),
    fetchChannel: (id) => dispatch(fetchChannel(id))
  };
};

export default withRouter(connect(msp, mdp)(ChannelHeader));
