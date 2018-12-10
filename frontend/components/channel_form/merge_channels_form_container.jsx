import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import MergeChannelsForm from "./merge_channels_form";
import { fetchChannels } from '../../actions/channel_actions';
import { fetchMessages } from '../../actions/message_actions';
import { createUserChannel, fetchUserChannels } from '../../actions/userChannel_actions';;
import { getMergedMessages, getChannelByName, getJoinedChannels } from "../../reducers/selectors";
import { createChannel } from '../../actions/channel_actions';
import { createMessage } from "../../actions/message_actions";
// import { createMessage, receiveMessage } from '../../actions/message_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'merge_channels',
        currentUser: state.entities.users[state.session.id],
        getMergedMessages: (channelName1, channelName2) => getMergedMessages(state, channelName1, channelName2),
        getChannelByName: (channelName) => getChannelByName(state, channelName)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createChannel: (channel) => dispatch(createChannel(channel)),
        createMessage: (message) => dispatch(createMessage(message)),
        closeModal: () => dispatch(closeModal()),
        fetchMessages: () => dispatch(fetchMessages()),
        fetchChannels: () => dispatch(fetchChannels()),
        fetchUserChannels: () => dispatch(fetchUserChannels()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MergeChannelsForm);
