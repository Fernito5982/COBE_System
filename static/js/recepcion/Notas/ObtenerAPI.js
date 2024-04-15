import { EditarNota } from "./EditaNotas.js";
import { OrdenNotas } from "./GenerarNotas.js";


export async function ObtenerNotas() {
    try {
        await ObtenerNotasApi()

    } catch (error) {
        reject(error)
    }
}


async function ObtenerNotasApi() {

try {
    const respuesta = await fetch('./Api/ObtenerNota');
    const resultado = await respuesta.json()
    console.log(resultado.Notas);
    OrdenNotas(resultado.Notas);

} catch (error) {
    console.log(`Error en la Peticion ${error}`);
}

}



export async function ObtenerNotasEditar(id) {
    try {
        await ObtenerNotasEditarApi(id)

    } catch (error) {
        reject(error)
    }
}


async function ObtenerNotasEditarApi(id) {

try {
    const respuesta = await fetch(`./Api/ObtenerNotaEditar/${id}`);
    const resultado = await respuesta.json()
    
    EditarNota(resultado, id);

    } catch (error) {
    console.log(`Error en la Peticion ${error}`);
    }
}
