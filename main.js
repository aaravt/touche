var canvas= document.getElementById ("canva")
var Contex=canvas.getContext("2d")
var color="red"
var lastx,lasty,currentx,currenty
var screenwidth=screen.width
if (screenwidth<992)
 {
document.getElementById("canva").width=screenwidth-80
document.getElementById("canva").height=screen.height-200    
}
canvas.addEventListener("touchstart" ,ts)
function ts(e) {
     console.log("user has touched the canvas")
     color=document.getElementById("colorinput").value
    }
canvas.addEventListener("touchmove" , tm)
function tm(e) {
    currentx=e.touches[0].clientX-canvas.offsetLeft
    currenty=e.touches[0].clientY-canvas.offsetTop
     Contex.beginPath()
     Contex.strokeStyle=color
     Contex.lineWidth=5
     Contex.moveTo(lastx , lasty)
     Contex.lineTo(currentx , currenty)
     Contex.stroke()
    lastx=currentx
    lasty=currenty
}
function clearcanvas() {
    Contex.clearRect(0,0,canvas.width,canvas.height)
    
}