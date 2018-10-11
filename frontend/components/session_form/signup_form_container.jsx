import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'signup'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => signup(user)(dispatch),
    demo: () => dispatch(login({email: 'andyiscoming@example.com', password: '123456'}))
  };
};

export default connect(msp, mdp)(SessionForm);
