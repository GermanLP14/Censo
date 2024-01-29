import { useSelector } from "react-redux";

export const useObtenerPersona = () => {
    const personas = useSelector(state => state.listaDePersonas);
    const obtenerPersonaa = (id) => {
        const person = personas?.find(p => p.id == id)
        return person;
    }
    return obtenerPersonaa;
}