import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
  .then( _user => (dispatch(receiveCurrentUser(_user))),
    errors => (dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const logout = () => (dispatch) => {
  APIUtil.logout()
    .then( _user => (dispatch(receiveCurrentUser(null))
  ));
};

export const signup = (user) => (dispatch) => {
  debugger
  return APIUtil.signup(user)
  .then( _user => (dispatch(receiveCurrentUser(_user))),
    (errors => {
      debugger;
      dispatch(receiveErrors(errors.responseJSON));
    })
  );
};

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
