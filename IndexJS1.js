var b1, b2, b3, b4, b5;
var b6, b7, b8, b9, count = 0;
var player1 = document.getElementById("result");
var griddiv = document.getElementById("griddiv");
var arr = [2,3,4,5,6,7,8,9,10]; 


function load(){
    document.getElementById("loader").style.display = "none";
}

function check(){
    if(document.getElementById("check").checked){
        document.getElementById("playername").style.display="none";
    }
    else if(!(document.getElementById("check").checked)){
        document.getElementById("playername").style.display="block";
    }
}

function submit(){
    document.getElementById("playername").style.display="none";
}


function item1() {
    var playern1 = document.getElementById("playern1").value;
    var playern2 = document.getElementById("playern2").value;
    if (count == 0) {
        var img1 = document.getElementById("img1");
        img1.src = "xrb.png";
        img1.style.width = "70px";
        img1.style.height = "70px";
        count++;
        arr[0] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 1) {
        var img1 = document.getElementById("img1");
        img1.src = "orb.png";
        img1.style.width = "80px";
        img1.style.height = "80px";
        count++;
        arr[0] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 2) {
        var img1 = document.getElementById("img1");
        img1.src = "xrb.png";
        img1.style.width = "70px";
        img1.style.height = "70px";
        count++;
        arr[0] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 3) {
        var img1 = document.getElementById("img1");
        img1.src = "orb.png";
        img1.style.width = "80px";
        img1.style.height = "80px";
        count++;
        arr[0] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 4) {
        var img1 = document.getElementById("img1");
        img1.src = "xrb.png";
        img1.style.width = "70px";
        img1.style.height = "70px";
        count++;
        arr[0] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 5) {
        var img1 = document.getElementById("img1");
        img1.src = "orb.png";
        img1.style.width = "80px";
        img1.style.height = "80px";
        count++;
        arr[0] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 6) {
        var img1 = document.getElementById("img1");
        img1.src = "xrb.png";
        img1.style.width = "70px";
        img1.style.height = "70px";
        count++;
        arr[0] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 7) {
        var img1 = document.getElementById("img1");
        img1.src = "orb.png";
        img1.style.width = "80px";
        img1.style.height = "80px";
        count++;
        arr[0] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 8) {
        var img1 = document.getElementById("img1");
        img1.src = "xrb.png";
        img1.style.width = "70px";
        img1.style.height = "70px";
        count++;
        arr[0] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 9) {
        var img1 = document.getElementById("img1");
        img1.src = "orb.png";
        img1.style.width = "80px";
        img1.style.height = "80px";
        count++;
        arr[0] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
}

function item2() {
    var playern1 = document.getElementById("playern1").value;
    var playern2 = document.getElementById("playern2").value;
    if (count == 0) {
        var img2 = document.getElementById("img2");
        img2.src = "xrb.png";
        img2.style.width = "70px";
        img2.style.height = "70px";
        count++;
        arr[1] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 1) {
        var img2 = document.getElementById("img2");
        img2.src = "orb.png";
        img2.style.width = "80px";
        img2.style.height = "80px";
        count++;
        arr[1] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 2) {
        var img2 = document.getElementById("img2");
        img2.src = "xrb.png";
        img2.style.width = "70px";
        img2.style.height = "70px";
        count++;
        arr[1] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 3) {
        var img2 = document.getElementById("img2");
        img2.src = "orb.png";
        img2.style.width = "80px";
        img2.style.height = "80px";
        count++;
        arr[1] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 4) {
        var img2 = document.getElementById("img2");
        img2.src = "xrb.png";
        img2.style.width = "70px";
        img2.style.height = "70px";
        count++;
        arr[1] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 5) {
        var img2 = document.getElementById("img2");
        img2.src = "orb.png";
        img2.style.width = "80px";
        img2.style.height = "80px";
        count++;
        arr[1] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 6) {
        var img2 = document.getElementById("img2");
        img2.src = "xrb.png";
        img2.style.width = "70px";
        img2.style.height = "70px";
        count++;
        arr[1] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 7) {
        var img2 = document.getElementById("img2");
        img2.src = "orb.png";
        img2.style.width = "80px";
        img2.style.height = "80px";
        count++;
        arr[1] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 8) {
        var img2 = document.getElementById("img2");
        img2.src = "xrb.png";
        img2.style.width = "70px";
        img2.style.height = "70px";
        count++;
        arr[1] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 9) {
        var img2 = document.getElementById("img2");
        img2.src = "orb.png";
        img2.style.width = "80px";
        img2.style.height = "80px";
        count++;
        arr[1] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
}

function item3() {
    var playern1 = document.getElementById("playern1").value;
    var playern2 = document.getElementById("playern2").value;
    if (count == 0) {
        var img3 = document.getElementById("img3");
        img3.src = "xrb.png";
        img3.style.width = "70px";
        img3.style.height = "70px";
        count++;
        arr[2] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 1) {
        var img3 = document.getElementById("img3");
        img3.src = "orb.png";
        img3.style.width = "80px";
        img3.style.height = "80px";
        count++;
        arr[2] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 2) {
        var img3 = document.getElementById("img3");
        img3.src = "xrb.png";
        img3.style.width = "70px";
        img3.style.height = "70px";
        count++;
        arr[2] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 3) {
        var img3 = document.getElementById("img3");
        img3.src = "orb.png";
        img3.style.width = "80px";
        img3.style.height = "80px";
        count++;
        arr[2] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 4) {
        var img3 = document.getElementById("img3");
        img3.src = "xrb.png";
        img3.style.width = "70px";
        img3.style.height = "70px";
        count++;
        arr[2] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 5) {
        var img3 = document.getElementById("img3");
        img3.src = "orb.png";
        img3.style.width = "80px";
        img3.style.height = "80px";
        console.log("hello");
        count++;
        arr[2] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 6) {
        var img3 = document.getElementById("img3");
        img3.src = "xrb.png";
        img3.style.width = "70px";
        img3.style.height = "70px";
        count++;
        arr[2] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 7) {
        var img3 = document.getElementById("img3");
        img3.src = "orb.png";
        img3.style.width = "80px";
        img3.style.height = "80px";
        count++;
        arr[2] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 8) {
        var img3 = document.getElementById("img3");
        img3.src = "xrb.png";
        img3.style.width = "70px";
        img3.style.height = "70px";
        count++;
        arr[2] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 9) {
        var img3 = document.getElementById("img3");
        img3.src = "orb.png";
        img3.style.width = "80px";
        img3.style.height = "80px";
        count++;
        arr[2] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
}

function item4() {
    var playern1 = document.getElementById("playern1").value;
    var playern2 = document.getElementById("playern2").value;
    if (count == 0) {
        var img4 = document.getElementById("img4");
        img4.src = "xrb.png";
        img4.style.width = "70px";
        img4.style.height = "70px";
        count++;
        arr[3] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 1) {
        var img4 = document.getElementById("img4");
        img4.src = "orb.png";
        img4.style.width = "80px";
        img4.style.height = "80px";
        count++;
        arr[3] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 2) {
        var img4 = document.getElementById("img4");
        img4.src = "xrb.png";
        img4.style.width = "70px";
        img4.style.height = "70px";
        count++;
        arr[3] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 3) {
        var img4 = document.getElementById("img4");
        img4.src = "orb.png";
        img4.style.width = "80px";
        img4.style.height = "80px";
        count++;
        arr[3] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 4) {
        var img4 = document.getElementById("img4");
        img4.src = "xrb.png";
        img4.style.width = "70px";
        img4.style.height = "70px";
        count++;
        arr[3] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 5) {
        var img4 = document.getElementById("img4");
        img4.src = "orb.png";
        img4.style.width = "80px";
        img4.style.height = "80px";
        count++;
        arr[3] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 6) {
        var img4 = document.getElementById("img4");
        img4.src = "xrb.png";
        img4.style.width = "70px";
        img4.style.height = "70px";
        count++;
        arr[3] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 7) {
        var img4 = document.getElementById("img4");
        img4.src = "orb.png";
        img4.style.width = "80px";
        img4.style.height = "80px";
        count++;
        arr[3] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 8) {
        var img4 = document.getElementById("img4");
        img4.src = "xrb.png";
        img4.style.width = "70px";
        img4.style.height = "70px";
        count++;
        arr[3] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 9) {
        var img4 = document.getElementById("img4");
        img4.src = "orb.png";
        img4.style.width = "80px";
        img4.style.height = "80px";
        count++;
        arr[3] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
}

function item5() {
    var playern1 = document.getElementById("playern1").value;
    var playern2 = document.getElementById("playern2").value;
    if (count == 0) {
        var img5 = document.getElementById("img5");
        img5.src = "xrb.png";
        img5.style.width = "70px";
        img5.style.height = "70px";
        count++;
        arr[4] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 1) {
        var img5 = document.getElementById("img5");
        img5.src = "orb.png";
        img5.style.width = "80px";
        img5.style.height = "80px";
        count++;
        arr[4] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 2) {
        var img5 = document.getElementById("img5");
        img5.src = "xrb.png";
        img5.style.width = "70px";
        img5.style.height = "70px";
        count++;
        arr[4] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 3) {
        var img5 = document.getElementById("img5");
        img5.src = "orb.png";
        img5.style.width = "80px";
        img5.style.height = "80px";
        count++;
        arr[4] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 4) {
        var img5 = document.getElementById("img5");
        img5.src = "xrb.png";
        img5.style.width = "70px";
        img5.style.height = "70px";
        count++;
        arr[4] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 5) {
        var img5 = document.getElementById("img5");
        img5.src = "orb.png";
        img5.style.width = "80px";
        img5.style.height = "80px";
        count++;
        arr[4] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 6) {
        var img5 = document.getElementById("img5");
        img5.src = "xrb.png";
        img5.style.width = "70px";
        img5.style.height = "70px";
        count++;
        arr[4] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 7) {
        var img2 = document.getElementById("img5");
        img5.src = "orb.png";
        img5.style.width = "80px";
        img5.style.height = "80px";
        count++;
        arr[4] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 8) {
        var img5 = document.getElementById("img5");
        img5.src = "xrb.png";
        img5.style.width = "70px";
        img5.style.height = "70px";
        count++;
        arr[4] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 9) {
        var img5 = document.getElementById("img5");
        img5.src = "orb.png";
        img5.style.width = "80px";
        img5.style.height = "80px";
        count++;
        arr[4] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
}

function item6() {
    var playern1 = document.getElementById("playern1").value;
    var playern2 = document.getElementById("playern2").value;
    if (count == 0) {
        var img6 = document.getElementById("img6");
        img6.src = "xrb.png";
        img6.style.width = "70px";
        img6.style.height = "70px";
        count++;
        arr[5] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 1) {
        var img6 = document.getElementById("img6");
        img6.src = "orb.png";
        img6.style.width = "80px";
        img6.style.height = "80px";
        count++;
        arr[5] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 2) {
        var img6 = document.getElementById("img6");
        img6.src = "xrb.png";
        img6.style.width = "70px";
        img6.style.height = "70px";
        count++;
        arr[5] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 3) {
        var img6 = document.getElementById("img6");
        img6.src = "orb.png";
        img6.style.width = "80px";
        img6.style.height = "80px";
        count++;
        arr[5] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 4) {
        var img6 = document.getElementById("img6");
        img6.src = "xrb.png";
        img6.style.width = "70px";
        img6.style.height = "70px";
        count++;
        arr[5] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 5) {
        var img6 = document.getElementById("img6");
        img6.src = "orb.png";
        img6.style.width = "80px";
        img6.style.height = "80px";
        count++;
        arr[5] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 6) {
        var img6 = document.getElementById("img6");
        img6.src = "xrb.png";
        img6.style.width = "70px";
        img6.style.height = "70px";
        count++;
        arr[5] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 7) {
        var img6 = document.getElementById("img6");
        img6.src = "orb.png";
        img6.style.width = "80px";
        img6.style.height = "80px";
        count++;
        arr[5] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 8) {
        var img6 = document.getElementById("img6");
        img6.src = "xrb.png";
        img6.style.width = "70px";
        img6.style.height = "70px";
        count++;
        arr[5] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 9) {
        var img6 = document.getElementById("img6");
        img6.src = "orb.png";
        img6.style.width = "80px";
        img6.style.height = "80px";
        count++;
        arr[5] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
}

function item7() {
    var playern1 = document.getElementById("playern1").value;
    var playern2 = document.getElementById("playern2").value;
    if (count == 0) {
        var img7 = document.getElementById("img7");
        img7.src = "xrb.png";
        img7.style.width = "70px";
        img7.style.height = "70px";
        count++;
        arr[6] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 1) {
        var img7 = document.getElementById("img7");
        img7.src = "orb.png";
        img7.style.width = "80px";
        img7.style.height = "80px";
        count++;
        arr[6] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 2) {
        var img7 = document.getElementById("img7");
        img7.src = "xrb.png";
        img7.style.width = "70px";
        img7.style.height = "70px";
        count++;
        arr[6] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 3) {
        var img7 = document.getElementById("img7");
        img7.src = "orb.png";
        img7.style.width = "80px";
        img7.style.height = "80px";
        count++;
        arr[6] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 4) {
        var img7 = document.getElementById("img7");
        img7.src = "xrb.png";
        img7.style.width = "70px";
        img7.style.height = "70px";
        count++;
        console.log("hello");
        arr[6] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 5) {
        var img7 = document.getElementById("img7");
        img7.src = "orb.png";
        img7.style.width = "80px";
        img7.style.height = "80px";
        count++;
        arr[6] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 6) {
        var img7 = document.getElementById("img7");
        img7.src = "xrb.png";
        img7.style.width = "70px";
        img7.style.height = "70px";
        count++;
        arr[6] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 7) {
        var img7 = document.getElementById("img7");
        img7.src = "orb.png";
        img7.style.width = "80px";
        img7.style.height = "80px";
        count++;
        arr[6] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 8) {
        var img7 = document.getElementById("img7");
        img7.src = "xrb.png";
        img7.style.width = "70px";
        img7.style.height = "70px";
        count++;
        arr[6] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 9) {
        var img7 = document.getElementById("img7");
        img7.src = "orb.png";
        img7.style.width = "80px";
        img7.style.height = "80px";
        count++;
        arr[6] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
}

function item8() {
    var playern1 = document.getElementById("playern1").value;
    var playern2 = document.getElementById("playern2").value;
    if (count == 0) {
        var img8 = document.getElementById("img8");
        img8.src = "xrb.png";
        img8.style.width = "70px";
        img8.style.height = "70px";
        count++;
        arr[7] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 1) {
        var img8 = document.getElementById("img8");
        img8.src = "orb.png";
        img8.style.width = "80px";
        img8.style.height = "80px";
        count++;
        arr[7] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 2) {
        var img8 = document.getElementById("img8");
        img8.src = "xrb.png";
        img8.style.width = "70px";
        img8.style.height = "70px";
        count++;
        arr[7] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 3) {
        var img8 = document.getElementById("img8");
        img8.src = "orb.png";
        img8.style.width = "80px";
        img8.style.height = "80px";
        count++;
        arr[7] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 4) {
        var img8 = document.getElementById("img8");
        img8.src = "xrb.png";
        img8.style.width = "70px";
        img8.style.height = "70px";
        count++;
        arr[7] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 5) {
        var img8 = document.getElementById("img8");
        img8.src = "orb.png";
        img8.style.width = "80px";
        img8.style.height = "80px";
        count++;
        arr[7] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 6) {
        var img8 = document.getElementById("img8");
        img8.src = "xrb.png";
        img8.style.width = "70px";
        img8.style.height = "70px";
        count++;
        arr[7] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 7) {
        var img8 = document.getElementById("img8");
        img8.src = "orb.png";
        img8.style.width = "80px";
        img8.style.height = "80px";
        count++;
        arr[7] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 8) {
        var img8 = document.getElementById("img8");
        img8.src = "xrb.png";
        img8.style.width = "70px";
        img8.style.height = "70px";
        count++;
        arr[7] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 9) {
        var img8 = document.getElementById("img8");
        img8.src = "orb.png";
        img8.style.width = "80px";
        img8.style.height = "80px";
        count++;
        arr[7] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
}

function item9() {
    var playern1 = document.getElementById("playern1").value;
    var playern2 = document.getElementById("playern2").value;
    if (count == 0) {
        var img9 = document.getElementById("img9");
        img9.src = "xrb.png";
        img9.style.width = "70px";
        img9.style.height = "70px";
        count++;
        arr[8] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 1) {
        var img9 = document.getElementById("img9");
        img9.src = "orb.png";
        img9.style.width = "80px";
        img9.style.height = "80px";
        count++;
        arr[8] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 2) {
        var img9 = document.getElementById("img9");
        img9.src = "xrb.png";
        img9.style.width = "70px";
        img9.style.height = "70px";
        count++;
        arr[8] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 3) {
        var img9 = document.getElementById("img9");
        img9.src = "orb.png";
        img9.style.width = "80px";
        img9.style.height = "80px";
        count++;
        arr[8] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 4) {
        var img9 = document.getElementById("img9");
        img9.src = "xrb.png";
        img9.style.width = "70px";
        img9.style.height = "70px";
        count++;
        arr[8] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 5) {
        var img9 = document.getElementById("img9");
        img9.src = "orb.png";
        img9.style.width = "80px";
        img9.style.height = "80px";
        count++;
        arr[8] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 6) {
        var img9 = document.getElementById("img9");
        img9.src = "xrb.png";
        img9.style.width = "70px";
        img9.style.height = "70px";
        count++;
        arr[8] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 7) {
        var img9 = document.getElementById("img9");
        img9.src = "orb.png";
        img9.style.width = "80px";
        img9.style.height = "80px";
        count++;
        arr[8] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 8) {
        var img9 = document.getElementById("img9");
        img9.src = "xrb.png";
        img9.style.width = "70px";
        img9.style.height = "70px";
        count++;
        arr[8] = 1;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern1} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
    else if (count == 9) {
        var img9 = document.getElementById("img9");
        img9.src = "orb.png";
        img9.style.width = "80px";
        img9.style.height = "80px";
        count++;
        arr[8] = 0;
        if(((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))){
            document.getElementById("windiv").style.display="block";
            document.getElementById("result").innerHTML=`${playern2} WON...!!!`;
            document.getElementById("griddiv").style.display="none";
        }
    }
}
