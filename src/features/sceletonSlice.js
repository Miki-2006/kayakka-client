import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false
};

const sceletonSlice = createSlice({
  name: "sceleton",
  initialState,
  reducers: {
    setIsLoadingStart: (state) => {
      state.loading = true;
    },
    setIsLoadingFinish: (state) => {
      state.loading = false;
    }
  },
});

export const {
    setIsLoadingFinish,
    setIsLoadingStart
} = sceletonSlice.actions;

export default sceletonSlice;