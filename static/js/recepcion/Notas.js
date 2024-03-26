import { $ModalGenerarNota, $ModalComfirmarBorrar, $ModalEditarNota } from "./ModalRecep.js";
import { $BtnNote, $BtnGenerarNot, $DescripNotas, $NivelNotas, $BtnCancelNot, $htmlConNot, $btnComfBorrar, $NivelEdit, $DescripcionEdit, $btnEditar, $Titulo, $TituloEdit } from "./QuerySelectors.js"

//Detectar el boton de Notas
$BtnNote.addEventListener('click', e=>{
    e.preventDefault();
    $ModalGenerarNota.show();
})

//Cerrar modal
$BtnCancelNot.addEventListener('click', e=>{
    e.preventDefault();
    $DescripNotas.value = '';
    $NivelNotas.value = '';
    $Titulo.value = '';
    $DescripNotas.classList.remove('is-valid');
    $NivelNotas.classList.remove('is-valid');
    $DescripNotas.classList.remove('is-invalid');
    $NivelNotas.classList.remove('is-invalid');
    $Titulo.classList.remove('is-invalid');
    $Titulo.classList.remove('is-valid');
})

//Boton de Generar Nota
$BtnGenerarNot.addEventListener('click', e=>{
    e.preventDefault();
    ValidarNotas($DescripNotas);
    ValidarNotas($NivelNotas);
    validarTitulo($Titulo);

    //Segunda verificacion e invocacion de la funcion de generar nota y JSON
    if(($DescripNotas.value != '' && $DescripNotas.value.length <= '140') && $NivelNotas.value != '' && ($Titulo.value != '' && $Titulo.value.length <= '19')){
        NotasGenerada();
        const Nota = CopitNota();
        ConvertirJSON(Nota);
        $ModalGenerarNota.hide();
        $DescripNotas.value = '';
        $NivelNotas.value = '';
        $Titulo.value = '';
        $DescripNotas.classList.remove('is-valid');
        $NivelNotas.classList.remove('is-valid');
        $Titulo.classList.remove('is-valid');
    }
})

//Validar Titulo
function validarTitulo(TicVal){
    if(TicVal.value === '' || TicVal.value.length > '19'){
        TicVal.classList.add('is-invalid');
        TicVal.classList.remove('is-valid');
     }else{
        TicVal.classList.add('is-valid');
        TicVal.classList.remove('is-invalid');
     }
     return TicVal;
}

//Validar Descripcion y Seleccion de Nivel
function ValidarNotas(TicVal){
    if(TicVal.value === '' || TicVal.value.length >= '141'){
        TicVal.classList.add('is-invalid');
        TicVal.classList.remove('is-valid');
     }else{
        TicVal.classList.add('is-valid');
        TicVal.classList.remove('is-invalid');
     }
     return TicVal;
}

//Objeto para almacenar todas las notas
const Nota = {
    Nivel: '',
    Descripcion: '',
    Titulo: ''
}

//Almacenas los datos nuevos dentro del objeto
function CopitNota(){
    const NewNota = {...Nota}
    NewNota.Nivel = $NivelNotas.value
    NewNota.Descripcion = $DescripNotas.value
    NewNota.Titulo = $Titulo.value
    
    return(NewNota);
}

function ConvertirJSON(Nota){
    console.log(JSON.stringify(Nota))
    return JSON.stringify(Nota);
}

//Creacion dinamica de notas y botones
const CrearNota = {
    NivelAsunto: '',
    Descripcion: '',
    Titulo: ''
};

//Modificar cada nota y almacenarlas
class notas {
    constructor (){
        this.notas = [];
    }
 
    //Almacenar, imprimir y organizar cada nota
    agregarInfoNotas(nota){
        console.log(nota);
        
        if(nota.NivelAsunto != '' && nota.Descripcion != ''){
            this.notas = [...this.notas, nota];
        }

        this.notas.sort(function (a, b){
            if(a.NivelAsunto > b.NivelAsunto){
                return 1;
            }else{

            }if(a.NivelAsunto < b.NivelAsunto){
                return -1;
            }else{
                return 0;
            }
        })

        console.log(this.notas);
    }

    //Buscar la nota a eliminar por cada id
    EliminarNota(id){
        this.notas = this.notas.filter( nota => nota.id !== id);
    }

    //Cambiar la nota seleccionada
    cambio(id, nv, des, Til){

        this.notas.map(function(op){
            if(op.id == id){
                op.NivelAsunto = nv;
                op.Descripcion = des;
                op.Titulo = Til;
                op.id = Date.now();
            }
            return (op)
        })

        //Objeto para evitar un error e imprimir las notas
        const objImp = {
            NivelAsunto: '',
            Descripcion: ''
        }

        NotasGeneradaEditada(objImp);
        $ModalEditarNota.hide();
    }

}

//Mostrar las notas
class mostrar {

    imprimirnota({notas}){
       
        //Seleccionar, buscar y crear cada elemento y nota
        notas.forEach( nota => {
            const { NivelAsunto, Descripcion, id, Titulo} = nota;
            
            let color;

            switch(NivelAsunto){
                case '1':
                    color = 'danger';
                    break;
                case '2':
                    color = 'warning';
                    break;
                case '3':
                    color = 'success';
                    break;
            }

            const divNota = document.createElement('div');
            divNota.classList.add('col-lg-4');
            divNota.id = id;
            divNota.innerHTML = `
                                    <div class="card text-dark alert-${color} mb-3" style="max-width: 18rem; height: 203px;">
                                        <div class="card-header"><h5 class="card-title">${Titulo}</h5></div>
                                        <div class="card-body">
                                        <p class="card-text" style="font-size: 12px;">${Descripcion}</p>
                                        </div>
                                        <div class="card-footer">
                                            <div id="btn-${id}" class="row justify-content-end">

                                            </div>
                                        </div>
                                    </div>
                                    `


            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('col-lg-2', 'btn');
            btnEliminar.innerHTML = '<i class="icon ion-md-trash">';


            const btnEdit = document.createElement('button');
            btnEdit.classList.add('col-lg-2', 'btn');
            btnEdit.innerHTML = '<i class="icon ion-md-create">'

            $htmlConNot.append(divNota);
            
            const btnID = 'btn-' + id;
            const AgregarBtns = document.getElementById(btnID);

            //Agregar los botones a las notas
            AgregarBtns.appendChild(btnEliminar);
            AgregarBtns.appendChild(btnEdit);

            //Detectar los click de todos los botones precentes
            btnEliminar.onclick = () => SuceesBorrar(id);
            btnEdit.onclick = () => EditarNota(NivelAsunto, Descripcion, id, Titulo);
        });
    }
}

const administrarUI = new mostrar();
const administrasrnotas = new notas();

//Generar nota nueva
function NotasGenerada(){

    //Almacenar la info de la nueva nota
    const NotaFinal = obtenerInfo();
    NotaFinal.id = Date.now() //Crear un id unico
    
    //Eliminar las notas precentes para evitar acumulacion de notas repetidas por el forEach
    EliminarHtml();

    //Almacenar Las Notas
    administrasrnotas.agregarInfoNotas({...NotaFinal});

    //Imprimir la nota
    administrarUI.imprimirnota(administrasrnotas);

    //Evitar almacenar informacion vieja
    reiniciarNotaFinal(NotaFinal);

}

//Almacenar la informacion
function obtenerInfo(){
    const NewObjt = {...CrearNota}
    NewObjt.NivelAsunto = $NivelNotas.value;
    NewObjt.Descripcion = $DescripNotas.value; 
    NewObjt.Titulo = $Titulo.value;

    return (NewObjt);
}

//Eliminar Nota
function EliminarNota(id){
    
    //Eliminar nota del arreglo
    administrasrnotas.EliminarNota(id);

    //Eliminar las notas precentes para evitar acumulacion de notas repetidas por el forEach
    EliminarHtml();

    //Re-imprimir todas las notas restantes
    administrarUI.imprimirnota(administrasrnotas);

    //Esconder Modal
    $ModalComfirmarBorrar.hide();

}


function SuceesBorrar(id){
    $ModalComfirmarBorrar.show();
    $btnComfBorrar.onclick = () => EliminarNota(id);
    
}


//Evita que se clonen cartas
function EliminarHtml(){
    $htmlConNot.innerHTML = '';
}

//Verificar, Validar y asegurar las ediciones de Notas
function EditarNota(Nivel, Des, id, Til){
    $ModalEditarNota.show();
    $NivelEdit.value = Nivel;
    $DescripcionEdit.value = Des;
    $TituloEdit.value = Til;
    $btnEditar.onclick = () => validarTodo(id, $NivelEdit, $DescripcionEdit, Nivel, Des, $TituloEdit, Til)
}

//Validar todo para la edicion de la Nota
function validarTodo(id, nv, des, Nivel, Des, Titulo, Til){
    if(nv.value != '' && (des.value != '' && des.value.length <= '140') && (Titulo.value != '' && Titulo.value.length < '20')){
        if(nv.value != Nivel || des.value != Des || Titulo.value != Til){
            administrasrnotas.cambio(id, nv.value, des.value, Titulo.value);
            nv.classList.remove('is-invalid');
            nv.classList.remove('is-valid');
            des.classList.remove('is-invalid');
            des.classList.remove('is-valid');
            Titulo.classList.remove('is-invalid');
            Titulo.classList.remove('is-valid');
        }else{
            validarSeccion(nv, des, Titulo, Nivel, Des, Til);
        }
    }else{
        validarAmbos(nv, des, Titulo);
    }

}

//Validar dependiedno si son o no iguales a los anteriores valores 
function validarSeccion(nv, des, Titulo, Nivel, Des, Til){
    if(nv.value != Nivel || des.value != Nivel || Titulo != Til){
        console.log(nv.value, des.value, Titulo.value.length, Nivel, Des, Til);
        nv.classList.remove('is-invalid');
        nv.classList.add('is-valid');
        des.classList.remove('is-invalid');
        des.classList.add('is-valid');
        Titulo.classList.remove('is-invalid');
        Titulo.classList.add('is-valid');
    }
    if(nv.value == Nivel && (des.value == Des || des.value.length > '140')){
        nv.classList.add('is-invalid');
        nv.classList.remove('is-valid');
        des.classList.add('is-invalid');
        des.classList.remove('is-valid');
    }
    if(Titulo.value == Til || Til.value.length >= '20'){
        Titulo.classList.add('is-invalid');
        Titulo.classList.remove('is-valid');
    }
}


//Validar si no son valores vacios
function validarAmbos(nv, des, Til){
    if(nv.value == ''){
        nv.classList.add('is-invalid');
        nv.classList.remove('is-valid');
    }else{
        nv.classList.remove('is-invalid');
        nv.classList.add('is-valid');
    }
    if(des.value == ''){
        des.classList.add('is-invalid');
        des.classList.remove('is-valid');
    }else{
        des.classList.remove('is-invalid');
        des.classList.add('is-valid');
    }
    if(Til.value = ''){
        Til.classList.add('is-invalid');
        Til.classList.remove('is-valid');
    }else{
        Til.classList.remove('is-invalid');
        Til.classList.add('is-valid');
    }
}

//Asegurar que la Nota no guarde informacion anterior
function reiniciarNotaFinal(obj){
    obj.NivelAsunto = '';
    obj.Descripcion = '';
    obj.Titulo = '';
    obj.id = '';
}

//Re-imprimir las notas
function NotasGeneradaEditada(op){

    EliminarHtml();

    administrasrnotas.agregarInfoNotas({...op});

    administrarUI.imprimirnota(administrasrnotas);
}