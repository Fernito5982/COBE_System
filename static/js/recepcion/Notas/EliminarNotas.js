import { $ModalComfirmarBorrar } from "../ModalRecep.js";
import { $btnComfBorrar } from "../QuerySelectors.js";

export function EliminarNotas(id){
    try {
        $ModalComfirmarBorrar.show();
        $btnComfBorrar.onclick = () =>  ProcessEliminacion(id);
    } catch (error) {
        
    }
}


function ProcessEliminacion(id){
    $ModalComfirmarBorrar.hide();
    EliminarNotaAPI(id);
    window.location = '/Recepcion'
}

async function EliminarNotaAPI(id){
    try {
        const response = await fetch(`Api/EliminarNota/${id}`, {
            method: 'DELETE', // Cambiar a DELETE
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        console.log("La nota se eliminó correctamente");

    } catch (error) {
        console.error('Error al eliminar la nota:', error);
    }
}
