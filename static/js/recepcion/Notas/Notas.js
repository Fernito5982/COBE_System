import { $ModalGenerarNota, $ModalComfirmarBorrar, $ModalEditarNota } from "../ModalRecep.js";
import { $BtnNote, $BtnGenerarNot, $DescripNotas, $NivelNotas, $BtnCancelNot, $htmlConNot, $btnComfBorrar, $NivelEdit, $DescripcionEdit, $btnEditar, $Titulo, $TituloEdit } from "../QuerySelectors.js"
import { AlmacenarBD } from "./EnviarAPI.js";
import { Notas } from "./NotasObjetos.js";
import { validar1, validar2 } from "./ValidacionNota.js";


//Detectar el boton de Notas
$BtnNote.addEventListener('click', e=>{
    e.preventDefault();
    $ModalGenerarNota.show();
})

//Boton de Generar Nota
$BtnGenerarNot.addEventListener('click', e=>{
    e.preventDefault();
    console.log("Generado....");
    if(validar2($NivelNotas) && validar1($Titulo, 19) && validar1($DescripNotas, 120)){
        Notas.NivelAsunto = $NivelNotas.value;
        Notas.Titulo = $Titulo.value;
        Notas.Descripcion = $DescripNotas.value;
        AlmacenarBD(Notas);
        CerrarModalNotas();
    }
})


//Cerrar modal
$BtnCancelNot.addEventListener('click', e=>{
    e.preventDefault();
    CerrarModalNotas();
})

function CerrarModalNotas() {
    $ModalGenerarNota.hide();
    $DescripNotas.value = '';
    $NivelNotas.value = '';
    $Titulo.value = '';
    $DescripNotas.classList.remove('is-valid');
    $NivelNotas.classList.remove('is-valid');
    $DescripNotas.classList.remove('is-invalid');
    $NivelNotas.classList.remove('is-invalid');
    $Titulo.classList.remove('is-invalid');
    $Titulo.classList.remove('is-valid');
}