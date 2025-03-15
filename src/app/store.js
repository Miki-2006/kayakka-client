import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "../features/eventsSlice";
import categoriesSlice from "../features/categorySlice";
import eventSlice from "../features/eventSlice";

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
    categories: categoriesSlice.reducer,
    event: eventSlice.reducer
  },
});

export default store;
