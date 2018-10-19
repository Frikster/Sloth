import React from 'react';
import {withRouter} from 'react-router';
// import ChannelListContainer from './channel_list/channel_list_container';

class PublicChannelForm extends React.Component {

  // componentDidMount() {
  //   this.props.fetchChannels();
  // }

  constructor(props) {
    super(props);
    this.state = {
      newChannelName: ''};
    // this.createNewChannel = this.createNewChannel.bind(this);
    this.handleCreateNewPublicChannelSubmit = this.handleCreateNewPublicChannelSubmit.bind(this);
  }

  // createNewChannel(e) {
  //   this.setState({
  //     creatingChannel: true
  //   });
  // };

  handleCreateNewPublicChannelSubmit(e) {
    this.props.processForm({name: this.state.newChannelName, direct_message_channel: false});
    this.props.closeModal();
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  };

  render() {

    return (
      <div className='public-channel-form-div'>
        <h1>Create a Channel</h1>
        <form onSubmit={this.handleCreateNewPublicChannelSubmit}>
          <input
            type='text'
            value={this.state.newChannelName}
            onChange={this.update('newChannelName')}
            placeholder='# e.g. leads'/>
          <input type='submit' value='GO'/>
        </form>
      </div>
    );
  }
}

export default withRouter(PublicChannelForm);
