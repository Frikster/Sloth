import { connect } from 'react-redux';
import React from 'react';
// import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PublicChannelForm from './public_channel_form';
import {createChannel} from '../../actions/channel_actions';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'new_public_channel',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (channel) => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicChannelForm);
