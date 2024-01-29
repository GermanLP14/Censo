import {createSlice} from "@reduxjs/toolkit";
const initialState = [];
const ocupacionesSlice = createSlice({
    name: "Ocupaciones Slice",
    initialState,
    reducers: {
        cargaOcupaciones: (state, action) => {
            console.log('payload', action.payload)
            const listaOcupaciones = action.payload;
            return listaOcupaciones;
        }
    }
});

export const { cargaOcupaciones } = ocupacionesSlice.actions;
export default ocupacionesSlice.reducer;