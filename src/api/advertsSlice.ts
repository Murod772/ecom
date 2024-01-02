import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Advert {
    id: string;
    title: string;
  }
  
  interface AdvertsState {
    searchResults: Advert[];
  }
  
// Initial state with type
const initialState: AdvertsState = {
  searchResults: [],
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    // Use PayloadAction to type the action's payload
    setSearchResults: (state, action: PayloadAction<Advert[]>) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchResults } = advertsSlice.actions;

export default advertsSlice.reducer;