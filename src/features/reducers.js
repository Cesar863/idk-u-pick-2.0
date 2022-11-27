import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  userZipCode: '',
  isCleared: false,
  restaurants: []
} 

export const setZipCodeToStore = createAction('setUserZipCode');
export const setIsCleared = createAction('setIsCleared');
export const setRestaurants = createAction('setRestaurants')

const reducers = createReducer(initialState, (builder) => {
  builder
    .addCase(setZipCodeToStore, (state, action) => {
      state.userZipCode = action.payload;
    })
    .addCase(setRestaurants, (state, action) => {
        state.restaurants = action.payload
    })
    .addCase(setIsCleared, (state, action) => {
        state.isCleared = action.payload;
    })
});


export default reducers;