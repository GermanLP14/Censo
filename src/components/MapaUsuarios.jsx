import Mapa from './Mapa'
import { useSelector } from 'react-redux'
import MenuBar from './MenuBar'

function MapaUsuarios() {

    const personasRedux = useSelector((state) => {
        return state.listaDePersonas;
    });

    const departamentosRedux = useSelector((state) => {
        return state.listaDeptos;
    });

    const personasPorDepartamento = departamentosRedux.map(depto => {
        return {
            ...depto,
            usuarios: personasRedux.filter(persona => persona.departamento === depto.id)
        };
    });


    const markersData = personasPorDepartamento.map(depto => {
        const marca = {
            lat: depto.latitud,
            lng: depto.longitud,
            titulo: depto.nombre,
            contenido: `Cantidad de personas censadas: ${depto.usuarios.length}`
        };
        return marca;
    });


    return (
        <>
            <MenuBar />
            <h1>Mapa Usuarios</h1>
            <div style={{ margin: '0 auto' }}>
                <Mapa markersData={markersData} />
            </div >
        </>
    )
}

export default MapaUsuarios



