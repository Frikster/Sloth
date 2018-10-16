// credit: https://github.com/ameet01/slax/blob/master/frontend/components/main/mainleft/header/dropdown.jsx
import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='dropdown'>
        <h3 className='dropdown-username'>{this.props.currentUser.username}</h3>
        <ul>
          <li className='dropdown-signout' onClick={this.props.logout}>Sign out</li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
