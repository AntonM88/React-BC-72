import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: { baseCurrency: "" },
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
});

export const currencyReducer = currencySlice.reducer;

export const { setBaseCurrency } = currencySlice.actions;
