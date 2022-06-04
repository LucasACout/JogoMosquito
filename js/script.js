var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var nivel = (window.location.search).replace('?', '');
var tempoCriar = 1500;


if(nivel === 'facil'){
    tempoCriar = 1500;
}else if(nivel === 'normal'){
    tempoCriar = 1000;
}else if(nivel === 'dificil'){
    tempoCriar = 750;
}

function TamanhoTelaJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

var cronometro = setInterval(function(){
    tempo -= 1;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criar);
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('tempo').innerHTML = tempo;
    }
}, 1000);

function posicao(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vidas > 3){
            window.location.href = 'fimJogo.html'
        }else{
            document.getElementById('v'+vidas).src = 'img/coracao_vazio.png';
            vidas++;
        }
    }

    var pX = Math.floor(Math.random() * largura) - 90;
    var pY = Math.floor(Math.random() * altura) - 90;

    pX = pX < 0 ? 0 : pX;
    pY = pY < 0 ? 0 : pY;

    //Elemento
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosca.png';
    mosquito.className = mosquitoTamanho() + ' ' + mosquitoLado();
    mosquito.style.left = pX + "px";
    mosquito.style.top = pY + "px";
    mosquito.id = 'mosquito';

    mosquito.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosquito);

}

function mosquitoTamanho(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function mosquitoLado(){
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}

function inicio(){
    TamanhoTelaJogo();
}

document.addEventListener("load", inicio());