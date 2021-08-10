import {createSlice} from '@reduxjs/toolkit'
import {getUsers, getUsersBYId} from '../asyncAction/userAction'

const initialState = {
    value: 0,
    loader: false,
    user: [],
    list: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.loader = true
        },
        [getUsers.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.loader = false
            state.user = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.loader = false
            state.error = action.payload
        },
        [getUsersBYId.pending]: (state, action) => {
            state.loader = true

        },
        [getUsersBYId.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.loader = false
            state.list = action.payload

        },
        [getUsersBYId.rejected]: (state, action) => {
            state.loader = false
            state.error = action.payload

        }

    }
})
export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer