
var id = null;
var tr = null;
var NroDes = 1;

let but = document.getElementById("but-tic");
let not = document.getElementById("but-not");
let desc = document.getElementById('but-two-fu');

desc.addEventListener('click', e=>{
    if(NroDes == 1){
        desc.style.pointerEvents = 'none';
        but.disabled = true;
        not.disabled = true;
        var pos1 = 15;
        var pos2 = 15;
        clearInterval(id);
        clearInterval(tr);
        id = setInterval(frame1, 1)
        tr = setInterval(frame2, 1)
        function frame1(){
            if(pos1 == 70){
                clearInterval(id);
            } else {
                pos1++;
                but.style.left = pos1 + 'px';
            }
        }
        function frame2(){
            if(pos2 == 110){
                clearInterval(tr);
                NroDes = 0;
                desc.style.pointerEvents = 'all';
                but.disabled = false;
                not.disabled = false;
            } else {
                pos2++;
                not.style.left = pos2 + 'px';
            }
        }
    }else{

            desc.style.pointerEvents = 'none';
            but.disabled = true;
            not.disabled = true;
            var pos1 = 70;
            var pos2 = 110;
            clearInterval(id);
            clearInterval(tr);
            id = setInterval(frame3, 1)
            tr = setInterval(frame4, 1)
            function frame3(){
                if(pos1 < 14){
                    clearInterval(id);
                } else {
                    pos1--;
                    but.style.left = pos1 + 'px';
                }
            }
            function frame4(){
                if(pos2 < 14){
                    clearInterval(tr);
                    NroDes = 1;
                    desc.style.pointerEvents = 'all';
                    but.disabled = false;
                    not.disabled = false;
                } else {
                    pos2--;
                    not.style.left = pos2 + 'px';
                }
            }
        
    }
})