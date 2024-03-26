import { $ModalBuscarMatricula, $ModalConfirmarMatricula, $ModalTicket, $ModalIE } from "./QuerySelectors.js";

export const $BuscarMatricula = new bootstrap.Modal($ModalBuscarMatricula);

export const $ConfirmarMatricula = new bootstrap.Modal($ModalConfirmarMatricula);

export const $MandarInfoExtra = new bootstrap.Modal($ModalIE);

export const $MandarTicketError = new bootstrap.Modal($ModalTicket);
