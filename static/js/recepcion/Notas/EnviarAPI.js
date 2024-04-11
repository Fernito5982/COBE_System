import { NotasEditas } from "./NotasObjetos.js";
import { validarTodo } from "./ValidarEdit.js";

export async function AlmacenarBD(Notas){
    
    try {
        const response = await EnviarNotaAPI(Notas);
        return response.message;
    } catch (error) {
        reject(error)
    }
    
}


async function EnviarNotaAPI(Nota){

    try {
        const response = await fetch('Api/EnviarNota', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Nota)
        });

        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(responseData);
        return responseData;


    } catch (error) {
        console.error('Error',error.message);
    }
}

export async function EnviarNotaEditada(Nivel, Descripcion, Tiutlo, id){
    try {
        if(validarTodo(Nivel, Descripcion, Tiutlo)){
            const obj = await ConvertiObjeto(Nivel, Descripcion, Tiutlo);
            await EnviarNotaEditaAPI(obj, id);
        }
    } catch (error) {
        
    }
}

async function ConvertiObjeto(Nivel, Descripcion, Tiutlo){
    NotasEditas.Nivel = Nivel.value;
    NotasEditas.Descripcion = Descripcion.value;
    NotasEditas.Titulo = Tiutlo.value;
    console.log(NotasEditas);
    return NotasEditas;
}

async function EnviarNotaEditaAPI(Nota, id){
    try {
        const response = await fetch(`Api/EnviarNotaEditar/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Nota)
        });

        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log(responseData);
        return responseData;


    } catch (error) {
        console.error('Error',error.message);
    }
}