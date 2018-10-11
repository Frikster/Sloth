import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'login'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => login(user)(dispatch),
    demo: () => dispatch(login({email: 'andyiscoming@example.com', password: '123456'}))
  };
};

export default connect(msp, mdp)(SessionForm);
