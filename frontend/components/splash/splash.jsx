import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash'>
        <nav>
            <Link className='splash-logo' to='/'>
              <img src='https://cdn.worldvectorlogo.com/logos/slack-1.svg'/>
              <h2>Sloth</h2>
            </Link>
            <div className='splash-app-links'>
              <Link className='splash-signup' to={'/signup'}>Signup</Link>
              <Link className='splash-login' to={'/login'}>Login</Link>
            </div>
        </nav>
        <div className='splash-main'>
          <img src='https://a.slack-edge.com/43f70/marketing/img/home/home_illo.png'
            alt='Slack brings all your communication together'/>
          <div className='splash-right-info'>
            <h1>Where Work Happens</h1>
            <p>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>
            <button>GET STARTED</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;


// <h1>Where Work Happens<h1/>
// <p>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>
// <button>GET STARTED</button>
// <p>Already using Slack? <a href="https://slack.com/signin">Sign in</a></p>
