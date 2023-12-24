/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    search: '',
    advsAll: [],
    userSelectProduct: {},
}

const reducers = createSlice({
    name: 'reducers',
    initialState,
    reducers: {
        userStateUpdate: (state) => {
            state.user = true
        },
        userStateUpdate2: (state, action) => {
            state.user = action.payload
        },
        advsAllUpdate: (state, action) => {
            state.advsAll = action.payload
        },
        searchUpdate: (state, action) => {
            state.search = action.payload
        },
        userSelProdUpdate: (state, action) => {
            state.userSelectProduct = action.payload
        },
    },
})
export const {
    userStateUpdate,
    userStateUpdate2,
    advsAllUpdate,
    searchUpdate,
    userSelProdUpdate,
} = reducers.actions
export default reducers
