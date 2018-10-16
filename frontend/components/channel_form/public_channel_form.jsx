import React from 'react';
import ChannelListContainer from './channel_list/channel_list_container';
import ChannelContainer from './channel/channel_container';

class PublicChannelForm extends React.Component {

  // componentDidMount() {
  //   this.props.fetchChannels();
  // }

  constructor(props) {
    super(props);
    this.state = {
      newChannelName: ''};
    this.createNewChannel = this.createNewChannel.bind(this);
    this.handleCreateNewPublicChannelSubmit = this.handleCreateNewPublicChannelSubmit.bind(this);
  }

  createNewChannel(e) {
    this.setState({
      creatingChannel: true
    });
  };

  handleCreateNewPublicChannelSubmit(e) {
    this.props.createChannel({name: this.state.newChannelName, direct_message_channel: false});
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  };

  render() {

    return (
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
  }
}

export default withRouter(PublicChannelForm);
