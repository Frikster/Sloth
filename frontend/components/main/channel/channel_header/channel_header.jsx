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
    
    return <div className="channel-header">
        <h1>{channelName}</h1>
        <span className="channel-header-numUsers-and-icon">
          <i className="far fa-user" />
          <span className="channel-header-numUsers">
            {this.props.numUsers(this.props.match.params.channelId)}
          </span>
        </span>
        {/* These are just too damn ugly */}
        {/* <i className="fas fa-info-circle" />
        <i className="fas fa-cog" />
        <input type="text" name="DummySearch" value="&#xf002;" className="fas fa-search" /> */}
      </div>;
  }
}

export default ChannelHeader;
