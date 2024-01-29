import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { borrarPersona } from '../redux/features/personasSlice';

const Persona = ({id, nombre, departamento, ciudad, fechaNacimiento, ocupacion}) => {

    const dispatch = useDispatch();

    const api = localStorage.getItem("KEY");
    const idUsr = localStorage.getItem("ID");
    
    const [ciudades, setCiudades] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [ocupaciones, setOcupaciones] = useState([]);

    useEffect(() => {
        obtenerCiudades(api, idUsr);
        obtenerDepartamentos(api, idUsr);
        obtenerOcupaciones(api, idUsr);
    }, []);

    const obtenerCiudades = () => {
        
        fetch(`https://censo.develotion.com/ciudades.php`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "apikey" : api,
                "iduser" : idUsr
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setCiudades(json.ciudades);
        });
    }

    const obtenerDepartamentos = () => {
        
        fetch(`https://censo.develotion.com//departamentos.php`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "apikey" : api,
                "iduser" : idUsr
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setDepartamentos(json.departamentos);
        });
    }

    const obtenerOcupaciones = () => {
        
        fetch(`https://censo.develotion.com//ocupaciones.php`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "apikey" : api,
                "iduser" : idUsr
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setOcupaciones(json.ocupaciones);
        });
    }

    const borrarPersonaApi = () => {
        
        fetch(`https://censo.develotion.com//personas.php?idCenso=${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "apikey" : api,
                "iduser" : idUsr
            },
        })
            .then((response) => response.json())
            .then((json) => {
                    dispatch(borrarPersona(id));
        });
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td>{departamentos.find(dep => dep.id == departamento)?.nombre}</td>
            <td>{ciudades.find(ciud => ciud.id == ciudad)?.nombre}</td>
            <td>{ocupaciones.find(ocu => ocu.id == ocupacion)?.ocupacion}</td>
            <td>{fechaNacimiento}</td>
            <td>
                <div className='row p-3 justify-content-center ' style={{ width: '100px' }}>
                    <Button variant="danger" onClick={borrarPersonaApi}>
                        Borrar
                    </Button>
                </div>
            </td>
        </tr>
    )
}
export default Persona