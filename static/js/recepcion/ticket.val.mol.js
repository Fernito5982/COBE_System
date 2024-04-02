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

// Funcion Detonadora de evento|
$BotonTicket.addEventListener('click', async(e)=>{
    e.preventDefault();
    ValidarTicket($AsuntoTicket);
    ValidarTicket($DescricpionTicket);

    if($DescricpionTicket.value != '' && $AsuntoTicket.value != ''){
        const Tic = CopitTicket();
        try {
            const respuesta = await EnviarTicket(Tic);
            $MandarTicketError.hide();
            $AsuntoTicket.value = '';
            $DescricpionTicket.value = '';
            $AsuntoTicket.classList.remove('is-valid');
            $DescricpionTicket.classList.remove('is-valid');
        } catch (error) {
            console.error('Error al enviar el ticket:', error);
        }
        
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


async function EnviarTicket(tic){
   try {
        const response = await EnviarTicketAPI(tic);
        return response;
   } catch (error) {
        reject(error);
   }
}

async function EnviarTicketAPI(tic) {
    try {

        const response = await fetch('Api/ObtenerTicket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tic)
        });

        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();

        return responseData;

    } catch (error) {
        console.error('Error',error.message);
    }
}