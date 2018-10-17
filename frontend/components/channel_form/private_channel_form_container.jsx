import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import PrivateChannelForm from './private_channel_form';
import {fetchUsers} from '../../actions/user_actions';
import {fetchChannels} from '../../actions/channel_actions';
import {getAllUsernames, getAllPrivateChannels} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'new_private_channel',
    usernames: getAllUsernames(state),
    privateChannels: getAllPrivateChannels(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (channel) => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateChannelForm);
