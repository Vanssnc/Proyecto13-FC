let key = document.getElementById("key")
let colorglobal = 'white'

function pintar(color = colorglobal){
    key.style.backgroundColor=color;
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    pintar('pink')
    } 
    else if (event.key === 's') {
    pintar('orange')
    }
    else if (event.key === 'd') {
    pintar('lightblue')
        }

    // segunda parte del ejercicio
    
    else if(event.key === 'q'){
        let newdiv = document.createElement('div')
        document.querySelector('body').appendChild(newdiv)
        newdiv.style.width="200px"
        newdiv.style.height="200px"
        newdiv.style.backgroundColor="purple"
    }

    else if(event.key === 'w'){
        let newdiv = document.createElement('div')
        document.querySelector('body').appendChild(newdiv)
        newdiv.style.width="200px"
        newdiv.style.height="200px"
        newdiv.style.backgroundColor="gray"
    }

    else if(event.key === 'e'){
        let newdiv = document.createElement('div')
        document.querySelector('body').appendChild(newdiv)
        newdiv.style.width="200px"
        newdiv.style.height="200px"
        newdiv.style.backgroundColor="brown"
    }

    })


