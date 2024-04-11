import { $htmlConNot } from "../QuerySelectors.js";
import { EliminarNotas } from "./EliminarNotas.js";
import { ObtenerNotasEditar } from "./ObtenerAPI.js";


export function OrdenNotas(notas){

    for(var i = 0; i < notas.length; i++){
        if(notas[i].nivel === 'Recado'){
            notas[i].nivel = 'recado';
        }
    }

    notas.sort(function (a, b) {
        if (a.nivel > b.nivel) {
            return 1;
          }
          if (a.nivel < b.nivel) {
            return -1;
          }
          // a must be equal to b
          return 0;
    });

    
    for(var i = 0; i < notas.length; i++){
        if(notas[i].nivel === 'recado'){
            notas[i].nivel = 'Recado';
        }
    }

    imprimirnota(notas);
}


function imprimirnota(notas){
       
    //Seleccionar, buscar y crear cada elemento y nota
    notas.forEach( nota => {
        const { id_nota, nivel, descripcion, Titulo } = nota;
        
        let color;

        switch(nivel){
            case 'Importante':
                color = 'warning';
                break;
            case 'Urgente':
                color = 'danger';
                break;
            case 'Recado':
                color = 'success';
                break;
        }

        const divNota = document.createElement('div');
        divNota.classList.add('col-lg-4');
        divNota.id = id_nota;
        divNota.innerHTML = `
                                <div class="card text-dark alert-${color} mb-3" style="max-width: 18rem; height: 203px;">
                                    <div class="card-header"><h5 class="card-title">${Titulo}</h5></div>
                                    <div class="card-body">
                                    <p class="card-text" style="font-size: 12px;">${descripcion}</p>
                                    </div>
                                    <div class="card-footer">
                                        <div id="btn-${id_nota}" class="row justify-content-end">

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
        
        const btnID = 'btn-' + id_nota;
        const AgregarBtns = document.getElementById(btnID);

        //Agregar los botones a las notas
        AgregarBtns.appendChild(btnEliminar);
        AgregarBtns.appendChild(btnEdit);

        btnEliminar.onclick = () => EliminarNotas(id_nota);
        btnEdit.onclick = () => ObtenerNotasEditar(id_nota);
    });
}