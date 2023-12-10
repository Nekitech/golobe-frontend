import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "@/store/features/Hotel.slice";

export const store = configureStore({
    reducer: {
        hotelReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;