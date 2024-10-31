var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")


function RolarParaDireita() {
leonardo.style = "display:none"
Bruna.style = "display:flex"
setaEsquerda.style = "display:flex"
setaDireita.style = "display:none"
}

function RolarParaEsquerda(){
leonardo.style = "display:flex"
Bruna.style = "display:none"
Samantha.style ="display flex"
setaEsquerda.style = "display:none"
setaDireita.style = "display:flex"
}


