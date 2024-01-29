import {createSlice} from "@reduxjs/toolkit";
const initialState = [];
const departamentosSlice = createSlice({
    name: "Departamentos Slice",
    initialState,
    reducers: {

        cargaDeptos: (state, action) => {
            console.log('payload', action.payload)
            const listaDeptos = action.payload;
            return listaDeptos;
        }

    }
});

export const { cargaDeptos } = departamentosSlice.actions;
export default departamentosSlice.reducer;