const btnTwo = document.getElementById('but-two-fu');
const btnTic = document.getElementById('but-tic');
const btnNot = document.getElementById('but-not');


window.addEventListener('load', e=>{
    e.preventDefault();
    
    if(window.location.pathname === '/Recepcion'){
        btnTwo.style.display = 'flex';
        btnTic.style.display = 'flex';
        btnNot.style.display = 'flex';
    }else{
        if(window.location.pathname === '/Asesorias'){
            btnTwo.style.display = 'flex';
            btnTic.style.display = 'flex';
        }
    }

})

