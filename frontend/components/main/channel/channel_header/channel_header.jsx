import React from 'react';
import { Link } from 'react-router-dom';

class ChannelHeader extends React.Component {

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId);
    this.props.fetchUsers();
  }

  render() {
    let channelName = '';
    if (this.props.channel) {
      channelName = this.props.channel.name;
    }

    return (
      <div className='channel-header'>
        <h1>{channelName}</h1>
        <span className='channel-header-numUsers-and-icon'><i className="far fa-user"></i><span className='channel-header-numUsers'>{this.props.numUsers}</span></span>
      </div>
    );
  }
}

export default ChannelHeader;
