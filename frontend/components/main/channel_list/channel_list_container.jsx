import {connect} from 'react-redux';
import ChannelList from './channel_list';
import {logout} from '../../../actions/session_actions';
import {fetchChannels, createChannel} from '../../../actions/channel_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channels: Object.values(state.entities.channels)
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => logout()(dispatch),
    fetchChannels: () => dispatch(fetchChannels()),
    createChannel: (channel) => dispatch(createChannel(channel))
  };
};

export default connect(msp, mdp)(ChannelList);
