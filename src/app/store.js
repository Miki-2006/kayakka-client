import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "../features/eventsSlice";
import categoriesSlice from "../features/categorySlice";
import eventSlice from "../features/eventSlice";
import authSlice from "../features/authSlice";

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
    categories: categoriesSlice.reducer,
    event: eventSlice.reducer,
    auth: authSlice.reducer
  },
});

export default store;
