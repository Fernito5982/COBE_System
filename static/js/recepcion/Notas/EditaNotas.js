import { $ModalEditarNota } from "../ModalRecep.js";
import { $DescripcionEdit, $NivelEdit, $TituloEdit, $btnEditar } from "../QuerySelectors.js";
import { validarEdit } from "./ValidarEdit.js";



export function EditarNota(id, nivel, descrip, titul){
    $ModalEditarNota.show();
    $NivelEdit.value = nivel;
    $DescripcionEdit.value = descrip;
    $TituloEdit.value = titul;

    $btnEditar.onclick = () => confirmEdit($NivelEdit,$DescripcionEdit,$TituloEdit);
}

function confirmEdit(Nivel, Descrip, Titul){
    validarEdit(Nivel, 100);
    validarEdit(Descrip, 120);
    validarEdit(Titul, 19);
}