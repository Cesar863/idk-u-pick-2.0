import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  showResults: false,
  savedZip: '',
  restaurant: undefined,
  showErrorMessage: false,
  showInfoModal: false,
  showAllResults: false,
} 

export const setShowResults = createAction('setShowResults');
export const setSavedZip = createAction('setSavedZip');
export const setRestaurant = createAction('setRestaurant');
export const setShowErrorMessage = createAction('setShowErrorMessage');
export const setShowInfoModal = createAction('setShowInfoModal');
export const setShowAllResultsModal = createAction('setShowAllResultsModal');

const reducers = createReducer(initialState, (builder) => {
  builder
    .addCase(setShowResults, (state, action) => {
      state.showResults = action.payload;
    })
    .addCase(setSavedZip, (state, action) => {
        state.savedZip = action.payload;
    })
    .addCase(setRestaurant, (state, action) => {
        state.restaurant = action.payload
    })
    .addCase(setShowErrorMessage, (state, action) => {
        state.showErrorMessage = action.payload
    })
    .addCase(setShowInfoModal, (state, action) => {
      state.showInfoModal = action.payload
    })
    .addCase(setShowAllResultsModal, (state, action) => {
      state.showAllResults = action.payload
    })
});

export default reducers;