import {connect} from 'react-redux';
import ChannelHeader from './channel_header';
import { withRouter } from 'react-router-dom';
// import {logout} from '../../actions/session_actions';
import {fetchChannel} from '../../../../actions/channel_actions';
import {fetchUsers} from '../../../../actions/user_actions';
import { getJoinedUsers } from '../../../../reducers/selectors';


const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.channels[ownProps.match.params.channelId],
    // numUsers: Object.values(state.entities.users).length, 
    numUsers: (channelId) => getJoinedUsers(state, channelId).length
  };
};

const mdp = (dispatch) => {
  return {
    // logout: () => logout()(dispatch),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default withRouter(connect(msp, mdp)(ChannelHeader));
