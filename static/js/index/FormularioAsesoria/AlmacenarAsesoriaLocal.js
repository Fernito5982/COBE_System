const bdAsesoria = window.localStorage;


export function AlmacenarAsesoriaLocalStorage(Asesoria) {
    const asesoriaJSON = JSON.stringify(Asesoria);
    bdAsesoria.setItem("asesoria",asesoriaJSON)
}

export function ObtenerAsesoriaLocalStorages() {

    let Asesoria = bdAsesoria.getItem("asesoria");
    bdAsesoria.clear();
    
    return (Asesoria) ? JSON.parse(Asesoria) : null;

}