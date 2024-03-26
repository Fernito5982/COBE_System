const btnTwo = document.getElementById('but-two-fu');
const btnTic = document.getElementById('but-tic');
const btnNot = document.getElementById('but-not');


window.addEventListener('load', e=>{
    e.preventDefault();
    
    if(window.location.pathname === '/Recepcion'){
        btnTwo.style.display = 'block';
        btnTic.style.display = 'block';
        btnNot.style.display = 'block';
    }else{
        if(window.location.pathname === '/Asesorias'){
            btnTwo.style.display = 'block';
            btnTic.style.display = 'block';
        }
    }

})

