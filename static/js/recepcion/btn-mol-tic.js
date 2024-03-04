import { $BtnTicketError } from "./QuerySelectors.js"
import { $MandarTicketError } from "./Modales.js";

$BtnTicketError.addEventListener('click', e=>{
    e.preventDefault();
    $MandarTicketError.show();
})