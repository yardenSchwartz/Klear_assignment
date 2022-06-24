import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brandsList: [],
};

export const BrandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    addToBrands(state, action) {
      const newBrand = action.payload;
      const existingBrand = state.brandsList.find((item) => item === newBrand);
      if (!existingBrand) {
        state.brandsList.push(newBrand);
      }
    },
  },
});

export const { addToBrands } = BrandsSlice.actions;

export default BrandsSlice.reducer;
