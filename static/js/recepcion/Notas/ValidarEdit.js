
export function validarTodo(Nivel, Descrip, Titulo){
    const v1 = validarEdit(Descrip, 120);
    const v2 = validarEdit(Titulo, 19);
    const v3 = validarEdit(Nivel, 100);
    if(v1 == true && v2 == true && v3 == true){
        return true;
    }
}

function validarEdit(input, limit){
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
