import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expertiesList: [
    { value: 'LifeStyle', checked: false },
    { value: 'Beauty', checked: false },
    { value: 'Food', checked: false },
  ],
};

export const ExpertiesSlice = createSlice({
  name: 'experties',
  initialState,
  reducers: {
    setIsChecked(state, action) {
      const currentValue = action.payload;
      const existingItem = state.expertiesList.find(
        (item) => item.value === currentValue
      );
      if (existingItem) {
        existingItem.checked = !existingItem.checked;
      }
    },
  },
});

export const { setIsChecked } = ExpertiesSlice.actions;

export default ExpertiesSlice.reducer;
