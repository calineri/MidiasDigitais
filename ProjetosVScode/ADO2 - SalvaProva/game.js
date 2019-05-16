/*
Tecnologia em jogos Digitais - Noturno - 3o semestre - 2019

Alunos: Celso Alineri
        Wellington Maciel

*/
function J1(joga1){
    var dado1 = document.getElementById("die1");
    var jogador1 = document.getElementById("jogador1");
    var jogador2 = document.getElementById("jogador2");
    var aguarde = document.getElementById("aguarde");

    switch(joga1){
        case 1:
        dado1.src = "1.png";
        break;
        case 2:
        dado1.src = "2.png";
        break;
        case 3:
        dado1.src = "3.png";
        break;
        case 4:
        dado1.src = "4.png";
        break;
        case 5:
        dado1.src = "5.png";
        break;
        case 6:
        dado1.src = "6.png";
        break;
    }
    
    var aux = jogador1.textContent;
    var aux2 = " ";
    for(var i=0;i<aux.length;i++){
        aux2 = aux2 + aux[i].toUpperCase();

    }
    
    jogador1.innerHTML=(aux2);
    jogador2.innerHTML=("Jogador 2");
    aguarde.innerHTML=("");
}
function J2(joga2){
    var dado2 = document.getElementById("die2");
    var resultado = document.getElementById("resultado");
    var jogador2 = document.getElementById("jogador2");

    switch(joga2){
        case 1:
        dado2.src = "1.png";
        break;
        case 2:
        dado2.src = "2.png";
        break;
        case 3:
        dado2.src = "3.png";
        break;
        case 4:
        dado2.src = "4.png";
        break;
        case 5:
        dado2.src = "5.png";
        break;
        case 6:
        dado2.src = "6.png";
        break;
    }

    if(r > x){
        resultado.innerHTML=("Jogador 1 ganhou!");
    }else if(r == x){
        resultado.innerHTML=("Empatou!");
    }else{
        resultado.innerHTML=("Jogador 2 ganhou!");
    }
    
}