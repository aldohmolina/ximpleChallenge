import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Credit {
  id: number;
  name: string;
  value: number;
}

interface CreditState {
  credits: Credit[];
  selected: number | null;
}

const initialState: CreditState = {
  credits: [],
  selected: null,
};

const creditsSlice = createSlice({
  name: 'plan',
  initialState: initialState,
  reducers: {
    setCredits(state, action: PayloadAction<Credit[]>) {
      state.credits = action.payload;
    },
    setSelectedCredit(state, action: PayloadAction<number>) {
      state.selected = action.payload;
    },
  },
});

export const {setCredits, setSelectedCredit} = creditsSlice.actions;
export default creditsSlice.reducer;
