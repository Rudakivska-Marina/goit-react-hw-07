import { createSlice } from "@reduxjs/toolkit";

export const initialFilter = {
    filters: {name: '',},
}

 export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilter,
    selectors: {
        selectNameFilter: state => state.filters.name
    },
    reducers: {
        changeFilter: (state, {payload}) => {state.filters.name = payload},
    }
})

export const filterReducer = filterSlice.reducer;
export const {selectNameFilter} = filterSlice.selectors;
export const {changeFilter} = filterSlice.actions;