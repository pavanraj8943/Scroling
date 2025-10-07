// let mouse = document.querySelector(`#cursor`)
// document.querySelector(`canvas`).onmousemove = function(event){
//     mouse.style.left = event.clientX-10+'px'
//     mouse.style.top = event.clientY-10+'px'
// }







let mouse = document.getElementById("cursor")
document.addEventListener("mousemove",function(event){
    mouse.style.left= event.clientX-10+'px'
    mouse.style.top= event.clientY-10+'px'
    
})

document.body.style.cursor="url('./img/icons8-cursor-50.png'),auto"