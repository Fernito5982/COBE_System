import { $ModalEditarNota } from "../ModalRecep.js";
import { $DescripcionEdit, $NivelEdit, $TituloEdit, $btnEditar } from "../QuerySelectors.js";
import { EnviarNotaEditada } from "./EnviarAPI.js";


export function EditarNota(Nota, id){

    const {Nivel, Descripcion, Titulo} = Nota

    $ModalEditarNota.show();
    $NivelEdit.value = Nivel;
    $DescripcionEdit.value = Descripcion;
    $TituloEdit.value = Titulo;
    $btnEditar.onclick = () => EnviarNotaEditada($NivelEdit, $DescripcionEdit, $TituloEdit, id);
}
