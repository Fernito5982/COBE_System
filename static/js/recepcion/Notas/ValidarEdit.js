

export function validarEdit(input, limit){
    if(input.value === '' || input.value.length > limit){
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
     }else{
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
     }
}