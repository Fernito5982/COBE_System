export class InfoEstudiante{
    #Nombre;
    #Matricula;
    #Correo;
    #Carrera;
    #Sexo;

    constructor(DatosAlumno){

        const{Nombre,Matricula,Sexo,Carrera} = DatosAlumno

        this.#Nombre = Nombre;
        this.#Matricula = Matricula;
        this.#Sexo =Sexo;
        this.#Carrera = Carrera;
        this.#Correo = `al${Matricula}`
    }

    
    GenerarInformacionAlumnno($contenedor) {

        $contenedor.innerHTML = `
            <p><span class="fw-bold ">Matricula:</span> ${this.#Matricula}
            <p><span class="fw-bold ">Nombre:</span> ${this.#Nombre}
            <p><span class="fw-bold ">Carrera:</span> ${this.#Carrera}
            <p><span class="fw-bold ">Sexo:</span> ${this.#Sexo === 'M' ? 'Masculino' : 'Femenino'}
        `;
    }

    getNombre(){return this.#Nombre}
    getMatricula(){return this.#Matricula}
    getCarrera(){return this.#Carrera}
    getSexo(){return this.#Sexo}
    getCorreo(){return this.#Correo}


}

