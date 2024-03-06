const $AsuntoTicket = document.querySelector('#SlectorAsunto');
const $DescricpionTicket = document.querySelector('#DescripTicket');
const $BotonTicket = document.querySelector('#SumbitTicket')


$BotonTicket.addEventListener('click', e=>{
    e.preventDefault();

    if($DescricpionTicket.value === ''){
        $DescricpionTicket.classList.add('is-invalid');
        $DescricpionTicket.classList.remove('is-valid');
    }else{
        $DescricpionTicket.classList.add('is-valid');
        $DescricpionTicket.classList.remove('is-invalid');
    }

    if($AsuntoTicket.value === 'Asuntos'){
        $AsuntoTicket.classList.add('is-invalid');
        $AsuntoTicket.classList.remove('is-valid');
    }else{
        $AsuntoTicket.classList.add('is-valid');
        $AsuntoTicket.classList.remove('is-invalid');
    }

    if($DescricpionTicket.value != '' && $AsuntoTicket.value != 'Asuntos'){
        const Tic = CopitTicket();
        ConvertirJSON(Tic);
        $ModalTicket.hide();

    }
})


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
    return JSON.stringify(tic);
}
