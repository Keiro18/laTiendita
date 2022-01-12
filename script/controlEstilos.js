const btnCar = document.getElementById('btnCar')
const vaciar = document.getElementById('vaciar')
const ubicacion = document.getElementById('ubicación')
const titulo = document.querySelector('.logo')

titulo.addEventListener('click', () => {
    window.location.href = "index.html"
})

btnCar.addEventListener('click', () => {
    window.location.href = "#modal-car"
    window.location.reload()
})

vaciar.addEventListener('click', () => {
    localStorage.removeItem('ProductosCarro')
    window.location.href = "index.html"
})

ubicacion.addEventListener('click', () => {
    window.location.href = "#modal-ubicacion"
})