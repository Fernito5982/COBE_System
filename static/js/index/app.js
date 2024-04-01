import { formatearFecha } from '../Reloj.js';
import { MostrarModalBusqueda, MostrarConfirmacionBusqueda,EsconderConfirmacionBusqueda,EsconderModalBusqueda, ObtenerMatricula, EsconderNewAlmno } from './BusquedaMatricula/Modal.ObtenerMatricula.js';


import handleScreenChange from './MediaQuerys/MediaQuerry.Navbar.js'

import { $BtnGenerarAsesoria, $btnMatricula, $DatosCorrectos, $DatosIncorrectos,$BtnRegistrarAlumno,$BtnVolverIntentar, $inputMatricula, $textoInvalid} from './QuerySelectors.js';

// Definir el media query para 992px
const mediaQuery = window.matchMedia('(max-width: 992px)');

// Ejecutar la función al cargar la página
handleScreenChange(mediaQuery);
  
// Agregar un listener para detectar cambios en el tamaño de la pantalla
mediaQuery.addListener(handleScreenChange);
  

const fecha = document.querySelector('#Fecha')
const fechaActual = new Date();
const fechaFormateada = formatearFecha(fechaActual);
fecha.textContent = fechaFormateada;



$BtnGenerarAsesoria.addEventListener('click',(e)=>{
    e.preventDefault();
    MostrarModalBusqueda()

});

$btnMatricula.addEventListener('click',(e)=> {
    e.preventDefault();

    if($inputMatricula.value.length === 6){

        EsconderModalBusqueda();
        ObtenerMatricula($inputMatricula.value) 
    }

    console.log($inputMatricula.value.length);
    $inputMatricula.classList.add('is-invalid');
    $textoInvalid.textContent = "Ingresa una matricula de 6 caracteres"

    setTimeout(() => {
        $inputMatricula.classList.remove('is-invalid');
    },2000);
    
});

$DatosIncorrectos.addEventListener('click',(e)=>{
    e.preventDefault();
    EsconderConfirmacionBusqueda();
    MostrarModalBusqueda();
});

$DatosCorrectos.addEventListener('click',(e)=>{
    e.preventDefault();
    EsconderConfirmacionBusqueda();
    window.location = "GenerarAsesoria";
});

$BtnVolverIntentar.addEventListener('click', (e)=>{
    e.preventDefault();
    EsconderNewAlmno();
    MostrarModalBusqueda();
});

$BtnRegistrarAlumno.addEventListener('click',(e)=>{
    e.preventDefault();
    EsconderNewAlmno();
    window.location = "GenerarAsesoriaNuevoUsuario";
});