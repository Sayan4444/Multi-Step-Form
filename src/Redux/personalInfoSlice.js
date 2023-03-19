import { createSlice } from '@reduxjs/toolkit'

export const personalInfoSlice = createSlice({
    name: 'personalInfo',
    initialState: {
        data: {
            name: "",
            email: "",
            phone: "",
            planIndex: [-1, ""], //index,type
            addonsIndex: [] //index
        },
        errorDisplayed: false,
        goNext: false
    },
    reducers: {
        //Only for personal info
        setData: (state, { payload }) => {
            state.data = { ...state.data, ...payload }
        },
        //Only for personal info
        setErrorDisplayed: (state, { payload }) => {
            state.errorDisplayed = payload;
        },
        //Only for personal info
        setGoNext: (state, { payload }) => {
            state.goNext = payload;
        },
        setplanIndex: (state, { payload }) => {
            state.data.planIndex = payload;
        },
        resetAddons: (state) => {
            state.data.addonsIndex = [];
        },
        insertAddOns: (state, { payload }) => {
            state.data.addonsIndex.push(payload);
            state.data.addonsIndex.sort((a, b) => a - b)

        },
        deleteAddOns: (state, { payload }) => {
            const index = state.data.addonsIndex.indexOf(payload);
            state.data.addonsIndex.splice(index, 1);
        }
    },
})

export const { setData, setErrorDisplayed, setGoNext, setplanIndex, insertAddOns, deleteAddOns, resetAddons } = personalInfoSlice.actions

export default personalInfoSlice.reducer