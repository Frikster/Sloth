import {connect} from 'react-redux';
import ChannelList from './channel_list';
import {logout} from '../../../actions/session_actions';
import {fetchChannels, fetchChannel, createChannel} from '../../../actions/channel_actions';
import {fetchUserChannels} from '../../../actions/userChannel_actions';
import {getJoinedChannels} from '../../../reducers/selectors';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channels: getJoinedChannels(state),
    //TODO: Replace above with this
    // channels: Object.values(state.entities.channels),
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => logout()(dispatch),
    fetchChannels: () => dispatch(fetchChannels()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    mergeChannels: (channelDrag, channelDrop) => dispatch(), //TODO
    fetchUserChannels:  () => dispatch(fetchUserChannels()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default withRouter(connect(msp, mdp)(ChannelList));
