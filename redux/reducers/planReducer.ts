import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PlanState {
  name: string;
  price: number;
}

const initialState: PlanState = {name: '', price: 0};

const planSlice = createSlice({
  name: 'plan',
  initialState: initialState,
  reducers: {
    setPlan(state, action: PayloadAction<PlanState>) {
      state = action.payload;
    },
  },
});

export const {setPlan} = planSlice.actions;
export default planSlice.reducer;
