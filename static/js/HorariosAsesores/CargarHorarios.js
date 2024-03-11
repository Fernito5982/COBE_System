import {$contenedorHorarios} from "./QuerySelectors.js"

export async function CargarHorarios() {
    try {
        await ObtenerHorariosAPI();
    } catch (error) {
    console.error(error);       
    }
}


async function ObtenerHorariosAPI() {
    try {
        
        const respuesta = await fetch('/Api/Horarios');
        const resultado = await respuesta.json();
        GenerarCards(resultado.asesores_informacion)

    } catch (error) {
        console.error(error);       
    }
}


function GenerarCards(Horarios) {
    
    $contenedorHorarios.innerHTML = "";

    Horarios.forEach(horario => {
        const card = document.createElement('div');
        card.style = "max-width: 540px;"
        card.classList.add('card');
        card.classList.add('mb-3');
        card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="static/img/profile_img/profile_pictures/${LimpiadorImagen(horario.Imagen)}" class="rounded-start" style="width:100%; height:100%; object-fit:cover;" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body ms-2 ">
                        <h5 class="card-title">${horario.Nombre}</h5>
                        <label>${horario.Carrera}</label>
                        <small class="text-muted d-block">Asesor de</small>
                        <p class="card-text">
                        ${horario.Materias}
                        </p>
                        <p class="card-text"><small class="text-muted">${horario.Horarios}</small></p>
                    </div>
                </div>
            </div>
        `;

        $contenedorHorarios.appendChild(card);        
    });
}


function LimpiadorImagen(ImagenRaw) {
    const urlRaw = ImagenRaw;
    const urlClean = urlRaw.split('/');

    return urlClean[urlClean.length - 1];
}