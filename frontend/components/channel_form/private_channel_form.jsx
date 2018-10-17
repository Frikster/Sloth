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
    this.removeSelected = this.removeSelected.bind(this);
  }

  handleCreateNewPrivateChannelSubmit(e) {
    // this.props.createChannel({name: this.state.newChannelName, direct_message_channel: true})
    // this.state.selectedUsers.forEach(user => {
    //   this.props.createUserChannel({user_id: user.id, channel_id: })
    // });
    let newChannelName = this.state.newChannelName;
    let selectedUsersDup = this.state.selectedUsers.slice(0);
    if (this.state.newChannelName === '') {
      selectedUsersDup.push(this.props.currentUser);
      const selectedUsernames = selectedUsersDup.map(user => {
        return user.username;
      });
      // this.setState({
      //   newChannelName: selectedUsernames.join(', ')
      // });
      newChannelName = selectedUsernames.join(', ');
    }
    this.props.processForm({name: newChannelName, direct_message_channel: true}, this.state.selectedUsers); //TODO: ask if there was a point to using polymorphism for modals? Too sleepy to think right now
    this.props.closeModal();
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
      // let filteredPrivateChannelsDup = this.state.filteredPrivateChannels.slice(0);
      // filteredPrivateChannelsDup = filteredPrivateChannelsDup.filter(channel => channel != privateChannel);
      this.setState({
        selectedUsers: selectedUsersDup,
        // filteredPrivateChannels: filteredPrivateChannelsDup
      });
    };
  };

  removeSelected(user) {
    return (e) => {
      let selectedUsersDup =  this.state.selectedUsers.slice(0).filter(el => el.id != user.id);
      this.setState({
        selectedUsers: selectedUsersDup,
      });
    };
  }

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
      return (<div key={i} className='private-channel-form-selected-user-tag' onClick={this.removeSelected(user)}>{user.username}</div>);
    });
    // if (this.state.selectedUsers.length > 0) {
    //   usernamesToList = this.state.selectedUsers.;
    // };

    return (
      <div className='private-channel-form-div'>

        <h1>Create New Private Channel</h1>
        <form onSubmit={this.handleCreateNewPrivateChannelSubmit}>
              <label className='private-channel-name-input-label' for='private-channel-name-input'>Name</label>
              <input
                className='private-channel-name-input'
                type='text'
                value={this.state.newChannelName}
                onChange={this.update('newChannelName')}
                placeholder='# e.g. finance'/>
          <br/>
          <div className='private-channel-user-input-div'>
              <input
              className='private-channel-user-input'
              type='text'
              onChange={this.filterChannelList}
              placeholder='Find or start a conversation'/>
            <input type='submit' value='Go'/>
          </div>
          <div>{usernamesToList}</div>
          <ul className='private-channel-form-privateChannel-ul'>
            {privateChannels}
          </ul>
        </form>
      </div>
    );
  }
}

export default withRouter(PrivateChannelForm);
