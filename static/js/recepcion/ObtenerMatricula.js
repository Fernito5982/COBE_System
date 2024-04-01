import { AlmacenarLocalStorage } from "../index/FormularioAsesoria/AlmacenarInfoAlumno.js";
import { InfoEstudiante } from "../index/estudiante.js";
import { $ConfirmarMatricula } from "./Modales.js";
import { $contenedorResultadoBusqueda, $inputMatricula, $noEncontrado } from "./QuerySelectors.js";


export function ObtenerMatricula(matricula) {
    ConfirmarMatricula(matricula);    
}


async function ConfirmarMatricula(matricula) {

    try {

        const respuesta = await fetch(`./buscar/${matricula}`);
        const resultado  = await respuesta.json();
        
        console.log(resultado.message);
        if (resultado.message === 'Success'){ // Usuario Existe
            $ConfirmarMatricula.show()
            $inputMatricula.value = ''
            const informacionEstudiante = new InfoEstudiante(resultado)
            informacionEstudiante.GenerarInformacionAlumnno($contenedorResultadoBusqueda)
            AlmacenarLocalStorage(informacionEstudiante);
        }

        else{
            $noEncontrado.textContent = `Alumno no encontrado Matricula: ${matricula}`
            MostrarNewAlumno();
        }

    } catch (error) {
        console.log(`Error en la Peticion ${error}`);
    }
   
}

export function BorrarDatos(){
    while ($contenedorResultadoBusqueda.firstChild) {
        $contenedorResultadoBusqueda.removeChild($contenedorResultadoBusqueda.firstChild);
    }

    $inputMatricula.textContent = ''
    console.log('Borre contenido');
}