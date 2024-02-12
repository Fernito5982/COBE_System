import { ObtenerLocalStorages } from "../../index/FormularioAsesoria/AlmacenarInfoAlumno.js";
import { ObtenerCarreras } from "./CargarCarreras.js";
import { EnviarRegistroDiario } from "./Obtener&EnviarRegistro.js";
import { ObtenerServicios } from "./ObtenerServicios.js";
import { $BtnEnviarRegistro, $CarreraInput, $CorreoInput, $MatriculaInput, $NombreInput, $SexoInput } from "./QuerySelectors.js";


document.addEventListener('DOMContentLoaded', async () =>{

    // Obtener Listado Servicio en BD
    await ObtenerServicios();
    // Obtener Listado de  Carreras en BD
    await ObtenerCarreras(); 

    // Obtener los datos del alumno
    const infoAlumno = ObtenerLocalStorages();
    // Desestructuramos la informacion
    const {Nombre,Correo,Matricula,Carrera,Sexo} = infoAlumno

    // Cargamos los Inputs
    $NombreInput.value = Nombre;
    $CarreraInput.value = Carrera;
    $CorreoInput.value = Correo;
    $MatriculaInput.value = Matricula;
    $SexoInput.value = Sexo;

});


$BtnEnviarRegistro.addEventListener('click', async(e)=>{

    e.preventDefault();
    try {

        
        const response = await EnviarRegistroDiario();
        console.log(response);
        if (response === 'Success') {
            window.location = 'Recepcion';   
        }

    } catch (error) {
        console.error('Error al enviar la asesoría:', error);
    }
});