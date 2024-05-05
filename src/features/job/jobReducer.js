import { createSlice } from '@reduxjs/toolkit';
export const fetchJobListAction = (offset) => async (dispatch, getState) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": 8,
        "offset": offset
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const data = await response.json();
        console.log(data)
        dispatch(setJobs(data));
    } catch (error) {
        console.error("Error fetching job list:", error);
    }
};
export const jobSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: [],
        max: 0
    },
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload.jdList;
            // state.max = 20;
            state.max = action.payload.totalCount;
        }
    },

});

export const { setJobs } = jobSlice.actions;

export default jobSlice.reducer;
