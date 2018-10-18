import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import JoinChannelForm from './join_channel_form';
import {fetchChannels} from '../../actions/channel_actions';
import {createUserChannel, fetchUserChannels} from '../../actions/userChannel_actions';;
import {getAllPublicChannels, getJoinedChannels} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'join_channel',
    currentUser: state.entities.users[state.session.id],
    getAllPublicChannels: getAllPublicChannels(state),
    getJoinedChannels: getJoinedChannels(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (userChannel) => {
      return dispatch(createUserChannel(userChannel))
    },
    closeModal: () => dispatch(closeModal()),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchUserChannels: () => dispatch(fetchUserChannels()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinChannelForm);
