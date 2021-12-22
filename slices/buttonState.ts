import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type ButtonState = {
  menuOpened: Boolean;
  clicked: Boolean;
}

const initialState: ButtonState = {
  menuOpened: false,
  clicked: false
}

export const buttonStateSlice = createSlice({
  name: 'buttonState',
  initialState,
  reducers: {
    changeMenuOpened: (state, action) => {
      state.menuOpened = action.payload;
    },
    changeClicked: (state, action) => {
      state.clicked = action.payload;
    }
  }
})

export const { changeMenuOpened } = buttonStateSlice.actions;

export const { changeClicked } = buttonStateSlice.actions;

export const selectMenuOpened = (state: RootState) => state.buttonStateReducer.menuOpened

export const selectClicked = (state: RootState) => state.buttonStateReducer.clicked

export default buttonStateSlice.reducer
