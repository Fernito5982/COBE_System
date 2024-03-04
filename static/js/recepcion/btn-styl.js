
var id = null;
var NroDes = 1;

function but_dis(){
    var but = document.getElementById("but-tic");
    if(NroDes == 1){
        var pos = 14;
        clearInterval(id);
        id = setInterval(frame, 1)
        function frame(){
            if(pos == 70){
                clearInterval(id);
                NroDes = 0;
            } else {
                pos++;
                but.style.left = pos + 'px';
            }
        }
    }else{
        var pos = 70;
        clearInterval(id);
        id = setInterval(frame2, 1)
        function frame2(){
            if(pos < 14){
                clearInterval(id);
                NroDes = 1;
            } else {
                pos--;
                but.style.left = pos + 'px';
            }
        }
    }
}