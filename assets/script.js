var number = parseInt(document.getElementById("counter").innerHTML);

function count(){
    number = number + 1;
    var text = document.getElementById("counter");
    text.innerHTML = number;
}

function minus(){
    number = number - 1;
    var text = document.getElementById("counter");
    text.innerHTML = number;
}

function reset(){
    number = 0;
    var text = document.getElementById("counter");
    text.innerHTML = number;
}