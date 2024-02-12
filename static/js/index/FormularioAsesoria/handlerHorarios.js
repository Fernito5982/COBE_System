
export function habilitarTextArea(isActive,textarea){
    if(isActive){
        textarea.removeAttribute('disabled');
    } 
    else{
        textarea.value = '';
        textarea.setAttribute('disabled','disabled');
    }
}


