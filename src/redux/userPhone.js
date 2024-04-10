import { createSlice } from "@reduxjs/toolkit";

export const phoneSlice = createSlice({
    name: 'phone',
    initialState: [],
    reducers: {
        addMyNumber: (state,action) => {
            const mynum = action.payload;
            state.push(mynum);
        },
        removeMyNumber: (state, action) => {
            const removemynum = action.payload;
            state.pop(removemynum);
        }
    }
})

export const {addMyNumber, removeMyNumber} = phoneSlice.actions;

export default phoneSlice.reducer;