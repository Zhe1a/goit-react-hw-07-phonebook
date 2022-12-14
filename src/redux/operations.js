import axios from 'axios';
const { createAsyncThunk } = require('@reduxjs/toolkit');

axios.defaults.baseURL = 'https://6376068cb5f0e1eb85005f05.mockapi.io';

export const contactsPostApi = createAsyncThunk(
  '/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = axios
        .post('/contacts', { name: name, phone: number })
        .then(el => el.data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const contactsListApi = createAsyncThunk(
  '/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const contactsDeleteApi = createAsyncThunk(
  '/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
