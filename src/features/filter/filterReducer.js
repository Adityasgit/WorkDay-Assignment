import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        minExperience: "",
        companyName: '',
        location: '',
        remote: "",
        techStack: [],
        role: [],
        minBasePay: "",
    },
    reducers: {
        setMinExperienceAction: (state, action) => {
            state.minExperience = action.payload;
        },
        setCompanyNameAction: (state, action) => {
            state.companyName = action.payload;
        },
        setLocationAction: (state, action) => {
            state.location = action.payload;
        },
        setIsRemoteAction: (state, action) => {
            state.remote = action.payload;
        },
        setTechStackAction: (state, action) => {
            state.techStack = action.payload;
        },
        setRoleAction: (state, action) => {
            state.role = action.payload;
        },
        setMinBasePayAction: (state, action) => {
            state.minBasePay = action.payload;
        },
    },
});

export const { setMinExperienceAction, setCompanyNameAction, setLocationAction, setIsRemoteAction, setTechStackAction, setRoleAction, setMinBasePayAction } = filterSlice.actions;

export default filterSlice.reducer;
