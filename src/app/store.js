import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../features/eventSlice";
import categoriesSlice from "../features/categorySlice";

const store = configureStore({
  reducer: {
    events: eventSlice.reducer,
    categories: categoriesSlice.reducer
  },
});

export default store;
