var array = ["A","B","C","D","E","F"]

function changeCase(){
   var lastValue = array.pop();
   array.unshift(lastValue);

   $('#1').text(array[0]);
   $('#2').text(array[1]);
   $('#3').text(array[2]);
   $('#4').text(array[3]);
   $('#5').text(array[4]);
   $('#6').text(array[5]);



}
setInterval(changeCase,1500);
