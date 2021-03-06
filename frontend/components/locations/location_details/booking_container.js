import React from 'react';
import { connect } from 'react-redux';
import BookingFrom from './booking_form';
import { createBooking, clearErrors } from '../../../actions/location_actions.js';
import { fetchPets } from '../../../actions/user_actions.js';
import { asArray } from '../../../reducers/selectors.js';

const mapStateToProps = (state) => {
  const local = state.locations.local || {};
  const errors = state.locations.errors || [];
  const currentUser = state.session.currentUser;
  const pets = asArray(state.user_details.pets) || [];
  const bookings = state.locations.bookings || {};
  return {
    currentUser,
    errors,
    pets,
    bookings,
    local
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
    fetchPets: (id) => dispatch(fetchPets(id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingFrom);
