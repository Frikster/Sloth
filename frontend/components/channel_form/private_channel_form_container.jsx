import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import PrivateChannelForm from './private_channel_form';
import {fetchUsers} from '../../actions/user_actions';
import {fetchChannels, createChannel} from '../../actions/channel_actions';
import {getAllUsernames, getAllPrivateChannels, getJoinedUsers, getAllPrivateChannelsOfCurrentUser} from '../../reducers/selectors';
import {createUserChannel} from '../../actions/userChannel_actions';;

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'new_private_channel',
    usernames: getAllUsernames(state),
    privateChannels: getAllPrivateChannelsOfCurrentUser(state),
    currentUser: state.entities.users[state.session.id],
    getJoinedUsers: (channelId) => getJoinedUsers(state, channelId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (channel, selectedUsers) => dispatch(createChannel(channel)).then(res => {
      selectedUsers.forEach(user => {
        dispatch(createUserChannel({user_id: user.id, channel_id: res.payload.channel.id}));
      });
    }),
    createChannel: (channel) => dispatch(createChannel(channel)),
    createUserChannel: (userChannel) => dispatch(createUserChannel(userChannel)),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateChannelForm);
