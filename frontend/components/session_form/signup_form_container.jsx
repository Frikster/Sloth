import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'signup'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => signup(user)(dispatch)
  };
};

export default connect(msp, mdp)(SessionForm);
