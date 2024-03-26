import { AlmacenarAsesoriaLocalStorage, ObtenerAsesoriaLocalStorages } from "./AlmacenarAsesoriaLocal.js";
import { $CarreraInput, $ComentarioTexto, $CorreoInput, $EnviarAsesoria, $Formulario, $MateriaInput, $MatriculaInput, $ModalConfirmacionAsesoria, $NombreInput, $NumMateriasInput, $ReprobadaInput, $SemestreInput, $TelefonoInput, $TemaInput, $cbxJueves, $cbxLunes, $cbxMartes, $cbxMiercoles, $cbxViernes, $infoAsesoria, $txtJueves, $txtLunes, $txtMartes, $txtMiercoles, $txtViernes } from "./QuerySelectos.js";
import { MostrarAlerta, ValidarDatosFormulario } from "./ValidarDatosAsesoria.js";


export function ObtenerDatos() {
    const isValid = ValidarDatosFormulario();
    
    if (isValid){

        $ModalConfirmacionAsesoria.show();
        ObtenerDatosAsesoria();
    } 
    else{
        MostrarAlerta();
    } 
}



export async function EnviarAsesoria(){
    try {
       const respuesta = await EnviarAsesoriaAPI(ObtenerAsesoriaLocalStorages());
        
       return respuesta;
    } catch (error) {
        reject(error) 
    }
}

async function EnviarAsesoriaAPI(Asesoria) {

    try {
        const response = await fetch('Api/ObtenerAsesoria', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Asesoria)
        });

        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();

        return responseData;
        
    } catch (error) {
        console.error('Error',error.message);
    }
}


const AsesoriaAcademica = {
    Nombre: '',
    Telefono: '',
    Correo: '',
    Matricula: '',
    Semestre: '',
    NumMaterias: '',
    Carrera: '',
    Materia: '',
    Reprobada: '',
    Tema: '',
    Horario: '',
    Comentario: 'Ninguno',
    Asesor: 'No Asignado',
    Estatus: 'Por Agendar',
}

function  ObtenerDatosAsesoria(){
    const nuevaAsesoria = {...AsesoriaAcademica}
    nuevaAsesoria.Nombre = $NombreInput.value
    nuevaAsesoria.Telefono = $TelefonoInput.value
    nuevaAsesoria.Correo = $CorreoInput.value
    nuevaAsesoria.Matricula = $MatriculaInput.value
    nuevaAsesoria.Semestre = $SemestreInput.value
    nuevaAsesoria.NumMaterias = $NumMateriasInput.value
    nuevaAsesoria.Carrera = $CarreraInput.value
    nuevaAsesoria.Materia = $MateriaInput.value
    nuevaAsesoria.Reprobada = $ReprobadaInput.value
    nuevaAsesoria.Tema = $TemaInput.value

    nuevaAsesoria.Horario = ObtenerHorario();

    ($ComentarioTexto.value !== '') ? nuevaAsesoria.Comentario = $ComentarioTexto.value : false

    GenerarConfirmacionModal(nuevaAsesoria);
}

function ObtenerHorario() {
    let horario = ''

    if($cbxLunes.checked) horario = horario + ' Lunes '+ $txtLunes.value;
    if($cbxMartes.checked) horario = horario + ' Martes ' + $txtMartes.value;
    if($cbxMiercoles.checked) horario = horario  + ' Miercoles ' +  $txtMiercoles.value;
    if($cbxJueves.checked) horario = horario  + ' Jueves ' +  $txtJueves.value;
    if($cbxViernes.checked) horario = horario  + ' Viernes ' +  $txtViernes.value;

    return horario;
}

function GenerarConfirmacionModal(Asesoria) {
    const {Nombre,Telefono,Matricula,Semestre,NumMaterias,Carrera,Materia,Tema,Horario,Comentario} = Asesoria;

    const bodyAsesoria = `
    
        <div>
            <p class="d-inline fw-bold">Nombre:</p>
            <p class="d-inline" id="NombreConf">${Nombre}</p>
        </div>
        <div>
            <p class="d-inline fw-bold">Matricula:</p>
            <p class="d-inline" id="MatriculaConf">${Matricula}</p>
        </div>
        <div>
            <p class="d-inline fw-bold">Telefono:</p>
            <p class="d-inline" id="TelefonoConf">${Telefono}</p>
        </div>
        <div>
            <p class="d-inline fw-bold">Carrera:</p>
            <p class="d-inline" id="CarreraConf">${Carrera}</p>
        </div>
        <div>
            <p class="d-inline fw-bold">Semestre:</p>
            <p class="d-inline" id="SemestreConf">${Semestre} Semeste</p>
        </div>
        <div>
            <p class="d-inline fw-bold">Numero de Materias:</p>
            <p class="d-inline" id="NumMateriasConf">${NumMaterias} Materias</p>
        </div>
        <div>
            <p class="d-inline fw-bold">Materia:</p>
            <p class="d-inline" id="MateriaConf">${Materia}</p>
        </div>
        <div>
            <p class="d-inline fw-bold">Tema:</p>
            <p class="d-inline" id="TemaConf">${Tema}</p>
        </div>  
        <div>
            <p class="d-inline fw-bold">Horario:</p>
            <p class="d-inline" id="HorarioConf">${Horario}</p>
        </div>
        <div>
            <p class="d-inline fw-bold">Comentario:</p>
            <p class="d-inline" id="ComentarioConf">${Comentario}</p>
        </div>
    `;

    $infoAsesoria.innerHTML = bodyAsesoria;
   AlmacenarAsesoriaLocalStorage(Asesoria);
}