import { contactsReducer } from './contactsSlice'
import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './filtersSlice'

export const store = configureStore({reducer: {
              contacts: contactsReducer, filter: filterReducer},
}, )