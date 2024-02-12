import { $UserNameDropdown } from "../QuerySelectors.js";

// Función que se ejecutará cuando cambie el tamaño de la pantalla
export default function handleScreenChange(mq) {
    if (mq.matches) {
      // Si el ancho de la pantalla es menor o igual a 992px
    //   console.log('La pantalla es menor o igual a 992px');
        if ($UserNameDropdown.classList.contains('text-dark')) {
            $UserNameDropdown.classList.remove('text-dark');
            $UserNameDropdown.classList.add('text-white');
        }
    } 
    
    else {
        // Si el ancho de la pantalla es mayor a 992px
        // console.log('La pantalla es mayor a 992px');
        if ($UserNameDropdown.classList.contains('text-white')) {
            $UserNameDropdown.classList.remove('text-white');
            $UserNameDropdown.classList.add('text-dark');
        }
    }
}


