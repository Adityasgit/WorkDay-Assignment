import { createSlice } from '@reduxjs/toolkit';

export const jobSlice = createSlice({
    name: 'filters',
    initialState: {
        jobs: []
    },
    reducers: {
        getJobListAction: (state, action) => {
            return state.jobs
        },
        fetchJobListAction: async (state, action) => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const body = JSON.stringify({
                "limit": 10,
                "offset": state.offset
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body
            };

            const joblist = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            state.jobs = joblist
        }
    },
});

export const { setMinExperienceAction, setCompanyNameAction, setLocationAction, setIsRemoteAction, setTechStackAction, setRoleAction, setMinBasePayAction } = jobSlice.actions;

export default jobSlice.reducer;
