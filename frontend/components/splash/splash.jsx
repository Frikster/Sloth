import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demo().then(() => {
      return this.props.history.push('/channels');
    });
  }

  render() {
    return (
      <div className='splash'>
        <nav>
            <div className='splash-nav-left'>
              <Link className='splash-logo' to='/'>
                <img src='https://cdn.worldvectorlogo.com/logos/slack-1.svg'/>
                <h2>Sloth</h2>
              </Link>
              <Link to='/'>Why Sloth?</Link>
              <Link to='/'>Solutions</Link>
              <Link to='/'>Resources</Link>
              <Link to='/'>Pricing</Link>
            </div>
            <div className='splash-app-links'>
              <Link className='splash-login' to={'/login'}>Sign in</Link>
              <Link className='splash-signup' to={'/signup'}>GET STARTED</Link>
            </div>
        </nav>
        <div className='splash-main'>
          <img src='https://a.slack-edge.com/43f70/marketing/img/home/home_illo.png'
            alt='Slack brings all your communication together'/>
          <div className='splash-right-info'>
            <h1>Where Work Happens</h1>
            <p>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>
            <span className='splash-bottom-btns'>
              <button className='splash-demo-login' onClick={this.handleDemoLogin}>DEMO LOGIN</button>
              <Link className='splash-signup' to={'/login'}>GET STARTED</Link>
            </span>
            <p>Already using Slack? <Link to={'/login'}>Sign in.</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);


// <h1>Where Work Happens<h1/>
// <p>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>
// <button>GET STARTED</button>
// <p>Already using Slack? <a href="https://slack.com/signin">Sign in</a></p>
