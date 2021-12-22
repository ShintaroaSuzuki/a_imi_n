import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type ButtonState = {
  menuOpened: Boolean
}

const initialState: ButtonState = {
  menuOpened: false
}

export const buttonStateSlice = createSlice({
  name: 'buttonState',
  initialState,
  reducers: {
    changeMenuOpened: (state, action) => {
      state.menuOpened = action.payload;
    }
  }
})

export const { changeMenuOpened } = buttonStateSlice.actions;

export const selectMenuOpened = (state: RootState) => state.buttonStateReducer.menuOpened

export default buttonStateSlice.reducer
