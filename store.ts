import { configureStore } from '@reduxjs/toolkit'

import buttonStateReducer from './slices/buttonState'

export const store = configureStore({
  reducer: {
    buttonStateReducer: buttonStateReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
