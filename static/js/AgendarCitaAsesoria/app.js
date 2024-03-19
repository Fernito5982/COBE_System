import { $ModalAsesoria, $NombreAlumnoInput, 
    $EmailInput, $CarreraInput, $AsesorSelect } from "./QuerySelector.js";

const CargarAsesoriasPendientes=async() => {
    try{
        const response = await fetch("./ObtenerAsesoriasPendientes");
        const data = await response.json();
        if (data.message==="Success"){
            let AsesoriasPendientes=``;

            data.Asesorias.forEach((Asesorias) => {
                AsesoriasPendientes += `<tr>
                    <td><a class="btn btn-link" id="${Asesorias.Matricula}" 
                    data-bs-toggle="modal"  data-bs-target="#ModalAsesoriasAlumnos">
                    ${Asesorias.Matricula}</a></td>
                    <td>${Asesorias.Materia}</td>
                    <td>${Asesorias.Tema}</td>
                    <td>${Asesorias.Horario}</td>
                    <td>${Asesorias.Estatus}</td>
                </tr>`;
            });
            tbAsesorias.innerHTML = AsesoriasPendientes;
        } else {
            alert("no se encontraron asesorias pendientes");
        }
    } catch (error) {
        console.log(error);
    }
};

async function cargarDatosModal(matricula){
    console.log(matricula);
    try{
        const response = await fetch(`/buscar/${matricula}`);
        const data = await response.json();
        if (data.message==="Success"){

            $NombreAlumnoInput.value = data.Nombre;
            $EmailInput.value = `al${data.Matricula}`;
            $CarreraInput.value = data.Carrera;
            //Select Asignar Asesor por asignar en curso debo saber como asignar al asesor
            $AsesorSelect.option = "Por Asignar";
        }
    } catch (error) {
        console.log(error);
    }
}

$ModalAsesoria.addEventListener('click', (e)=> {
    let target = e.target || e.srcElement;
    let id = target.id;
    cargarDatosModal(id);

});
 
window.addEventListener("load", async () => {
    await CargarAsesoriasPendientes();
});