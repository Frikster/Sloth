import React from 'react';
import {withRouter} from 'react-router';
// import ChannelListContainer from './channel_list/channel_list_container';

class PrivateChannelForm extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchChannels();
  }

  constructor(props) {
    super(props);
    this.state = {
      newChannelName: ''};
    this.handleCreateNewPrivateChannelSubmit = this.handleCreateNewPrivateChannelSubmit.bind(this);
  }

  handleCreateNewPrivateChannelSubmit(e) {
    this.props.processForm({name: this.state.newChannelName, direct_message_channel: true});
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  };

  render() {
    const privateChannels = this.props.privateChannels.map((privateChannel,i) => {
      return (<li key={i}>{privateChannel.name}</li>);
    });

    return (
      <div>
        <h1>Create New Private Channel</h1>
        <form onSubmit={this.handleCreateNewPrivateChannelSubmit}>
          <input
            type='text'
            value={this.state.newChannelName}
            onChange={this.update('newChannelName')}/>
          <input type='submit' value='GO'/>
          <ul>
            {privateChannels}
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(PrivateChannelForm);
