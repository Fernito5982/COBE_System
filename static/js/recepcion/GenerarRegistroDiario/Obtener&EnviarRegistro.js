import { $CarreraInput, $CorreoInput, $MatriculaInput, $NombreInput, $ServicioInput, $SexoInput, $TelefonoInput } from "./QuerySelectors.js"

const RegistroDiario = {
    Nombre: '',
    Telefono: '',
    Correo: '',
    Matricula: '',
    Carrera: '',
    Servicio: '' ,
    Sexo: ''
}


function ObtenerDatosRegistroDiario() {
    const nuevoRegistro = {...RegistroDiario}

    nuevoRegistro.Carrera = $CarreraInput.value;
    nuevoRegistro.Nombre = $NombreInput.value;
    nuevoRegistro.Telefono = $TelefonoInput.value;
    nuevoRegistro.Correo = `${$CorreoInput.value}@alumnos.uacj.mx`
    nuevoRegistro.Servicio = $ServicioInput.value;
    nuevoRegistro.Matricula = $MatriculaInput.value;
    nuevoRegistro.Sexo = $SexoInput.value;

    return nuevoRegistro;
    
}


async function EnviarRegistroAPI() {

    const Registro = ObtenerDatosRegistroDiario();

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


export async function EnviarRegistroDiario() {
    try {
        const response = await EnviarRegistroAPI();
        return response.message;

    } catch (error) {
        reject(error);
    }
}