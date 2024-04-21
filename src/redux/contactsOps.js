import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://661eaa3616358961cd928954.mockapi.io/'

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async(thunkAPI) => {
        try{
const data = await axios.get('contacts')
return data.data
        }catch(error){
            alert(error.message)
            return thunkAPI.rejecktWithValue(alert(error.message))
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(id, thunkAPI) => {
        try{
const data = await axios.delete(`contacts/${id}`)
return data.data.id
        }catch(error){
            return thunkAPI.rejectWithValue(alert(error.message))
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async(contact, thunkAPI) => {
        try{
const data = await axios.post('contacts', contact)
return data.data
        }catch(error){
            return thunkAPI.rejectWithValue(alert(error.message))
        }
    }
)