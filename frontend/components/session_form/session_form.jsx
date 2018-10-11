import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRememberMe = this.updateRememberMe.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  };

  updateRememberMe(e) {
    return this.setState({
      rememberMe: e.target.checked
    });
  }

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
    let bottomLinks = (
      <Link to={linkUrl}>{linkLabel}</Link>);
    if (this.props.formType === 'login') {
      header = 'Sign in to App Academy';
      linkUrl = '/signup';
      linkLabel = 'Sign In';
      bottomLinks = (
        <div className='session-form-bottom-links'>
          <Link to='/'>Forgot password?</Link>
          <p> · </p>
          <Link to='/'>Forgot which email you used?</Link>
          <Link className='session-form-link-to-other-form' to={linkUrl}>Create an account</Link>
        </div>
      );
    } else {
      header = 'Sign up for App Academy';
      linkUrl = '/login';
      linkLabel = 'Sign Up';
    }

    let error = '';
    if (this.props.errors.length > 0) {
      error = (<p className='session-form-error-messages'>{this.props.errors}</p>);
    }

    return (
      <div className='session-form-page'>
        <nav>
            <Link className='session-form-logo' to='/'>
              <img src='https://cdn.worldvectorlogo.com/logos/slack-1.svg'/>
              <h2>Sloth</h2>
            </Link>
            <div className='session-form-nav-links'>
              <Link to='/'>Product</Link>
              <Link to='/'>Pricing</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Create a new workspace</Link>
              <Link to='/'>Find your workspace</Link>
              <Link className='session-form-login' to={'/login'}>Sign in</Link>
            </div>
        </nav>
        <form onSubmit={this.handleSubmit} className='session-form-box'>
          <div className='session-form-header'>
            <h1 className='session-form-title'>{header}</h1>
            <p className='session-form-workspace'>app-academy.sloth.com</p>
          </div>
          <div className='session-form'>
          <p className='session-form-instructions'>Enter your <b>email address</b> and <b>password.</b></p>
          <input type='text'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder='you@example.com'
            />
          <input type='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='password'
            />
          {error}
          <input type='submit' value={linkLabel} />
          <button className='session-form-demo-login' onClick={this.props.demo}>DEMO LOGIN</button>
          <label>
          <input type='checkbox'
             name='remember'
             onChange={this.updateRememberMe}
             checked={this.state.rememberMe}/>
            Remember me
          </label>
          {bottomLinks}
          </div>
        </form>
      </div>
    );
    // <p>If you have an @appacademy.io email address, you can create an account.</p>
    // <p>Trying to create a workspace?	Create a new workspace</p>
  }
}

export default withRouter(SessionForm);
