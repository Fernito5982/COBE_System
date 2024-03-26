// Imports
import {$BtnComentario, $BtnGuardarComentario, $CarreraInput,$CorreoInput, $MateriaInput, $MatriculaInput, $NombreInput, $TemaInput, $ComentarioTexto, $BtnHorario, $cbxLunes, $txtLunes, $cbxMartes, $cbxMiercoles, $cbxJueves, $cbxViernes, $txtMartes, $txtMiercoles, $txtViernes, $txtJueves, $EnviarAsesoria, $TelefonoInput, $SemestreInput, $NumMateriasInput, $ReprobadaInput, $BtnAsesoriaGenerar} from "./QuerySelectos.js"

import { ObtenerLocalStorages } from "./AlmacenarInfoAlumno.js";
import { ObtenerCarreras } from "./CargarCarreras.js"
import { ObtenerMaterias } from "./CargarMaterias.js";
import { ObtenerTemas } from "./CargarTemas.js";
import { habilitarTextArea } from "./handlerHorarios.js";
import { EnviarAsesoria, ObtenerDatos } from "./Obtener&EnviarDatos.js";
import { CorrectInput } from "./ValidarDatosAsesoria.js";


// Main()

document.addEventListener("DOMContentLoaded", async() =>{

    // Cargamos los Options 
    await ObtenerCarreras()

    // Cargamos la informacion
    const infoAlumno = ObtenerLocalStorages();

    // Desestructuramos la informacion
    const {Nombre,Correo,Matricula,Carrera} = infoAlumno

    // Cargamos los Inputs
    $NombreInput.value = Nombre;
    $CarreraInput.value = Carrera;
    $CorreoInput.value = Correo;
    $MatriculaInput.value = Matricula;

    await ObtenerMaterias(Carrera);

    $NombreInput.addEventListener('input',(e)=>{
        if(e.target.value != "") CorrectInput($NombreInput);
    })
    
    $TelefonoInput.addEventListener('input',(e)=>{
        if(e.target.value != "") CorrectInput($TelefonoInput);
    })
    
    $CorreoInput.addEventListener('input',(e)=>{
        if(e.target.value != "") CorrectInput($CorreoInput);
    })
    
    $MatriculaInput.addEventListener('input',(e)=>{
        if(e.target.value != "") CorrectInput($MatriculaInput);
    })
    
    $SemestreInput.addEventListener('input',(e)=>{
        if(e.target.value != "") CorrectInput($SemestreInput);
    })
    
    $NumMateriasInput.addEventListener('input',(e)=>{
        if(e.target.value != "") CorrectInput($NumMateriasInput);
    })
    
    $CarreraInput.addEventListener('input',(e)=>{
        if(e.target.value != "0") CorrectInput($CarreraInput);
    })
    
    $MateriaInput.addEventListener('input',(e)=>{
        if(e.target.value != "0") CorrectInput($MateriaInput);
    })
    
    $ReprobadaInput.addEventListener('input',(e)=>{
        // console.log(e.target.value)
        if(e.target.value != "") CorrectInput($ReprobadaInput);
    })
    
    $TemaInput.addEventListener('input',(e)=>{
        if(e.target.value != "0") CorrectInput($TemaInput);
    })
    

    $cbxLunes.addEventListener('change', e=> habilitarTextArea($cbxLunes.checked,$txtLunes));

    $cbxMartes.addEventListener('change', e=> habilitarTextArea($cbxMartes.checked,$txtMartes));

    $cbxMiercoles.addEventListener('change', e=> habilitarTextArea($cbxMiercoles.checked,$txtMiercoles));

    $cbxJueves.addEventListener('change', e=> habilitarTextArea($cbxJueves.checked,$txtJueves));

    $cbxViernes.addEventListener('change', e=> habilitarTextArea($cbxViernes.checked,$txtViernes));



});

// AddEventListeners

$MateriaInput.addEventListener('change',async(e)=>{
    await ObtenerTemas(e.target.value);
});

// $TemaInput.addEventListener("change",(e)=>{
//     // console.log(e.target.value);
// });



// Listeners del Boton Comentarios

$BtnComentario.addEventListener('click',(e)=>{
    e.preventDefault();
});

// $BtnGuardarComentario.addEventListener('click',() =>{
//     const comentario = $ComentarioTexto.value;
//     // console.log(comentario);
// });

// Listener del boton Horarios
$BtnHorario.addEventListener('click',(e)=>{
    e.preventDefault();
});


$EnviarAsesoria.addEventListener('click',(e)=>{  
    e.preventDefault();

    ObtenerDatos();
})

// Listener Boton Confirmar Asesoria
$BtnAsesoriaGenerar.addEventListener('click',async()=>{
    try {
        
      const respuesta =  await EnviarAsesoria();
      
      if(respuesta.message === 'Success'){
        console.log('Me ejecute');
        window.location = 'AsesoriaGenerada';
      }

    } catch (error) {
        console.error('Error al enviar la asesoría:', error);
    }
})