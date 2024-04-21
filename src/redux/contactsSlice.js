import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialContacts = {contacts: {items: [],},}

const slice = createSlice({
    name: 'contacts',
initialState: initialContacts,
selectors: {selectContacts: state => state.contacts.items,
},
reducers: {
    deleteContact: (state, {payload} ) => {state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload)},
    addContact: (state, {payload}) => {state.contacts.items = [...state.contacts.items, {id: nanoid(), name: payload.name, number: payload.number}]},
}
})

export const contactsReducer = slice.reducer;
export const {deleteContact, addContact} = slice.actions;
export const {selectContacts} = slice.selectors;