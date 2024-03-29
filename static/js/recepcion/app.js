import { formatearFecha } from "../Reloj.js";
import { $BuscarMatricula, $ConfirmarMatricula } from "./Modales.js";
import { $MandarInfoExtra } from "./ModalRecep.js";
import { ObtenerMatricula } from "./ObtenerMatricula.js";
import { Validacion } from './ticket.val.mol.js';
import { $DatosCorrectos, $DatosIncorrectos, $btnMatricula, $btnRegistroDiario, $inputMatricula, $BtnVerMas, $htmlConNot} from "./QuerySelectors.js";

const fecha = document.querySelector('#Fecha')
  
const fechaActual = new Date();
const fechaFormateada = formatearFecha(fechaActual);
fecha.textContent = fechaFormateada;


$btnRegistroDiario.addEventListener('click', e =>{
    e.preventDefault();
    $BuscarMatricula.show();
});

$btnMatricula.addEventListener('click', e =>{
    e.preventDefault();
    Validacion($inputMatricula);
    if($inputMatricula.value.length === 6){
        $BuscarMatricula.hide();
        $ConfirmarMatricula.show();
        ObtenerMatricula($inputMatricula.value);
        console.log($inputMatricula.value);
    }
})


$DatosCorrectos.addEventListener('click', e=>{

    e.preventDefault();
    $ConfirmarMatricula.hide();
    window.location = 'RegistroDiario';

});

$DatosIncorrectos.addEventListener('click', e=>{

    e.preventDefault();
    $ConfirmarMatricula.hide();
    $BuscarMatricula.show();
   
});


$BtnVerMas.addEventListener('click', e=>{
    e.preventDefault();
    $MandarInfoExtra.show();
})

$htmlConNot.addEventListener('onchange', e=>{
    e.preventDefault();
    alert('Hola Mundo');
})