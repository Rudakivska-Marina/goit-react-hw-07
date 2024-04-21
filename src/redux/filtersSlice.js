import { createSlice } from "@reduxjs/toolkit";

const initialFilter = {
    filters: {name: '',},
}

const slice = createSlice({
    name: 'filter',
    initialState: initialFilter,
    selectors: {
        selectNameFilter: state => state.filters.name
    },
    reducers: {
        changeFilter: (state, {payload}) => {state.filters.name = payload},
    }
})

export const filterReducer = slice.reducer;
export const {selectNameFilter} = slice.selectors;
export const {changeFilter} = slice.actions;