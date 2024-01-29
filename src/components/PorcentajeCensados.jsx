import MenuBar from './MenuBar';
import { useSelector } from "react-redux";

const PorcentajeCensados = () => {
    
    const totales = useSelector((state) => {
        console.log('TOTAL', state.total);
        return state.total;
    });

    const personasRedux = useSelector((state) => {
        console.log('CENSADOS', state.listaDePersonas);
        return state.listaDePersonas;
    });

    const porcentaje = (personasRedux.length * 100) / totales;

    return (
    <>
        <MenuBar />
        <h1>Porcentaje de personas censadas</h1>
        <h3>{porcentaje.toFixed(2)}%</h3>
    </>
    );
};

export default PorcentajeCensados;