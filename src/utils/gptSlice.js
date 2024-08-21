import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState:{
        showSearchGpt : false
    },
    reducers:{
        toggleGptsearchView : (state)=>{
            state.showSearchGpt = !state.showSearchGpt
        }
    }
})
export const { toggleGptsearchView} = gptSlice.actions
export default gptSlice.reducer