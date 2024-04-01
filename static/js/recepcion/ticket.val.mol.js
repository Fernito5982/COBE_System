import { $BtnTicketError, $AsuntoTicket, $DescricpionTicket, $BotonTicket, $BtnCancel } from "./QuerySelectors.js"
import { $MandarTicketError } from "./Modales.js";
import { ObtenerInsidencias } from "./GenerarRegistroDiario/CargarInputsInsidentes.js";

$BtnTicketError.addEventListener('click', e=>{
    e.preventDefault();
    ObtenerInsidencias();
    $MandarTicketError.show();
})

$BtnCancel.addEventListener('click', e=>{
    $AsuntoTicket.value = '';
    $DescricpionTicket.value = '';
    $AsuntoTicket.classList.remove('is-valid');
    $DescricpionTicket.classList.remove('is-valid');
    $AsuntoTicket.classList.remove('is-invalid');
    $DescricpionTicket.classList.remove('is-invalid');
})

$BotonTicket.addEventListener('click', e=>{
    e.preventDefault();
    ValidarTicket($AsuntoTicket);
    ValidarTicket($DescricpionTicket);

    if($DescricpionTicket.value != '' && $AsuntoTicket.value != ''){
        const Tic = CopitTicket();
        ConvertirJSON(Tic);
        $MandarTicketError.hide();
        $AsuntoTicket.value = '';
        $DescricpionTicket.value = '';
        $AsuntoTicket.classList.remove('is-valid');
        $DescricpionTicket.classList.remove('is-valid');
    }
})

function ValidarTicket(TicVal){
    if(TicVal.value === ''){
        TicVal.classList.add('is-invalid');
        TicVal.classList.remove('is-valid');
     }else{
        TicVal.classList.add('is-valid');
        TicVal.classList.remove('is-invalid');
     }
     return TicVal;
}

export function Validacion(Val){
    if(Val.value.length != 6){
        Val.classList.add('is-invalid');
        Val.classList.remove('is-valid');
     }else{
        Val.classList.add('is-valid');
        Val.classList.remove('is-invalid');
     }
     return Val;
}

const Ticket = {
    Asunto: '',
    Descripcion: ''
}

function CopitTicket(){
    const NewTicket = {...Ticket}
    NewTicket.Asunto = $AsuntoTicket.value
    NewTicket.Descripcion = $DescricpionTicket.value
    
    return(NewTicket);
}

function ConvertirJSON(tic){
    console.log(JSON.stringify(tic))
    return JSON.stringify(tic);
}
