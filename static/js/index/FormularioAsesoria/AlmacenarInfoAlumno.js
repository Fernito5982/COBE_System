const bdAlumno = window.localStorage;


export function AlmacenarLocalStorage(alumno) {
    bdAlumno.setItem("Nombre",alumno.getNombre());
    bdAlumno.setItem("Correo",alumno.getCorreo());
    bdAlumno.setItem("Sexo",alumno.getSexo());
    bdAlumno.setItem("Matricula",alumno.getMatricula());
    bdAlumno.setItem("Carrera",alumno.getCarrera());
}

export function ObtenerLocalStorages() {

    const estudianteInfo = {
        Nombre : bdAlumno.getItem('Nombre'), 
        Correo : bdAlumno.getItem('Correo'), 
        Matricula : bdAlumno.getItem('Matricula'), 
        Carrera : bdAlumno.getItem('Carrera'),
        Sexo: bdAlumno.getItem('Sexo')
    } 

    bdAlumno.clear();

    return estudianteInfo;
}