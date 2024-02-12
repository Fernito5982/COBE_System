import { $ServicioInput } from "./QuerySelectors.js";

export async function ObtenerServicios() {    
    try {
        await ObtenerServiciosAPI();
    } catch (error) {
        console.log(`Error en la Peticion ${error}`);
    }
}


async function ObtenerServiciosAPI(){
    try {
        const respuesta = await fetch(`/Servicios`);
        const resultado = await respuesta.json();
        CargarInputServicios(resultado.Servicio);

    } catch (error) {
        console.log(`Error en la Peticion ${error}`);
    }
}

function CargarInputServicios(servicios) {

    $ServicioInput.innerHTML = '<option value="0">Elige un Servicio </option>'; 

    servicios.forEach(servicio => {
        const option = document.createElement('option');
        option.value = servicio.id_Servicio;
        option.textContent = servicio.Servicio;
        $ServicioInput.appendChild(option);
    });
}