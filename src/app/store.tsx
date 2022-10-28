import { configureStore } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer';
import ratingCounterReducer from '../features/RatingCounter/RatingCounterSlice'

enableMapSet();

export const store= configureStore({
  reducer: {
    ratingCounter: ratingCounterReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;