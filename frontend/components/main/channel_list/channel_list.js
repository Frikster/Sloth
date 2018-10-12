import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ChannelList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {creatingChannel: false, newChannelName: ''};
    this.createNewChannel = this.createNewChannel.bind(this);
    this.handleCreateNewPublicChannelSubmit = this.handleCreateNewPublicChannelSubmit.bind(this);
    this.handleCreateNewPrivateChannelSubmit = this.handleCreateNewPrivateChannelSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  createNewChannel(e) {
    this.setState({
      creatingChannel: true
    });
  };

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  };

  handleCreateNewPublicChannelSubmit(e) {
    this.props.createChannel({name: this.state.newChannelName, direct_message_channel: false});
  }

  handleCreateNewPrivateChannelSubmit(e) {
    this.props.createChannel({name: this.state.newChannelName, direct_message_channel: true});
  }

  render() {
    console.log(this.props.channels);
    const channelNames = this.props.channels.map((channel, i) => {
      return (<li key={i}>{channel.name}</li>);
    });

    let toRender = (
      <div className='channel-list-container'>
        <div className='channel-list-container-header'>
          <h3>App Academy</h3>
          <button onClick={this.props.logout}>logout</button>
        </div>

        <div className='public-channels-list'>
          <p>Public Channels</p>
          <span className='channel-list-plus-circle'>
            <i onClick={this.createNewChannel} className='fas fa-plus-circle'></i>
          </span>
          <ul>
            {channelNames}
          </ul>
        </div>

        <div className='private-channels-list'>
          <p>Private Channels</p>
          <ul>
            <li>{this.props.currentUser.email}</li>
          </ul>
        </div>

      </div>
    );

    if (this.state.creatingChannel) {
      toRender = (
        <div>
          <h1>Create New Channel</h1>
          <form onSubmit={this.handleCreateNewPublicChannelSubmit}>
            <input
              type='text'
              value={this.state.newChannelName}
              onChange={this.update('newChannelName')}/>
            <input type='submit' value='GO'/>
          </form>
        </div>
      );
    };

    return (
      <div>
        {toRender}
      </div>
    );
  }
}

export default ChannelList;
