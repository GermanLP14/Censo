import Grafica from "./Grafica";
import { useState, useEffect } from 'react';
import MenuBar from "../MenuBar";
import { useSelector, useDispatch } from "react-redux";

const PersonasPorDepartamento = () => {

    const personasRedux = useSelector((state) => {
        return state.listaDePersonas;
    });

    const departamentosRedux = useSelector((state) => {
        return state.listaDeptos;
    });

    const callback = (acumulador, valor) => {
        if(acumulador[valor.departamento]){
            acumulador[valor.departamento] = acumulador[valor.departamento] + 1;
        }else{
            acumulador[valor.departamento] = 1;
        }
        return acumulador;
    }

    const resultado = personasRedux.reduce(callback, {});

    const valores = Object.values(resultado); 
    const DeptosId = Object.keys(resultado);

    const nombresDeptos = DeptosId?.map(n => {
        const departamento = departamentosRedux?.find(d => d.id == n)
        return departamento?.nombre
    })
    
    return(
        <>
            <MenuBar />
            <Grafica etiquetas={nombresDeptos} valores={valores} nombreGrafica="Grafica" nombreDatos="Datos"/>
        </>
    )
}

export default PersonasPorDepartamento