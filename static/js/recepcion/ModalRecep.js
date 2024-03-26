import { $ModalIE, $NotasGenerar, $ModalBorrar, $ModalEdit } from "./QuerySelectors.js";

export const $MandarInfoExtra = new bootstrap.Modal($ModalIE);

export const $ModalGenerarNota = new bootstrap.Modal($NotasGenerar);

export const $ModalComfirmarBorrar = new bootstrap.Modal($ModalBorrar);

export const $ModalEditarNota = new bootstrap.Modal($ModalEdit);