var front_end_resultado = document.querySelector('div#frontend')
var circulo = document.querySelector('div.circulo')
var estudos = document.querySelector('div#resultado-estudar')
/* */
var fundo_linguagens = document.querySelector('div.linguagens')
/* */
var deschtml = document.querySelector('div#resultado-html')
var desccss = document.querySelector('div#resultado-css')
var descjs = document.querySelector('div#resultado-js')
/* */

function abrirestudar(){
    estudos.style.display = 'block'
}

function fecharestudar(){
    estudos.style.display = 'none'
}

function abrirFE(){
    front_end_resultado.style.display = 'block'
    circulo.style.background = '#00baba'
}

function fecharFE(){
    front_end_resultado.style.display = 'none'
    circulo.style.background = '#003e3e'
}

function mudarhtml(){
    var html = document.querySelector('div.html')
    fundo_linguagens.style.background = '#ff7816'
    deschtml.style.display = 'block'
    desccss.style.display = 'none'
    descjs.style.display = 'none'
}

function mudarcss(){
    var css = document.querySelector('div.css')
    fundo_linguagens.style.background = '#2196f3'
    desccss.style.display = 'block'
    deschtml.style.display = 'none'
    descjs.style.display = 'none'
}

function mudarjs(){
    var js = document.querySelector('div.js')
    fundo_linguagens.style.background = '#ffdf00'
    descjs.style.display = 'block'
    deschtml.style.display = 'none'
    desccss.style.display = 'none'
}

function fecharresultado(){
    fundo_linguagens.style.background = '#E5E5E5'
    descjs.style.display = 'none'
    deschtml.style.display = 'none'
    desccss.style.display = 'none'
}
