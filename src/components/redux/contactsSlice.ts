import { createSlice, PayloadAction, Action } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./operations";

interface Contact {
  id: string;
  createdAt:string,
  name: string;
  phone: string;
}

interface ContactsState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

const handlePending = (state: ContactsState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: ContactsState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = (action: Action): boolean => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action: Action): boolean => {
  return action.type.endsWith("/rejected");
};

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<Contact[]>) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action: PayloadAction<Contact>) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action: PayloadAction<{ id: string }>) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id,
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      // .addDefaultCase((state) => {
      //   state.error = "someone use old function, fix it!";
      // });
  },
});

export const contactsReducer = contactSlice.reducer;