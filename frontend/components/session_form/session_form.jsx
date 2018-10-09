import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    // debugger;
    let header = '';
    let linkUrl = '/';
    let linkLabel = '';
    if (this.props.formType === 'login') {
      header = 'Log in';
      linkUrl = '/signup';
      linkLabel = 'Sign Up';
    } else {
      header = 'Sign Up';
      linkUrl = '/login';
      linkLabel = 'Log in';
    }
    // debugger;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{header}</h1>
          <br/>
          <Link to={linkUrl}>{linkLabel}</Link>
          <br/>
          <label>Username:
          <input type='text'
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <br/>
          <label>Password:
          <input type='password'
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <br/>
          {this.props.errors}
          <input type='submit' value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
