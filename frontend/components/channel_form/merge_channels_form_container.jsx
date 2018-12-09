import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import MergeChannelsForm from "./merge_channels_form";
import { fetchChannels } from '../../actions/channel_actions';
import { fetchMessages } from '../../actions/message_actions';
import { createUserChannel, fetchUserChannels } from '../../actions/userChannel_actions';;
import { getMergedMessages, getJoinedChannels } from "../../reducers/selectors";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'merge_channels',
        currentUser: state.entities.users[state.session.id],
        getMergedMessages: (channelName1, channelName2) => getMergedMessages(state, channelName1, channelName2),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (channelDrag, channelDrop) => {
            return dispatch(mergeChannels(channelDrag, channelDrop));
        }, //TODO
        closeModal: () => dispatch(closeModal()),
        fetchMessages: () => dispatch(fetchMessages()),
        fetchChannels: () => dispatch(fetchChannels()),
        fetchUserChannels: () => dispatch(fetchUserChannels()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MergeChannelsForm);
