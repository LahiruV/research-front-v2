import { createSlice } from '@reduxjs/toolkit';
import { AmountResponse, PriceResponse } from '@zenra/model';

type ModelState = {
    amount: AmountResponse;
    price: PriceResponse;
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
        }
    },
});

export const { setAmount, setPrice } = modelSlice.actions;
export default modelSlice.reducer;
