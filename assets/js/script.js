// 2.2

// let ele = document.getElementById("ele1")

// ele.addEventListener("click", function(){
//     ele.style.backgroundColor = 'yellow'
// })



// 2.3
let ele =  document.getElementById("ele1");

function pintar ( color = 'green'){
    ele.style.backgroundColor=color;
}

ele.addEventListener("click", function(){
    pintar("yellow");
});

pintar();
