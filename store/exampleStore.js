import {createSlice} from '@reduxjs/toolkit';

// Define you store elements
const INITIAL_STATE = {

}

// Slice
const slice = createSlice({
  name: "portfolioStore",
  initialState: INITIAL_STATE,
  reducers: {
    // actions => action handlers
    toggleStoreVar: (portfolioStore, action) => {
      //payload: {}
      const payload = action.payload;
      portfolioStore.isPortfolioLoading = !portfolioStore.isPortfolioLoading;
    },
  }
});

// Exporting reducer
export default slice.reducer;

// Destructuring actions
export const {toggleStoreVar} = slice.actions;