import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type HotelState = {
    filter: {
        rating: number
    }
};

const initialState = {
    filter: {
        rating: 0
    }
} as HotelState;

export const hotelReducer = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        reset: () => initialState,
        setFilter: (state, action: PayloadAction<HotelState>) => {
            state.filter = action.payload.filter
        }
    },
});

export const {
    setFilter,
    reset,
} = hotelReducer.actions;
export default hotelReducer.reducer;
