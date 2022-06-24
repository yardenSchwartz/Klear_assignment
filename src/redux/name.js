import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, action) => {
      console.log('Set name');
      state.name = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;

export default nameSlice.reducer;
