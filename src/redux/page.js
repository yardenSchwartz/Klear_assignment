import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.page += 1;
    },
    prevPage: (state, action) => {
      state.page -= 1;
    },
  },
});

export const { nextPage, prevPage } = pageSlice.actions;

export default pageSlice.reducer;
