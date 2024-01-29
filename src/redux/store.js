import { configureStore } from '@reduxjs/toolkit'
import personasSlice from './features/personasSlice'
import departamentosSlice from './features/departamentosSlice'
import ocupacionesSlice from './features/ocupacionesSlice'
import totales from './features/totales'

export const store = configureStore({
    reducer: {
        listaDePersonas: personasSlice,
        listaDeptos: departamentosSlice,
        listaOcupaciones: ocupacionesSlice,
        total: totales
    },
})