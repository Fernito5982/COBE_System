import { formatearFecha } from "../Reloj.js";
import { $BuscarMatricula, $ConfirmarMatricula } from "./Modales.js";
import { ObtenerMatricula } from "./ObtenerMatricula.js";
import { $DatosCorrectos, $DatosIncorrectos, $btnMatricula, $btnRegistroDiario, $inputMatricula } from "./QuerySelectors.js";


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
