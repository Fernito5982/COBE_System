import { ObtenerLocalStorages } from "../../index/FormularioAsesoria/AlmacenarInfoAlumno.js";
import { ObtenerCarreras } from "./CargarCarreras.js";
import { EnviarRegistroDiario } from "./Obtener&EnviarRegistro.js";
import { $ModalDatosVerificar } from "./ModalRegis.js";
import { ObtenerServicios } from "./ObtenerServicios.js";
import { $BtnEnviarRegistro, $CarreraInput, $CorreoInput, $MatriculaInput, $NombreInput, $SexoInput, $TelefonoInput, $ServicioInput, $BodyModalRegistoCom, $BtnSonCorrectos  } from "./QuerySelectors.js";



document.addEventListener('DOMContentLoaded', async () =>{


    // Obtener Listado Servicio en BD
    await ObtenerServicios();
    // Obtener Listado de  Carreras en BD
    await ObtenerCarreras(); 

    // Obtener los datos del alumno
    const infoAlumno = ObtenerLocalStorages();
    // Desestructuramos la informacion
    const {Nombre,Correo,Matricula,Carrera,Sexo} = infoAlumno

    // Cargamos los Inputs
    $NombreInput.value = Nombre;
    $CarreraInput.value = Carrera;
    $CorreoInput.value = Correo;
    $MatriculaInput.value = Matricula;
    $SexoInput.value = Sexo;

});


$BtnEnviarRegistro.addEventListener('click', async(e)=>{

    e.preventDefault();
    ValidacionTel($TelefonoInput);
    ValidacionServ($ServicioInput);

    if($TelefonoInput.value.length === 10 && $ServicioInput.value != '0' ){

        var Serv;

        switch ($ServicioInput.value){
            case '1':
                Serv = 'Informacion General';
                break;
            case '2':
                Serv = 'Asesorias Psicologicas';
                break;
            case '3':
                Serv = 'Asesorias Academicas';
                break;
            case '4':
                Serv = 'Desarrollo Humano';
                break;
            case '5':
                Serv = 'Becas';
                break;
            case '6':
                Serv = 'Curso Apoyo';
                break;
            case '7':
                Serv = 'IndioBus';
                break;
            case '8':
                Serv = 'Orientacion Vocacional';
                break;
            case '9':
                Serv = 'Objetos Extraviados';
                break;
            case '10':
                Serv = 'Entrega de objeto extraviado';
                break;
            default:
                console.log('No funciona el swich');
                break;
        }

        $ModalDatosVerificar.show();
        $BodyModalRegistoCom.innerHTML = `<p><span class="fw-bold fs-2">Porfavor, verifique los datos</span></p>
                                        <p><span class="fw-bold ">Nombre: </span> ${$NombreInput.value}
                                        <p><span class="fw-bold ">Matricula: </span> ${$MatriculaInput.value}
                                        <p><span class="fw-bold ">Telefóno: </span> ${$TelefonoInput.value}
                                        <p><span class="fw-bold ">Correo Institucional: </span> ${$CorreoInput.value}@alumno.uacj.mx
                                        <p><span class="fw-bold ">Programa Academico: </span> ${$CarreraInput.value}
                                        <p><span class="fw-bold ">Servicio Otorgado: </span> ${Serv}
                                        <p><span class="fw-bold ">Genero: </span> ${$SexoInput.value === 'M' ? 'Masculino' : 'Femenino'}
                            `
    }
});

function ValidacionTel(TS){
    if(TS.value.length != 10){
        TS.classList.add('is-invalid');
        TS.classList.remove('is-valid');
    }else{
        TS.classList.add('is-valid');
        TS.classList.remove('is-invalid');
    }
    return TS;
}

function ValidacionServ(Se){
    if(Se.value == 0){
        Se.classList.add('is-invalid');
        Se.classList.remove('is-valid');
    }else{
        Se.classList.add('is-valid');
        Se.classList.remove('is-invalid');
    }
    return Se;
}

$BtnSonCorrectos.addEventListener('click', async(e)=>{
    e.preventDefault();
         try {

        
         const response = await EnviarRegistroDiario();
         console.log(response);
      if (response === 'Success') {
           window.location = 'Recepcion';   
        }

   } catch (error) {
        console.error('Error al enviar la asesoría:', error);
    }
    window.location = 'RegistroGenerado';
});