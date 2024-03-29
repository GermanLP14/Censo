import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./MenuBar";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { agregarPersonaRedux } from "../redux/features/personasSlice";
import { useNavigate } from 'react-router-dom';
import { cargaDeptos } from "../redux/features/departamentosSlice";

const AgregarPersona = () => {

    const navigate = useNavigate();

    const api = localStorage.getItem("KEY");
    const id = localStorage.getItem("ID");

    const [deptos, setDeptos] = useState([]);
    const [selectDepto, setSelectDepto] = useState('');

    const [ciudades, setCiudades] = useState([]);
    const [selectCiud, setselectCiud] = useState('');

    const [ocupaciones, setOcupaciones] = useState([]);
    const [selectOcup, setselectOcup] = useState('');

    const [nom, setNom] = useState('');
    const [Nac, setNac] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        obtenerDepartamentos();
        obtenerOcupaciones();
    }, []);

    //Fetch Departamentos
    const obtenerDepartamentos = () => {
        fetch("https://censo.develotion.com//departamentos.php", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "apikey" : api,
                "iduser" : id
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setDeptos(json)
                dispatch(cargaDeptos(json.departamentos));
        });
    }

    const handleChange = (event) => {
        setSelectDepto(event.target.value);
        
        obtenerCiudades(event.target.value);
    }

    const obtenerCiudades = (idDepto) => {

        fetch(`https://censo.develotion.com//ciudades.php?idDepartamento=${idDepto}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "apikey" : api,
                "iduser" : id
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setCiudades(json);
                console.log('json', json)
                
        });
    }

    const handleChangeCiud = (event) => {
        setselectCiud(event.target.value);
        
    }

    const obtenerOcupaciones = () => {
        fetch("https://censo.develotion.com//ocupaciones.php", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "apikey" : api,
                "iduser" : id
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setOcupaciones(json);
                console.log("Ocupaciones", json);
                
        });
    }

    const handleChangeOcup = (event) => {
        setselectOcup(event.target.value);
        
    }

    const handleNombChange = (event) => {
        setNom(event.target.value);
    };

    const handleNacChange = () => {
        setNac(event.target.value);
    }

    const agregarPersona = () => {

        fetch("https://censo.develotion.com//personas.php", {
            method: "POST",
            body: JSON.stringify(
                { 
                    idUsuario : id,
                    nombre : nom,
                    departamento : selectDepto,
                    ciudad : selectCiud,
                    fechaNacimiento : Nac,
                    ocupacion : selectOcup
                }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "apikey": api,
                "iduser": id
            },
        })
        .then((response) => response.json())
        .then((json) => { 
            if(json.codigo == 200) {
                localStorage.setItem("censo", json.idCenso);
                console.log('Agregar Persona', json);
                dispatch(agregarPersonaRedux({ 
                    idCenso : json.idCenso,
                    idUsuario : id,
                    nombre : nom,
                    departamento : selectDepto,
                    ciudad : selectCiud,
                    fechaNacimiento : Nac,
                    ocupacion : selectOcup
                }));

                navigate(`/ListadoPersonas`);
            }
        });
    }

    return (
        <>
        <MenuBar />
        <Container>
            <h1>Agregar Persona</h1>
            <br />
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Nombre" value={nom} onChange={handleNombChange}/>
                </Form.Group>
            <br />
                <Form.Group>
                {/* <Form.Label>Select a department:</Form.Label> */}
                <Form.Control as="select" value={selectDepto} onChange={handleChange}>
                    <option value="" disabled hidden>Departamentos</option>
                        {deptos.departamentos?.map((dpto) => (
                    <option key={dpto.id} value={dpto.id}>{dpto.nombre}</option>
                        ))}
                </Form.Control>
                </Form.Group>
            <br />
                <Form.Group>
                    <Form.Control as="select" value={selectCiud} onChange={handleChangeCiud}>
                        <option value="" disabled hidden>Ciudades</option>
                            {ciudades.ciudades?.map((ciudad) => (
                        <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>
                            ))}
                    </Form.Control>
                </Form.Group>
            <br />
                <Form.Group>
                    <label htmlFor="">Fecha de nacimiento</label>
                    <Form.Control type="date" placeholder="Fecha de nacimiento" value={Nac} onChange={handleNacChange}/>
                </Form.Group>
            <br />
                <Form.Group>
                
                <Form.Control as="select" value={selectOcup} onChange={handleChangeOcup}>
                    <option value="" disabled hidden>Ocupaciones</option>
                        {ocupaciones.ocupaciones?.map((ocupa) => (
                    <option key={ocupa.id} value={ocupa.id}>{ocupa.ocupacion}</option>
                        ))}
                </Form.Control>

                </Form.Group>
            <br />
            </Form>
            <br />
            <Button onClick={agregarPersona}>Agregar</Button>
        </Container>
        </>
    );
};

export default AgregarPersona;
