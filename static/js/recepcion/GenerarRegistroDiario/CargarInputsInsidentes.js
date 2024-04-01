import { $AsuntoTicket } from "../QuerySelectors.js";


export async function ObtenerInsidencias() {
     try {
        
        const respuesta = await ObtenerInsidenciasAPI()
        return respuesta;

     } catch (err) {
        console.error(err);
        return respuesta;
     }
}


async function ObtenerInsidenciasAPI() {
    try {
        const result = await fetch('/Api/ObtenerTipoInsidencias');
        const response = await result.json();
        GenerarOptionsInsidencias(response.insidencias); 
        return response.message;

    } catch (error) {
        console.error(error);
        return response.message;
    }
}


function GenerarOptionsInsidencias(insidencias) {
    
    insidencias.forEach(insidencia => {
        const option = document.createElement('option');
        option.textContent = insidencia.Tipo
        option.value = insidencia.id_insidencia
        $AsuntoTicket.appendChild(option) 
    });
}