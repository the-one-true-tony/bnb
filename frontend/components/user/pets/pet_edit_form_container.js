import React from 'react';
import { connect } from 'react-redux';
import PetsEditForm from './pet_edit_form';

import { editPet } from '../../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    session: state.session,
    petTypes: state.user_details.petTypes || []
  };
};

const mapDispatchToProps = (dispatch, {pets}) => {
  return {
    editPet: (id) => dispatch(editPet(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetsEditForm);
