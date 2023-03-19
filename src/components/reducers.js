import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  showResults: false,
  savedZip: '',
  restaurant: undefined,
  showErrorMessage: false
} 

export const setShowResults = createAction('setShowResults');
export const setSavedZip = createAction('setSavedZip');
export const setRestaurant = createAction('setRestaurant');
export const setShowErrorMessage = createAction('setShowErrorMessage');


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
});


export default reducers;