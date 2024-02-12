import {$TemaInput } from "./QuerySelectos.js";


export async function ObtenerTemas(Tema) {
    Tema = Tema.replace(/ /g, "_");
    
    try {
        await ObtenerTemaAPI(Tema);
    } catch (error) {
        console.log(`Error en la Peticion ${error}`);
    }
}


async function ObtenerTemaAPI(Tema){
    try {
        const respuesta = await fetch(`/Temas/${Tema}`);
        const resultado = await respuesta.json();
        CargarInputTemas(resultado.temas);

    } catch (error) {
        console.log(`Error en la Peticion ${error}`);
    }
}

function CargarInputTemas(Temas) {
    $TemaInput.innerHTML = '<option value="0"> Elige un Tema </option>'; 

    Temas.forEach(temas => {
        const option = document.createElement('option');
        option.value = temas.Nombre;
        option.textContent = temas.Nombre;
        $TemaInput.appendChild(option);
    });
}

