import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        short: null
    },
    reducers: {
        change: (state, action) => {
            state.user = action.payload;
        },
        shortChange: (state, action) => {
            state.short = action.payload;
        },
    },
});

export const { change, shortChange } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectShort = (state) => state.user.short;

export default userSlice.reducer;
