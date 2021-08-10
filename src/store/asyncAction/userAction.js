import API from '../../service/Api'
import {createAsyncThunk} from "@reduxjs/toolkit";

const paths = {
    USER: "/posts",
};
const getHeaders = (token) => {
    return {headers: {Authorization: `Bearer ${token}`}};
};


export const getUsers = createAsyncThunk('users', async () => {
    return await API.get(paths.USER, {})
    }
)
export const getUsersBYId = createAsyncThunk('users', async (id) => {
         console.log(id,`${paths.USER}/${id}`)
       return await API.get(`${paths.USER}/${id}`, {})
    }
)
