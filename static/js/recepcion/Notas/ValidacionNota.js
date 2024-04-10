
export function Validation(Titulo, DescripNotas, NivelNotas, limit1, limit2){
    const v1 = validar1(DescripNotas, limit2);
    const v2 = validar1(Titulo, limit1);
    const v3 = validar2(NivelNotas);
    if(v1 == true && v2 == true && v3 == true){
        return true;
    }
}


function validar1(input, limit){
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

function validar2(input){
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