import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiClient = axios.create({
  baseURL:"https://66c9829f8a477f50dc30d560.mockapi.io/api/v1"
})

interface Contact {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
}

interface AddContactPayload {
  createdAt: string;
  name: string;
  phone: string;
}

export const fetchContacts = createAsyncThunk<Contact[], void, { rejectValue: string }>(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get("/contacts");
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk<Contact, AddContactPayload, { rejectValue: string }>(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const response = await apiClient.post<Contact>("/contacts",  contactData);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteContact = createAsyncThunk<Contact, string, { rejectValue: string }>(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await apiClient.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);