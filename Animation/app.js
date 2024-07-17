var left = 0
function abc() {
    var fire1 = document.getElementById('fire-1')
    if (event.keyCode === 68) {
        left = left + 20
        fire1.style.left = left + "px"
        fire1.src = './assets/fire-run.gif'
    }
    if (event.keyCode === 65) {
        left = left - 10
        fire1.style.left = left + "px"
    }
    if (event.keyCode === 32) {
        fire1.style.width = "600px"
        fire1.style.height = "600px"
        fire1.src = "./assets/fire-fly.gif"
        setTimeout(function () {
            fire1.src = "./assets/fire-1.gif"
            fire1.style.width = "250px"
            fire1.style.height = "250px"
        }, 2500)
    }
}
window.onkeydown = abc

