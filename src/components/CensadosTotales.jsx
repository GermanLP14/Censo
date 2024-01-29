import MenuBar from './MenuBar';
import { useSelector } from "react-redux";

const CensadosTotales = () => {
    
    const totales = useSelector((state) => {
        console.log('state', state);
        return state.total;
    });

    return (
    <>
        <MenuBar />
        <h1>Total Censados</h1>
        <h3>{totales}</h3>
    </>
    );
};

export default CensadosTotales;