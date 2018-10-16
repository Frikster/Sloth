// credit: https://github.com/ameet01/slax/blob/master/frontend/components/main/mainleft/header/dropdown.jsx
import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='dropdown'>
        <ul>
          <li className='dropdown-username'>Username: {this.props.currentUser.username}</li>
          <li className='dropdown-signout'><span onClick={this.props.logout}>Sign Out</span></li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
