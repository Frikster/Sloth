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
      newChannelName: '',
      selectedUsers: [],
      filteredPrivateChannels: this.props.privateChannels
    };
    this.handleCreateNewPrivateChannelSubmit = this.handleCreateNewPrivateChannelSubmit.bind(this);
    this.addUsersFromChannel = this.addUsersFromChannel.bind(this);
    this.filterChannelList = this.filterChannelList.bind(this);
  }

  handleCreateNewPrivateChannelSubmit(e) {
    // this.props.createChannel({name: this.state.newChannelName, direct_message_channel: true})
    // this.state.selectedUsers.forEach(user => {
    //   this.props.createUserChannel({user_id: user.id, channel_id: })
    // });
    this.props.processForm({name: this.state.newChannelName, direct_message_channel: true}, this.state.selectedUsers); //TODO: ask if there was a point to using polymorphism for modals? Too sleepy to think right now
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  };

  addUsersFromChannel(privateChannel) {
    let channelUsers = this.props.getJoinedUsers(privateChannel.id);
    let channelUsersIds = channelUsers.map(user => user.id);
    return (e) => {
      // const valueToAdd = e.target.textContent || e.target.innerText;
      // if (channelUsersIds.includes(this.props.currentUser.id)) {
      //   // TODO: go to personal direct channel if it is clicked
      //   return;
      // }
      let selectedUsersDup =  this.state.selectedUsers.slice(0);
      // Push all users from this channel into the state
      channelUsers.forEach(user => {
        if (!selectedUsersDup.includes(user) && user.id != this.props.currentUser.id) {
          selectedUsersDup.push(user);
        }
      });
      // Remove the channel that was clicked:
      let filteredPrivateChannelsDup = this.state.filteredPrivateChannels.slice(0);
      filteredPrivateChannelsDup = filteredPrivateChannelsDup.filter(channel => channel != privateChannel);
      this.setState({
        selectedUsers: selectedUsersDup,
        filteredPrivateChannels: filteredPrivateChannelsDup
      });
    };
  };

  filterChannelList(e) {
    const input = e.target.value;
    this.setState({
      filteredPrivateChannels: this.props.privateChannels.filter(channel => channel.name.includes(input))
    });
  };

  render() {
    const privateChannels = this.state.filteredPrivateChannels.map((privateChannel,i) => {
      return (<li key={i} onClick={this.addUsersFromChannel(privateChannel)}>{privateChannel.name}</li>);
    });
    let usernamesToList = this.state.selectedUsers.map((user, i) => {
      return (<div key={i} className='private-channel-form-selected-user-tag'>{user.username}</div>);
    });
    // if (this.state.selectedUsers.length > 0) {
    //   usernamesToList = this.state.selectedUsers.;
    // };

    return (
      <div>
        <h1>Create New Private Channel</h1>
        <form onSubmit={this.handleCreateNewPrivateChannelSubmit}>
          <input
            type='text'
            value={this.state.newChannelName}
            onChange={this.update('newChannelName')}/>
          <br/>
          <input
            type='text'
            onChange={this.filterChannelList}/>
          <input type='submit' value='GO'/>
          <div>{usernamesToList}</div>
          <ul>
            {privateChannels}
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(PrivateChannelForm);
