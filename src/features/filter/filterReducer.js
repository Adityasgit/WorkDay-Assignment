// src/features/counter/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        minExperience: null,
        companyName: '',
        location: '',
        remote: false,
        techStack: [],
        role: '',
        minBasePay: null,
    },
    reducers: {

        setMinExperience: (state, action) => {
            state.minExperience = action.payload;
        },
        setCompanyName: (state, action) => {
            state.companyName = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setIsRemote: (state, action) => {
            state.isRemote = action.payload;
        },
        setTechStack: (state, action) => {
            state.techStack = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setMinBasePay: (state, action) => {
            state.minBasePay = action.payload;
        },
    },
});

export const { setCompanyName, setIsRemote, setLocation, setMinBasePay, setMinExperience, setRole, setTechStack } = filterSlice.actions;

export default filterSlice.reducer;
