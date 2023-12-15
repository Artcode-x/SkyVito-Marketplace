/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    search: {},
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
        }
    }
})
export const {userStateUpdate, userStateUpdate2} = reducers.actions
export default reducers