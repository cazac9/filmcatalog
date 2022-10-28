import { createSlice } from "@reduxjs/toolkit";

interface RatingCounterState {
  valueMap: {[filmId: string]: number}
} 

const initialState: RatingCounterState = {
  valueMap: {}
}

const ratingCounterSlice = createSlice({
  name: 'ratingCounter',
  initialState,
  reducers: {
    incremented(state, action) {
      var value =  state.valueMap[action.payload.filmId] || 0;    
      state.valueMap[action.payload.filmId]= value + 1;
    },
    decremented(state, action){
      var value =  state.valueMap[action.payload.filmId] || 0;    
      state.valueMap[action.payload.filmId]= value - 1;
    }
  }
});

export const {incremented, decremented} = ratingCounterSlice.actions;
export default ratingCounterSlice.reducer;