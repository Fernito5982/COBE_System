import { $ModalComfirmarBorrar } from "../ModalRecep.js";
import { $btnComfBorrar } from "../QuerySelectors.js";

export async function EliminarNotas(id){
    try {
        $ModalComfirmarBorrar.show();
        $btnComfBorrar.onclick = () => EliminarNotaAPI(id);
        
    } catch (error) {
        
    }
}

async function EliminarNotaAPI(id){
    try {
        const response = await fetch('Api/ObtenerRegistroDiario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Registro)
        });

        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(responseData);
        return responseData;
 
    } catch (error) {
        
    }
}