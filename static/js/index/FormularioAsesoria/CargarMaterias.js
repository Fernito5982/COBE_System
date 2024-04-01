import { $MateriaInput } from "./QuerySelectos.js";


export async function ObtenerMaterias(Carrera) {
    Carrera = Carrera.replace(/ /g, "_");
    
    try {
        await ObtenerMateriasAPI(Carrera);
    } catch (error) {
        console.log(`Error en la Peticion ${error}`);
    }
}


async function ObtenerMateriasAPI(Carrera){
    try {
        const respuesta = await fetch(`/Materias/${Carrera}`);
        const resultado = await respuesta.json();
        CargarInputMaterias(resultado.materias);

    } catch (error) {
        console.log(`Error en la Peticion ${error}`);
    }
}

function CargarInputMaterias(materias) {

    $MateriaInput.innerHTML = '<option value="0"> Elige una Materia </option>'; 

    materias.forEach(materia => {
        const option = document.createElement('option');
        option.value = materia.Nombre;
        option.textContent = materia.Nombre;
        $MateriaInput.appendChild(option);
    });
}