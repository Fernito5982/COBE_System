
import { $ModalBusqueda, $ModalConfirmacion,$ModalNewAlumno } from "./QuerySelectors.js";


export const $BuscarMatricula = new bootstrap.Modal($ModalBusqueda);
export const $ConfirmarMatricula = new bootstrap.Modal($ModalConfirmacion);
export const $NewAlumno = new bootstrap.Modal($ModalNewAlumno);
