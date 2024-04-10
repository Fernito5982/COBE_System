import { imprimirnota } from "./GenerarNotas.js";


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
    imprimirnota(resultado.Notas);

} catch (error) {
    console.log(`Error en la Peticion ${error}`);
}

}


