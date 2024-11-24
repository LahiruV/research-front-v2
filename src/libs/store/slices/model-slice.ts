import { createSlice } from '@reduxjs/toolkit';
import { AmountResponse } from '@zenra/model';

type ModelState = {
    amount: AmountResponse;
};

const initialState: ModelState = {
    amount: {
        Ensemble: 0,
        GradientBoosting: 0,
        LinearRegression: 0,
        RandomForest: 0,
    }
};

export const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload
        }
    },
});

export const { setAmount } = modelSlice.actions;
export default modelSlice.reducer;
