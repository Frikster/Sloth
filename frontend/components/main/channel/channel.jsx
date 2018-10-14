import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MessageFormContainer from './message_form/message_form_container';
import ChannelHeaderContainer from './channel_header/channel_header_container';
import { withRouter } from 'react-router-dom';

class Channel extends React.Component {

  // componentDidMount() {
  //   this.props.fetchChannels();
  // }

  render() {

    return (
      <div className='channel-main'>
        <ChannelHeaderContainer />
        <h1>CHANNEL MAIN</h1>
        <MessageFormContainer />
      </div>
    );
  }
}

export default Channel;
