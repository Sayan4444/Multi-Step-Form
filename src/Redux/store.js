import { configureStore } from '@reduxjs/toolkit'
import personalInfoSlice from './personalInfoSlice'
import pageNoSlice from './pageNoSlice'

export default configureStore({
    reducer: {
        personalInfoSlice,
        pageNoSlice,
    },
})