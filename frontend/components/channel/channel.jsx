import React from 'react';
import { Link } from 'react-router-dom';

class Channel extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {

    return (
      <div>
        <div className='channel-list-container'>
          <div className='channel-list-container-header'></div>
            <h3>App Academy</h3>
          <div className='public-channels-list'>
            <p>Public Channels</p>
          </div>
          <div className='private-channels-list'>
            <p>Private Channels</p>
          </div>
        </div>

        <div className='channel-main'>
          <div className='channel-header'>

          </div>

        </div>
        <p>Welcome {this.props.currentUser.username}</p>
        <button onClick={this.props.logout}>logout</button>
      </div>
    );
  }
}

export default Channel;
