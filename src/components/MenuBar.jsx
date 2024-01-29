import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import React from 'react'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const MenuBar = () => {

  const cerrarSesion = () => {
    localStorage.clear();
  }

  return (
    <>
      {/* Navbar */}
      <Navbar fixed="top">
        <Container>
          

          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Dashboard
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/Home">Home</Dropdown.Item>
              <Dropdown.Item as={Link} to="/AgregarPersona">Agregar Persona</Dropdown.Item>
              <Dropdown.Item as={Link} to="/ListadoPersonas">Listado de Personas</Dropdown.Item>
              <Dropdown.Item as={Link} to="/CensadosTotales">Censados totales</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Analisis
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/PersonasPorDepartamento">Personas por departamento</Dropdown.Item>
              <Dropdown.Item as={Link} to="/PersonasPorOcupacion">Personas por ocupación</Dropdown.Item>
              <Dropdown.Item as={Link} to="/UsuariosPorDepartamento">Usuarios por Departamento</Dropdown.Item>
              <Dropdown.Item as={Link} to="/PorcentajeCensados">Porcentaje Censados</Dropdown.Item>
              <Dropdown.Item as={Link} to="/FinCenso">Cuando finaliza el Censo</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Navbar.Brand href="/Login" onClick={cerrarSesion}>
            Cerrar Sesion
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
