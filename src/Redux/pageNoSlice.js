import { createSlice } from '@reduxjs/toolkit'

export const pageNoSlice = createSlice({
    name: 'pageNo',
    initialState: {
        pageNo: 1,
    },
    reducers: {
        setPageNext: (state) => {
            state.pageNo++;
        },
        setPagePrev: (state) => {
            state.pageNo--;
        },
        setPage: (state, { payload }) => {
            state.pageNo = payload
        }
    },
})

export const { setPageNext, setPagePrev, setPage } = pageNoSlice.actions

export default pageNoSlice.reducer