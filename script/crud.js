const btnBuscar = document.getElementById('buscarProduct')
const btnAgregar = document.getElementById('agregarProduct')
const endPointOferta = 'https://peaceful-ocean-61738.herokuapp.com/ofertas/'
const resultProdut = document.getElementById('resultProdut')
const btnVolver = document.getElementById('volver')

btnVolver.addEventListener('click', () => {
    window.location.href = "index.html"
})

btnBuscar.addEventListener('click', async (e) => {
    e.preventDefault()

    const nombreProducto = document.getElementById('nameProduct').value
    const precioProduct = document.getElementById('precioProduct')
    const precioInicial1 = document.getElementById('precioInicial')
    const urlImagen = document.getElementById('urlImagen')
    let busq = await fetch(endPointOferta)
    let data = await busq.json()

    let result = data.find(product => product.nombre == nombreProducto)
    const { id, nombre, precio, precioInicial, imagen } = result
    resultProdut.innerHTML = ""
    resultProdut.innerHTML += `
        <div>
            <img src="${imagen}" alt="">
                
        </div>
        <div>
            <h4>${nombre}</h4>
            <span>${precio}</span>
            <span>${precioInicial}</span>
        </div>
        <div>
            <button onclick="editar(${id})">Editar</button>
            <button onclick="eliminar(${id})">Eliminar</button>
        </div>
    
    `
    precioProduct.value = precio
    precioInicial1.value = precioInicial
    urlImagen.value = imagen

})

btnAgregar.addEventListener('click', async (e) => {
    e.preventDefault()

    const nombreProducto = document.getElementById('nameProduct').value
    const precioProduct = document.getElementById('precioProduct').value
    const precioInicial = document.getElementById('precioInicial').value
    const urlImagen = document.getElementById('urlImagen').value

    let resp = await fetch(endPointOferta, {
        method: 'POST',
        body: JSON.stringify({
            nombre: nombreProducto,
            precio: precioProduct,
            precioInicial: precioInicial,
            imagen: urlImagen
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})

const eliminar = async (idP) => {
    let resp = await fetch(endPointOferta + idP, {
        method: 'DELETE'
    })
}

const editar = async (idP) => {
    const nombreProducto = document.getElementById('nameProduct').value
    const precioProduct = document.getElementById('precioProduct').value
    const precioInicial = document.getElementById('precioInicial').value
    const urlImagen = document.getElementById('urlImagen').value

    let resp = await fetch(endPointOferta + idP, {
        method: 'PUT',
        body: JSON.stringify({
            nombre: nombreProducto,
            precio: precioProduct,
            precioInicial: precioInicial,
            imagen: urlImagen
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
}