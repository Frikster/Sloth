import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, updateErrors} from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'login'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => login(user)(dispatch),
    demo: () => dispatch(login({ email: 'recruiter@awesomecompany.com', password: '123456'})),
    updateErrors: (errors) => dispatch(updateErrors(errors))
  };
};

export default connect(msp, mdp)(SessionForm);
