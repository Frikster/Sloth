import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Dropdown from './dropdown';
import ClickOutHandler from 'react-onclickout';

import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>

class ChannelList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creatingChannel: false,
      newChannelName: '',
      currentChannelId: '1',
      dropdownOpen: false};
    this.createNewChannel = this.createNewChannel.bind(this);
    this.handleCreateNewPublicChannelSubmit = this.handleCreateNewPublicChannelSubmit.bind(this);
    this.handleCreateNewPrivateChannelSubmit = this.handleCreateNewPrivateChannelSubmit.bind(this);
    this.handleChannelClick = this.handleChannelClick.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onClickOut = this.onClickOut.bind(this);
    this.handleStopDrag = this.handleStopDrag.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchUserChannels();
    // document.body.addEventListener('click', this.handleClickOutside);

  }

  componentWillUnmount() {
    // document.body.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(e) {
    // Source: https://stackoverflow.com/a/41652791
    const {container} = this.refs; // get container that we'll wait to be clicked outside
    const {onClickOutside} = this.props; // get click outside callback
    const {target} = event; // get direct click event target

    // if there is no proper callback - no point of checking
    if (typeof onClickOutside !== 'function') {
      return;
    }

    // if target is container - container was not clicked outside
    // if container contains clicked target - click was not outside of it
    if (target !== container && !container.contains(target)) {
      onClickOutside(event); // clicked outside - fire callback
    }
  };

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

  // handleChannelClick(e) {
  //   e.preventDefault();
  //   const channelName = (e.target.textContent || e.target.innerText).trim();
  //   const channel = this.props.channels.filter(channel => channel.name === channelName)[0];
  //   this.setState({currentChannelId: channel.id}, () => {
  //       this.props.history.push('/channels/' + this.state.currentChannelId);
  //     });
  // }

  handleChannelClick(channelName) {
    const channel = this.props.channels.filter(channel => channel.name === channelName)[0];
    this.setState({currentChannelId: channel.id}, () => {
        this.props.history.push('/channels/' + channel.id);
      });
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  }

  closeDropdown(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      this.setState({dropdownOpen: false});
    }
  }

  onClickOut(e) {
    this.setState({dropdownOpen: false});
  }

  handleStopDrag(e) {
    // debugger
  }

  render() {
    // console.log(this.props.channels);
    const divStyle = {
      backgroundColor: 'rgb(76, 150, 137)'
    };

    const publicChannelNames = this.props.channels.filter(((channel) => !channel.direct_message_channel), this).map(((channel, i) => {
      if (channel.id.toString() === this.props.match.params.channelId) {
        // return (<Draggable onStop={this.handleStopDrag}><li style={divStyle} key={i} onClick={() => this.handleChannelClick(channel.name)}> {channel.name} </li></Draggable>);
        return (<li style={divStyle} key={i} onClick={() => this.handleChannelClick(channel.name)}> {channel.name} </li>);
      }
      return (<li key={i} onClick={() => this.handleChannelClick(channel.name)}> {channel.name} </li>);
    }), this);

    const privateChannelNames = this.props.channels.filter((channel => channel.direct_message_channel), this).map(((channel, i) => {
      let noCurrentUserName = channel.name.replace(this.props.currentUser.username, '');
      if (noCurrentUserName === '') {noCurrentUserName = channel.name;}
      noCurrentUserName = noCurrentUserName.replace(/(^[,\s]+)|([,\s]+$)/g, ''); //remove trailing commas/whitespaces
      if (channel.id.toString() === this.props.match.params.channelId) {
        return (<Draggable onStop={this.handleStopDrag}><li style={divStyle} key={i} onClick={() => this.handleChannelClick(channel.name)}> {noCurrentUserName} </li></Draggable>);
      }
      return (<li key={i} onClick={() => this.handleChannelClick(channel.name)}> {noCurrentUserName} </li>);
    }), this);

    let dropdown;
    if (this.state.dropdownOpen === true) {
      dropdown =  (<ClickOutHandler onClickOut={this.onClickOut}>
                    <Dropdown currentUser={this.props.currentUser} logout={this.props.logout}/>
                  </ClickOutHandler>);
    } else {
      dropdown = undefined;
    }

    // let toRender = (
    //   <div className='channel-list-container'>
    //     <div className='channel-list-container-header' onClick={this.showDropdown}>
    //       <h3>App Academy</h3>
    //       <ul className='channel-header-username'>
    //         <li>{this.props.currentUser.username}</li>
    //       </ul>
    //       {dropdown}
    //     </div>
    //
    //
    //     <div className='public-channels-list'>
    //       <span className='channel-list-plus-circle'>
    //         <p>Public Channels</p>
    //         <i onClick={() => this.props.openModal('new_public_channel')} className='fas fa-plus-circle'></i>
    //       </span>
    //       <ul>
    //         {publicChannelNames}
    //       </ul>
    //     </div>
    //
    //     <div className='private-channels-list'>
    //       <span className='channel-list-plus-circle'>
    //         <p>Private Channels</p>
    //         <i onClick={() => this.props.openModal('new_private_channel')} className='fas fa-plus-circle'></i>
    //       </span>
    //       <ul>
    //         {privateChannelNames}
    //       </ul>
    //     </div>
    //
    //   </div>
    // );
    //
    // if (this.state.creatingChannel) {
    //   toRender = (
    //     <div>
    //       <h1>Create New Channel</h1>
    //       <form onSubmit={this.handleCreateNewPublicChannelSubmit}>
    //         <input
    //           type='text'
    //           value={this.state.newChannelName}
    //           onChange={this.update('newChannelName')}/>
    //         <input type='submit' value='GO'/>
    //       </form>
    //     </div>
    //   );
    // };

    return (
      <div className='channel-list-container'>
        <div className='channel-list-container-header' onClick={this.showDropdown}>
          <h3>App Academy</h3>
          <ul className='channel-header-username'>
            <li>{this.props.currentUser.username}</li>
          </ul>
            {dropdown}
        </div>


        <div className='public-channels-list'>
          <span className='channel-list-plus-circle'>
            <p onClick={() => this.props.openModal('join_channel')}>Public Channels</p>
            <i onClick={() => this.props.openModal('new_public_channel')} className='fas fa-plus-circle'></i>
          </span>
          <ul>
            {publicChannelNames}
          </ul>
        </div>

        <div className='private-channels-list'>
          <span className='channel-list-plus-circle'>
            <p onClick={() => this.props.openModal('new_private_channel')}>Private Channels</p>
            <i onClick={() => this.props.openModal('new_private_channel')} className='fas fa-plus-circle'></i>
          </span>
          <ul>
            {privateChannelNames}
          </ul>
        </div>

      </div>
    );
  }
}

export default withRouter(ChannelList);
