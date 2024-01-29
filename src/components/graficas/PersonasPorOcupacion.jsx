import Grafica from "./Grafica";
import { useState, useEffect } from 'react';
import MenuBar from "../MenuBar";
import { useSelector, useDispatch } from "react-redux";

const PersonasPorOcupacion = () => {

    const personasRedux = useSelector((state) => {
        return state.listaDePersonas;
    });

    const ocupacionesRedux = useSelector((state) => {
        return state.listaOcupaciones;
    });

    const callback = (acumulador, valor) => {
        if(acumulador[valor.ocupacion]){
            acumulador[valor.ocupacion] = acumulador[valor.ocupacion] + 1;
        }else{
            acumulador[valor.ocupacion] = 1;
        }
        return acumulador;
    }

    const resultado = personasRedux.reduce(callback, {});

    const valores = Object.values(resultado); 
    const ocupacionesId = Object.keys(resultado);

    const nombresOcupaciones = ocupacionesId?.map(n => {
        const ocupacion = ocupacionesRedux?.find(d => d.id == n)
        return ocupacion?.ocupacion
    })



    
    return(
        <>
            <MenuBar />
            <Grafica etiquetas={nombresOcupaciones} valores={valores} nombreGrafica="Grafica" nombreDatos="Datos"/>
        </>
    )
}

export default PersonasPorOcupacion