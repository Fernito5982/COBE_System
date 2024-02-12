import { $CarreraInput, $CorreoInput, $MateriaInput, $MatriculaInput, $NombreInput, $NumMateriasInput, $ReprobadaInput, $SemestreInput, $TelefonoInput, $TemaInput, $alerta, $cbxJueves, $cbxLunes, $cbxMartes, $cbxMiercoles, $cbxViernes } from "./QuerySelectos.js";

export function ValidarDatosFormulario() {
    
    const isValidateAcademicos = ValidarDatosAcademicos();
    const isValidateAsesoria = ValidarDatosAsesoria();
    const isValidateContacto = ValidarDatosContacto();
    const isValidateHorario = ValidacionHorario();

    return (isValidateAcademicos && isValidateAsesoria  && isValidateContacto && isValidateHorario) ? true : false;   
}

function ValidarDatosContacto() {

    let contadorValido = 3

    if ($NombreInput.value === ''){
        contadorValido--;
        IncorrectInput($NombreInput);
    } 

    if ($TelefonoInput.value === ''){
        contadorValido--;
        IncorrectInput($TelefonoInput);
    } 

    if($TelefonoInput.value.length < 10 ){
        contadorValido--;
        IncorrectInput($TelefonoInput);
    }
    
    if ($CorreoInput.value === ''){
        contadorValido--;
        IncorrectInput($CorreoInput);
    } 

    return (contadorValido < 3) ?  false :  true
}

function ValidarDatosAcademicos() {
    let contadorValido = 4

    if ($MatriculaInput.value === ''){
        contadorValido--;
        IncorrectInput($MatriculaInput);
    } 

    if ($SemestreInput.value === ''){
        contadorValido--;
        IncorrectInput($SemestreInput);
    }
    
    
    if ($NumMateriasInput.value === ''){
        contadorValido--;
        IncorrectInput($NumMateriasInput);
    } 

    if ($CarreraInput.value === '0'){
        contadorValido--;
        IncorrectInput($CarreraInput);
    } 

    return (contadorValido < 4) ?  false :  true
}

function ValidarDatosAsesoria() {
    let contadorValido = 3

    if ($MateriaInput.value === '0'){
        contadorValido--;
        IncorrectInput($MateriaInput);
    } 

    if ($ReprobadaInput.value === ''){
        contadorValido--;
        IncorrectInput($ReprobadaInput);
    } 

    if ($ReprobadaInput.value > '4'){
        contadorValido--;
        IncorrectInput($ReprobadaInput);
    } 
    
    if ($TemaInput.value === '0'){
        contadorValido--;
        IncorrectInput($TemaInput);
    } 

    return (contadorValido < 3) ?  false :  true
}


function ValidacionHorario(){

    return ($cbxLunes.checked || $cbxMartes.checked || $cbxMiercoles.checked || $cbxJueves.checked || $cbxViernes.checked) ? true : false;

}

function IncorrectInput(input) {
    if(input.classList.contains('is-valid')) input.classList.remove('is-valid');
    
    input.classList.add('is-invalid');
}

export function CorrectInput(input) {
    
    if(input.classList.contains('is-invalid')) input.classList.remove('is-invalid');
    
    input.classList.add('is-valid');

}

export function MostrarAlerta() {
    
    $alerta.classList.remove('oculto');
    $alerta.textContent = "Error Faltan Datos Para Generar La Asesoria";

    setTimeout(() => {
        $alerta.classList.add('oculto')
    }, 3000);
}