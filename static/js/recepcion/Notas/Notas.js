import { $ModalGenerarNota, $ModalComfirmarBorrar, $ModalEditarNota } from "../ModalRecep.js";
import { $BtnNote, $BtnGenerarNot, $DescripNotas, $NivelNotas, $BtnCancelNot, $htmlConNot, $btnComfBorrar, $NivelEdit, $DescripcionEdit, $btnEditar, $Titulo, $TituloEdit } from "../QuerySelectors.js"

//Detectar el boton de Notas
$BtnNote.addEventListener('click', e=>{
    e.preventDefault();
    $ModalGenerarNota.show();
})

//Boton de Generar Nota
$BtnGenerarNot.addEventListener('click', e=>{
    e.preventDefault();
    console.log("Generado....");
})