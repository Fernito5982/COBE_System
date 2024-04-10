
export function AlmacenarBD(Notas){
    const JsonNota = convertirJSON(Notas);
    EnviarJSON(JsonNota);
}

function convertirJSON(Notas){
    console.log(JSON.stringify(Notas))
    return JSON.stringify(Notas);
}

async function EnviarJSON(JsonNota){

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
        console.error('Error',error.message);
    }
}