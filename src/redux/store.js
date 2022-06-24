import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page';
import nameReducer from './name';
import expertisesReducer from './expertises';
import brandsReducer from './brands';

export default configureStore({
  reducer: {
    page: pageReducer,
    name: nameReducer,
    experties: expertisesReducer,
    brands: brandsReducer,
  },
});
