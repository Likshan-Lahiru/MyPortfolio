
var css1 = {

    background: "#ff0000"
}


var css2 = {

    background: "#00ff01"
}

var css3 = {

    background: "#002d81"
}

var css4 = {

    background: "#fffb00"
}

var css5 = {

    background: "#e66fb2"
}

var css6 = {

    background: "#ff0090"
}
var array = [css1,css2,css3,css4,css5,css6]

function changeColor() {

    var lastValue = array.pop();
    array.unshift(lastValue);

    $('#d1').css(array[0]);
    $('#d2').css(array[1]);
    $('#d3').css(array[2]);
    $('#d4').css(array[3]);
    $('#d5').css(array[4]);
    $('#d6').css(array[5]);
}
setInterval(changeColor, 1000);