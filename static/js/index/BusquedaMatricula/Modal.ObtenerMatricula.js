import { AlmacenarLocalStorage } from "../FormularioAsesoria/AlmacenarInfoAlumno.js";
import { $BuscarMatricula, $ConfirmarMatricula,$NewAlumno } from "../Modales.js"
import { $contenedorResultadoBusqueda,$inputMatricula, $noEncontrado} from "../QuerySelectors.js";
import { InfoEstudiante } from "../estudiante.js";



export function MostrarModalBusqueda(){
    $BuscarMatricula.show()
}

export function MostrarConfirmacionBusqueda() {
    $ConfirmarMatricula.show()
    $inputMatricula.value = ''
}

export function EsconderModalBusqueda() {
    $BuscarMatricula.hide()
}

export function EsconderConfirmacionBusqueda() {
    $ConfirmarMatricula.hide()
}

export function MostrarNewAlumno() {
    $NewAlumno.show()
    $inputMatricula.value= ''
}

export function EsconderNewAlmno() {
    $NewAlumno.hide()
}





// ******************** 

export function ObtenerMatricula(matricula) {
    ConfirmarMatricula(matricula);    
}

async function ConfirmarMatricula(matricula) {

    try {

        const respuesta = await fetch(`./buscar/${matricula}`);
        const resultado  = await respuesta.json();

        if (resultado.message === 'Success'){ // Usuario Existe
            MostrarConfirmacionBusqueda();
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

export function ObtenerInfo() {
    
}