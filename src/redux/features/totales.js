import {createSlice} from "@reduxjs/toolkit";
const initialState = 0;
const totales = createSlice({
    name: "Personas Slice",
    initialState,
    reducers: {
        totalPersonas: (state, action) => {
            console.log('payload', action.payload)
            const total = action.payload;
            return total;
        }
    }
});

export const { totalPersonas } = totales.actions;
export default totales.reducer;