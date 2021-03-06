import React from 'react';
import { Link } from 'react-router-dom';
import ChannelListContainer from './channel_list/channel_list_container';
import ChannelContainer from './channel/channel_container';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {

  // componentDidMount() {
  //   this.props.fetchChannels();
  // }

  render() {

    return (
      <div className='main'>
        <ChannelListContainer />
        <ChannelContainer />
      </div>
    );
  }
}

export default withRouter(Main);
