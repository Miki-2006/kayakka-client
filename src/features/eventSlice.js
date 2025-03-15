import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  event: [],
  loading: false,
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    fetchEventStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchEventSuccess: (state, action) => {
      state.loading = false;
      state.event = action.payload;
    },
    fetchEventFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const {
  fetchEventStart,
  fetchEventSuccess,
  fetchEventFailure
} = eventSlice.actions;

export default eventSlice;
