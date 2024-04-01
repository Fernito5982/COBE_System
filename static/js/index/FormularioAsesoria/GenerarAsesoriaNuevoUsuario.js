// Imports
import {$BtnComentario, $BtnGuardarComentario, $CarreraInput,$CorreoInput, $MateriaInput, $MatriculaInput, $NombreInput, $TemaInput, $ComentarioTexto, $BtnHorario, $cbxLunes, $txtLunes, $cbxMartes, $cbxMiercoles, $cbxJueves, $cbxViernes, $txtMartes, $txtMiercoles, $txtViernes, $txtJueves, $EnviarAsesoria, $TelefonoInput, $SemestreInput, $NumMateriasInput, $ReprobadaInput} from "./QuerySelectos.js"

import { ObtenerCarreras } from "./CargarCarreras.js";
import { habilitarTextArea } from "./handlerHorarios.js";
import { CorrectInput } from "./ValidarDatosAsesoria.js";
import { ObtenerMaterias } from "./CargarMaterias.js";
import { ObtenerTemas } from "./CargarTemas.js";
import { ObtenerDatos } from "./Obtener&EnviarDatos.js";


document.addEventListener('DOMContentLoaded',async() =>{
    await ObtenerCarreras();

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
        console.log(e.target.value)
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

$CarreraInput.addEventListener('change', async(e)=>{
    await ObtenerMaterias(e.target.value);
});

$MateriaInput.addEventListener('change', async(e)=>{
    await ObtenerTemas(e.target.value);
});

$BtnComentario.addEventListener('click',(e)=>{
    e.preventDefault();
});

$BtnGuardarComentario.addEventListener('click',() =>{
    const comentario = $ComentarioTexto.value;
    console.log(comentario);
});

// Listener del boton Horarios
$BtnHorario.addEventListener('click',(e)=>{
    e.preventDefault();
});


$EnviarAsesoria.addEventListener('click',(e)=>{
    e.preventDefault();

    ObtenerDatos();
})

