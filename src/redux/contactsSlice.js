import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";

const initialContacts = {contacts: {items: [],
loading: false,
error: null,
}}

const slice = createSlice({
    name: 'contacts',
initialState: initialContacts,
selectors: {selectContacts: state => state.contacts.items,
            selectIsLoading: state => state.contacts.loading,
            selectIsError: state => state.contacts.error,
},
extraReducers: builder => {

    builder.addCase(fetchContacts.fulfilled, (state, {payload}) => 
    {state.contacts.items = payload
        state.contacts.loading = false})
    .addCase(fetchContacts.pending, (state) =>
     {state.contacts.loading = true})
     .addCase(fetchContacts.rejected, (state, {payload}) => {
        state.contacts.loading = false
        state.contacts.error = payload})

     .addCase(deleteContact.fulfilled, (state, {payload}) => {
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload)
        state.contacts.loading = false})
        .addCase(deleteContact.pending, (state) =>
     {state.contacts.loading = true})
     .addCase(deleteContact.rejected, (state, {payload}) => {
        state.contacts.loading = false
        state.contacts.error = payload})

        .addCase(addContact.fulfilled, (state, {payload}) => {
            state.contacts.items.push(payload)
            state.contacts.loading = false})
            .addCase(addContact.pending, (state) =>
     {state.contacts.loading = true})
     .addCase(addContact.rejected, (state, {payload}) => {
        state.contacts.loading = false
        state.contacts.error = payload})
},
})

export const contactsReducer = slice.reducer;

export const {selectContacts, selectIsError, selectIsLoading} = slice.selectors;

export const selectFilteredContactsMemo = createSelector([selectContacts, selectNameFilter], (contacts, filter) => 
               {return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()),
                console.log('hello')
            )})