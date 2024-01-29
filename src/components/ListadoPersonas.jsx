import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./MenuBar";
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import Persona from "./Persona";

const ListadoPersonas = () => {
    const api = localStorage.getItem("KEY");
    const id = localStorage.getItem("ID");

    const personasRedux = useSelector((state) => {
        console.log('state', state);
        return state.listaDePersonas;
    });

    useEffect(() => {
        obtenerPersonas(api, id);
    }, []);

    const obtenerPersonas = () => {
        
        fetch(`https://censo.develotion.com//personas.php?idUsuario=${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "apikey" : api,
                "iduser" : id
            },
        })
            .then((response) => response.json())
            .then((json) => {
                
        });
    }

    return (
    <>
        <MenuBar />
        <div >
            <h1>Listado de Personas</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Ciudad</th>
                        <th>Ocupacion</th>
                        <th>Nacimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personasRedux.map(pers => <Persona key={pers.idUsuario} {...pers} />)
                    }
                </tbody>
            </Table>
        </div>
    </>
    );
};

export default ListadoPersonas;