import React from 'react';
import {withRouter, Redirect} from 'react-router';

class JoinChannelForm extends React.Component {

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchUserChannels();
  }

  constructor(props) {
    super(props);
    this.state = {
      publicChannels: this.props.getAllPublicChannels
    };
    this.filterChannelList = this.filterChannelList.bind(this);
    this.joinChannel = this.joinChannel.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  };

  joinChannel(publicChannel) {
    return (e) => {
      const joinedChannelIds = this.props.getJoinedChannels.map(channel => channel.id)
      if (!joinedChannelIds.includes(publicChannel.id)) {
        this.props.processForm({channel_id: publicChannel.id, user_id: this.props.currentUser.id})
      }
      this.props.history.push('/channels/' + publicChannel.id);
      this.props.closeModal();
    };
  }

  filterChannelList(e) {
    const input = e.target.value;
    this.setState({
      publicChannels: this.props.getAllPublicChannels.filter(channel => channel.name.includes(input))
    });
  };

  render() {
    const publicChannels = this.state.publicChannels.map(publicChannel => {
      const channelUsers = this.props.getJoinedUsers(publicChannel.id);
      const channelAuthor = channelUsers.filter(user => user.id === publicChannel.author_id)[0];
      return (<div onClick={this.joinChannel(publicChannel).bind(this)}>
                  {channelAuthor && channelAuthor.profile_pic_url ?
                    <img className="profile-pic-small" src={channelAuthor.profile_pic_url} />
                    : <div className="profile-pic-small" />
                  }
                  <li key={`public_channel_${publicChannel.id}`}>{publicChannel.name}</li>
              </div>);
    });

    return (
      <div className='join-channel-form-div'>
        <h1>Browse Channels</h1>
        <input
        className='public-channel-search-input'
        type='text'
        onChange={this.filterChannelList}
        placeholder='Search Channels'/>
      <ul className='join-channel-form-publicChannel-ul'>
          {publicChannels}
        </ul>
      </div>
    );
  }
}

export default withRouter(JoinChannelForm);
