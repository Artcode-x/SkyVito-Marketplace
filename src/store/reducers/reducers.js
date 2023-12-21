/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    search: {},
    advsAll: [],
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
    },
})
export const { userStateUpdate, userStateUpdate2, advsAllUpdate } =
    reducers.actions
export default reducers
