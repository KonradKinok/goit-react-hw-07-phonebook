import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store'; 

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectStatusFilter = (state: RootState) => state.filters.status;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectError = (state: RootState) => state.contacts.error;
interface Contact {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
}
export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, statusFilter) => {
    console.log("Calculating visible tasks. Now memoized!");
  const filteredContacts = contacts.filter((contact:Contact) =>
      contact.name.toLowerCase().includes(statusFilter.toLowerCase()),
  );
   return filteredContacts;
    }
  
);

