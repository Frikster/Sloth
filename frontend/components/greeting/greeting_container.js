import {connect} from 'react-redux';
import Greeting from './greeting';
import {logout} from '../../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => logout()(dispatch)
  };
};

export default connect(msp, mdp)(Greeting);
