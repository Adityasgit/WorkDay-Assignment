import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './features/filter/filterReducer';
import jobReducer from './features/job/jobReducer';

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        jobs: jobReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }
        ),

});
