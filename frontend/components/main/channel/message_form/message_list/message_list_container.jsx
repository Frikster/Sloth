import {connect} from 'react-redux';
import MessageList from './message_list';
import { withRouter } from 'react-router-dom';
// import {logout} from '../../actions/session_actions';
import {fetchMessages} from '../../../../../actions/message_actions';
import {getChannelMessages} from '../../../../../reducers/selectors';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channel: state.entities.channels[ownProps.match.params.channelId],
    getChannelMessages: getChannelMessages(state, ownProps.match.params.channelId)
  };
};

const mdp = (dispatch) => {
  return {
    // logout: () => logout()(dispatch),
    fetchMessages: () => dispatch(fetchMessages())
  };
};

export default withRouter(connect(msp, mdp)(MessageList));
