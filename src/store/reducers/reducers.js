/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    userFlag: {},
    search: '',
    advsAll: [],
    userSelectProduct: {},
    ads: [],
    token: {},
    showNewAd: false,
    editAdWindow: false,
}

const reducers = createSlice({
    name: 'reducers',
    initialState,
    reducers: {
        userStateUpdate: (state) => {
            state.userFlag = true
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
        adsUpdate: (state, action) => {
            state.adsUpdateArray = action.payload
        },
        tokenUpdate: (state, action) => {
            state.token = action.payload
        },
        addNewAdUpdate: (state, action) => {
            state.showNewAd = action.payload
        },
        addEditAdWindow: (state, action) => {
            state.editAdWindow = action.payload
        },
    },
})
export const {
    userStateUpdate,
    userStateUpdate2,
    advsAllUpdate,
    searchUpdate,
    userSelProdUpdate,
    adsUpdate,
    tokenUpdate,
    addNewAdUpdate,
    addEditAdWindow,
} = reducers.actions
export default reducers
