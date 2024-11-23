import { createSlice } from '@reduxjs/toolkit';

type CommonState = {
    routeTitle: string;
    selectedNav: string;
};

const initialState: CommonState = {
    routeTitle: '',
    selectedNav: 'amount-predict',
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setRouteTitle: (state, action) => {
            state.routeTitle = action.payload;
        },
        setSelectedNav: (state, action) => {
            state.selectedNav = action.payload;
        }
    },
});

export const { setRouteTitle, setSelectedNav } = commonSlice.actions;
export default commonSlice.reducer;
