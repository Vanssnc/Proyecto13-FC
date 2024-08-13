let azul = document.getElementById("azul")
let rojo = document.getElementById("rojo")
let verde = document.getElementById("verde")
let amarillo = document.getElementById("amarillo")

function pintarnegro(div){
    div.style.backgroundColor='black';
}

azul.addEventListener("click", function(){
    pintarnegro(azul);
})

rojo.addEventListener("click", function(){
    pintarnegro(rojo);
})

verde.addEventListener("click", function(){
    pintarnegro(verde);
})

amarillo.addEventListener("click", function(){
    pintarnegro(amarillo);
})

