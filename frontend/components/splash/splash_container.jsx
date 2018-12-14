import {connect} from 'react-redux';
import Splash from './splash';
import {logout, login} from '../../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    demo: () => dispatch(login({ email: 'recruiter@awesomecompany.com', password: '123456'}))
  };
};

export default connect(msp, mdp)(Splash);
