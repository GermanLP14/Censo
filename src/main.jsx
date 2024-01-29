import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login";
import Home from "./components/Home";
import CensadosTotales from "./components/CensadosTotales";
import AgregarPersona from "./components/AgregarPersona";
import ListadoPersonas from "./components/ListadoPersonas";
import PersonasPorDepartamento from "./components/graficas/PersonasPorDepartamento";
import { Provider } from "react-redux";
import { store } from './redux/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(

    <Provider store={store}>
      <App />
    </Provider>

);
