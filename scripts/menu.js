function show(id) {
    document.getElementById(id).style.visibility = 'visible';
    clearTimeout(time);
}

var time;

function hide(id) {
 time = setTimeout(function (){realhide(id);}, 200);   
}

function realhide(id){
 document.getElementById(id).style.visibility = 'hidden';
 }