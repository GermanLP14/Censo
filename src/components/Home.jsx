import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./MenuBar";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { cargaInicialPersonas } from "../redux/features/personasSlice";
import { cargaDeptos } from "../redux/features/departamentosSlice";
import { cargaOcupaciones } from "../redux/features/ocupacionesSlice";
import { totalPersonas } from "../redux/features/totales";
import censo from "../assets/censo.png"


const Home = () => {

  const dispatch = useDispatch();

    const api = localStorage.getItem("KEY");
    const id = localStorage.getItem("ID");

    useEffect(() => {
      obtenerPersonas(api, id);
      obtenerDepartamentos(api, id);
      obtenerOcupaciones(api, id);
      obtenerCensados(api, id);
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
            console.log("Obtener Personas", json.personas)
            dispatch(cargaInicialPersonas(json.personas));
            
    });
}

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

          dispatch(cargaDeptos(json.departamentos));
  });
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
        dispatch(cargaOcupaciones(json.ocupaciones));
          
  });
}

const obtenerCensados = () => {
        
  fetch(`https://censo.develotion.com//totalCensados.php`, {
      method: "GET",
      headers: {
          "Content-type": "application/json",
          "apikey" : api,
          "iduser" : id
      },
  })
      .then((response) => response.json())
      .then((json) => {
          dispatch(totalPersonas(json.total));
  });
}
  return (
    <>
      <MenuBar />
      <img src={censo} alt="horse" />
    </>
  );
};

export default Home;