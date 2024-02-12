import {$CarreraInput} from "./QuerySelectos.js"


export async function ObtenerCarreras() {
        try {
            await ObtenerCarrerasAPI()

        } catch (error) {
            reject(error)
        }
}


async function ObtenerCarrerasAPI() {
    
    try {
        const respuesta = await fetch('./Carreras');
        const resultado = await respuesta.json()
        CargaInputCarreras(resultado.Carreras);

    } catch (error) {
        console.log(`Error en la Peticion ${error}`);
    }

}

function CargaInputCarreras(carreras) {
    carreras.forEach(carrera => {
        const option = document.createElement('option');
        option.value = carrera.Nombre;
        option.textContent = carrera.Nombre;
        $CarreraInput.appendChild(option);
    });
}
