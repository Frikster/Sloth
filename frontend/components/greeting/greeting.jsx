import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    let greeting = (<p>Welcome</p>);
    if (this.props.currentUser) {
      greeting = (
      <div>
        <p>Welcome {this.props.currentUser.username}</p>
        <button onClick={this.props.logout}>logout</button>
      </div>
      );
    } else {
      greeting = (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }

    return (
      <div>
        {greeting}
      </div>
    );
  }
}

export default Greeting;
