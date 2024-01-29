import {createSlice} from "@reduxjs/toolkit";
const initialState = [];
const personasSlice = createSlice({
    name: "Personas Slice",
    initialState,
    reducers: {
        cargaInicialPersonas: (state, action) => {
            console.log('payload', action.payload)
            const listaPersonas = action.payload;
            return listaPersonas;
        },
        agregarPersonaRedux: (state, action) => {
            const persona = action.payload;
            return[...state, persona];
        },
        borrarPersona: (state, action) => {
            const id = action.payload;
            const listaFiltrada = state.filter(p => p.id != id);
            return listaFiltrada;
        }
    }
});

export const { agregarPersonaRedux, borrarPersona, cargaInicialPersonas } = personasSlice.actions;
export default personasSlice.reducer;