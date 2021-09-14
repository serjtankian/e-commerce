import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk('ALL_CATEGOS', ()=> {
    return axios.get('http://localhost:3001/api/categories/')
    .then(r=> r.data)
})

export const ByCategory = createAsyncThunk('BY_CATEGO', (categoName)=> {
    return axios.get(`http://localhost:3001/api/category?selected=${categoName}`)
    .then(r=> r.data)
})