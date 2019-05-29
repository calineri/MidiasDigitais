function main(){
    let numero;

    for(let i=0; i<10; i++){

        document.write('<h1 id="numSort' + (i+1) + '">');
        document.write('</h1>');
        document.write('<h1 id="raizQuad' + (i+1) + '">');
        document.write('</h1>');
        document.write('<h1 id="parImpar' + (i+1) + '">');
        document.write('</h1>');
        document.write('<img id="img' + (i+1) + '" src="">');


        let auxSort  = document.getElementById("numSort" + (i+1));
        let auxRaiz  = document.getElementById("raizQuad"+ (i+1));
        let auxImpar = document.getElementById("parImpar"+ (i+1));
        let auxImg   = document.getElementById("img"+ (i+1));

        numero = Math.round(Math.random()*99)+1;
        auxSort.innerHTML=("Numero Sorteado: " + numero);
        auxRaiz.innerHTML=("Raiz quadrada: " + Math.sqrt(numero));
        auxImpar.innerHTML=("Par ou Impar?: " + verParImpar(numero, auxImg));

    }
}

function verParImpar(numero, auxImg){
    if(numero % 2 == 0){
        auxImg.src = "star.png";
        return "Par";
    }
    auxImg.src = "sun.png";
    return "Impar"
}

window.addEventListener("load", main);