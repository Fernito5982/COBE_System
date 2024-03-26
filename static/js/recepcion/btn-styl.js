
var id = null;
var tr = null;
var NroDes = 1;

function but_dis(){
    let but = document.getElementById("but-tic");
    let not = document.getElementById("but-not");
    let desc = document.getElementById('but-two-fu');
    if(NroDes == 1){
        desc.disabled = true;
        but.disabled = true;
        not.disabled = true;
        var pos1 = 15;
        var pos2 = 15;
        clearInterval(id);
        clearInterval(tr);
        id = setInterval(frame1, 1)
        tr = setInterval(frame2, 1)
        function frame1(){
            if(pos1 == 75){
                clearInterval(id);
            } else {
                pos1++;
                but.style.left = pos1 + 'px';
            }
        }
        function frame2(){
            if(pos2 == 115){
                clearInterval(tr);
                NroDes = 0;
                desc.disabled = false;
                but.disabled = false;
                not.disabled = false;
            } else {
                pos2++;
                not.style.left = pos2 + 'px';
            }
        }
    }else{

            desc.disabled = true;
            but.disabled = true;
            not.disabled = true;
            var pos1 = 75;
            var pos2 = 115;
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
                    desc.disabled = false;
                    but.disabled = false;
                    not.disabled = false;
                } else {
                    pos2--;
                    not.style.left = pos2 + 'px';
                }
            }
        
    }
}