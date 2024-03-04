import { $ModalBuscarMatricula, $ModalConfirmarMatricula, $ModalTicket } from "./QuerySelectors.js";

export const $BuscarMatricula = new bootstrap.Modal($ModalBuscarMatricula);

export const $ConfirmarMatricula = new bootstrap.Modal($ModalConfirmarMatricula);

export const $MandarTicketError = new bootstrap.Modal($ModalTicket);