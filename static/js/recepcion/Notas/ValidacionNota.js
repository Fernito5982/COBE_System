
export function validar1(input, limit){
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

export function validar2(input){
    if(input.value === ''){
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
     }else{
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
     }
}