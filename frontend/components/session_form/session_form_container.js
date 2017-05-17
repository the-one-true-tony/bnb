import { connect } from 'react-redux';
import { logout, login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}) => {
  const loggedIn = Boolean(session.currentUser);
  const errors = session.errors;
  return {
    loggedIn,
    errors,
  };
};

const mapDispatchToProps = (dispatch, {formType}) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);