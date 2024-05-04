import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './features/filter/filterReducer';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
    },
});
