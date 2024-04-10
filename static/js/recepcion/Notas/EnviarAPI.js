
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
        const response = await fetch('Api/ObtenerNota', {
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