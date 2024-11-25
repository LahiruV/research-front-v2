import { createSlice } from '@reduxjs/toolkit';
import { AmountResponse, BugResponse, PriceResponse } from '@zenra/model';

type ModelState = {
    amount: AmountResponse;
    price: PriceResponse;
    bug: BugResponse;
};

const initialState: ModelState = {
    amount: {
        Ensemble: 0,
        GradientBoosting: 0,
        LinearRegression: 0,
        RandomForest: 0,
    },
    price: {
        ensemble_prediction: 0,
        individual_predictions: {
            GradientBoosting: 0,
            LinearRegression: 0,
            RandomForest: 0,
        },
    },
    bug: {
        class: '',
        confidence: 0,
    },
};

export const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setBug: (state, action) => {
            state.bug = action.payload
        },
    },
});

export const { setAmount, setPrice, setBug } = modelSlice.actions;
export default modelSlice.reducer;
