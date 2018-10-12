import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Main extends React.Component {

  // componentDidMount() {
  //   this.props.fetchChannels();
  // }

  render() {

    return (
      <div className='channel-main'>
        <div className='channel-header'>
          <h1>CHANNEL HEADER</h1>
        </div>
        <h1>CHANNEL MAIN</h1>
      </div>
    );
  }
}

export default Main;

// TODO: move over to their own components
// <div className='channel-main'>
//   <div className='channel-header'>
//     <h1>CHANNEL HEADER</h1>
//   </div>
//     <h1>CHANNEL MAIN</h1>
// </div>
