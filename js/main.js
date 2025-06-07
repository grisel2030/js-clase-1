const boton1El = document.querySelector('#boton-1')
const boton2El = document.querySelector('#boton-2')
const boton3El = document.querySelector('#boton-3')
const boton4El = document.querySelector('#boton-4')



addEventListener("DOMContentLoaded",()=>{
    //cambiarColor()
})



function cambiarColorUno(){
    let color="bg-indigo-500"
    

    document.body.classList.toggle(color);

   


}

boton1El.addEventListener("click",()=>{
    cambiarColorUno()
})

function cambiarColorDos(){
    let color="bg-green-500"
    

    document.body.classList.toggle(color);

   


}

boton2El.addEventListener("click",()=>{
    cambiarColorDos()
})




