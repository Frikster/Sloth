import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChannelListContainer from './channel_list/channel_list_container';

class Main extends React.Component {

  // componentDidMount() {
  //   this.props.fetchChannels();
  // }

  render() {

    return (
      <div>
        <ChannelListContainer />
      </div>
    );
  }
}

export default Main;
