/*medidorPasado = ["past_firstFloor","past_secondFloor","past_thirdFloor","past_fourthFloor","past_fifthFloor"]
medidorActual = ["present_firstFloor","present_secondFloor","present_thirdFloor","present_fourthFloor","present_fifthFloor"]




document.getElementById('past_firstFloor').addEventListener('keydown', inputCharacters);

function inputCharacters(event) {
 
  if (event.keyCode == 13) {
    document.getElementById('past_secondFloor').focus();
  

}


for (let i=0; i<5; i++) {
    const element = array[index];
    
}*/

function calculo(){

    var presente1 = document.getElementById("present_first").value;
    var presente2 = document.getElementById("present_second").value;
    var presente3 = document.getElementById("present_third").value;
    var presente4 = document.getElementById("present_fourth").value;
    var presente5 = document.getElementById("present_fifth").value;

    var pasado1 = document.getElementById("past_first").value;
    var pasado2 = document.getElementById("past_second").value;
    var pasado3 = document.getElementById("past_third").value;
    var pasado4 = document.getElementById("past_fourth").value;
    var pasado5 = document.getElementById("past_fifth").value;

    var montoD = document.getElementById("montoTotal").value;

    var p1 = presente1 - pasado1;
    var p2 = presente2 - pasado2;
    var p3 = presente3 - pasado3;
    var p4 = presente4 - pasado4;
    var p5 = presente5 - pasado5;

    var totalp = p1 + p2 + p3 +p4 +p5;

    var monto1 = (montoD * p1)/totalp; 
    var monto2 = (montoD * p2)/totalp;
    var monto3 = (montoD * p3)/totalp;
    var monto4 = (montoD * p4)/totalp;
    var monto5 = (montoD * p5)/totalp;

   
    document.getElementById("piso1").value = monto1;
    document.getElementById("piso2").value = monto2;
    document.getElementById("piso3").value = monto3;
    document.getElementById("piso4").value = monto4;
    document.getElementById("piso5").value = monto5;
    
}






