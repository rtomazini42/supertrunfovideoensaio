var carta1 = {
    nome: "Mimimidias",
    imagem: "https://pbs.twimg.com/profile_images/1225418031838433280/C-wBrZdT_400x400.jpg",
    atributos: {
        inscritos: 130000,
        videos: 245,
        cool: 92
    }
}

var carta2 = {
    nome: "Isac Ness",
    imagem: "https://pbs.twimg.com/profile_images/1398796846596870152/Q8LPgoNr_400x400.jpg",
    atributos: {
        inscritos: 182000,
        videos: 118,
        cool: 99
    }
}

var carta3 = {
    nome: "Ludoviajante",
    imagem: "https://pbs.twimg.com/profile_images/925830918698422273/ljUz1PB3_400x400.jpg",
    atributos: {
        inscritos: 483000,
        videos: 72,
        cool: 100
    }
}

var carta4 = {
    nome: "Nautilus",
    imagem: "https://pbs.twimg.com/profile_images/1013484657978028035/5qL_6kyV_400x400.jpg",
    atributos: {
        inscritos: 209000,
        videos: 467,
        cool: 85
    }
}

var carta5 = {
    nome: "Antídoto",
    imagem: "https://yt3.ggpht.com/a-/AAuE7mC_-8kZSG54AzA_BDB8KRkFUMt3kurocVduTQ=s900-mo-c-c0xffffffff-rj-k-no",
    atributos: {
        inscritos: 142000,
        videos: 183,
        cool: 91
    }
}

var carta6 = {
    nome: "Normose",
    imagem: "https://pbs.twimg.com/profile_images/1405632565315346432/LrEDHXuf_400x400.jpg",
    atributos: {
        inscritos: 169000,
        videos: 144,
        cool: 90
    }
}

var carta7 = {
    nome: "EntrePlanos",
    imagem: "https://fotos.influencerwiki.com.br/perfil/entreplanos.jpg",
    atributos: {
        inscritos: 337000,
        videos: 292,
        cool: 88
    }
}

var carta8 = {
    nome: " Eu, Júlio Victor",
    imagem: "https://pbs.twimg.com/profile_images/1304813663753306118/27yd15EL_400x400.jpg",
    atributos: {
        inscritos: 253000,
        videos: 104,
        cool: 89
    }
}

var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]
//            0           1           2          3         4            5            6           7
var pontosJogador = 0
var pontosMaquina = 0


function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "|" + pontosMaquina + " máquina"

  divPlacar.innerHTML = html
}


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)

    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

  if (cartas.length == 0){
    alert("Fim de jogo")
    if(pontosJogador > pontosMaquina){
    htmlResultado = '<p class="resultado-final">Venceu</p>'}
       else if(pontosJogador < pontosMaquina){
    htmlResultado = '<p class="resultado-final">Perdeu</p>'
       }else{
    htmlResultado = '<p class="resultado-final">Empatou</p>'}
    } else{
   document.getElementById('btnProximaRodada').disabled = false

  }

    divResultado.innerHTML = htmlResultado

    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
  atualizaQuantidadeDeCartas()

}

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length

  divQuantidadeCartas.innerHTML = html
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}


function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"</div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true

  var divResultado = document.getElementById('resultado')

  divResultado.innerHTML = ""



}
