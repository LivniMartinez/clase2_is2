// OBTENER ELEMENTOS DEL DOM
// MEDIANTE SU ID
let titulo = document.getElementById('tituloPagina');
let boton = document.getElementById('botonClick')


// console.log(titulo)

// con selectores
let enlace = document.querySelector('a');
let formulario = document.querySelector('form')
let texto = document.querySelectorAll('.text-success')
let boton2 = document.querySelector('#botonClick')
let enlaceFB = document.querySelector('a[href*="facebook"]')

let enlacesSeguros = document.querySelectorAll('a[href^="https"]')

// console.log(enlaceFB)
// console.log(enlacesSeguros)

// for (const elemento of texto) {
//     console.log(elemento)
// }

// console.log(boton)
// console.log(boton2)
// console.log(enlace)
// console.log(formulario)
// console.log(texto)


let cajaParrafos = document.getElementById('cajaTexto')
// HIJOS DEL ELEMENTO
console.log(cajaParrafos.childNodes)
console.log(cajaParrafos.children[4].innerText = 'cambio desde JS')


// console.log(enlace.getAttribute('href'))
// formulario.setAttribute('action', '#')
// console.log(formulario.getAttribute('action'))


// let metaTags = document.querySelectorAll('meta')

// for (const tag of metaTags) {
//     console.log(tag.getAttribute('content'))
// }

formulario.action = "/controladores/guardar.php"

// console.log(enlace.href)
// console.log(boton2.id)
// console.log(boton2.getAttribute('id'))

let input = document.querySelector('input')


// console.log(input.value)
// console.log(titulo.getAttribute('class').replace('fw-bold',''))
console.log(titulo.classList)

titulo.classList.add('fs-6')
titulo.classList.remove('text-success')
titulo.classList.add('text-danger')



// console.log(texto[1].textContent);
// texto[1].textContent = "hola, altere el texto"

// console.log(cajaParrafos.textContent)
// console.log(cajaParrafos.innerText)
// console.log(cajaParrafos.innerHTML)
// console.log(cajaParrafos.outerHTML)

// cajaParrafos.innerHTML = "<table></table>"

const tablaGenerada = document.createElement('table')
const parrafoNuevo = document.createElement('p')

parrafoNuevo.textContent = "parrafo creado desde JS"
parrafoNuevo.classList.add('text-info', 'fw-bold')

cajaParrafos.appendChild(tablaGenerada)
cajaParrafos.appendChild(parrafoNuevo)

console.log(cajaParrafos.firstChild)
console.log(cajaParrafos.firstElementChild)
console.log(cajaParrafos.lastChild)
console.log(cajaParrafos.lastElementChild)
console.log(cajaParrafos.nextElementSibling)
console.log(cajaParrafos.nextSibling)
console.log(cajaParrafos.previousElementSibling.previousElementSibling)
console.log(cajaParrafos.parentElement)


let enlaceHermano = document.getElementById('email').parentElement.parentElement.parentElement.nextElementSibling
enlaceHermano.href = "https://cit.mindef.mil.gt"
enlaceHermano.innerText = "Ir a AUTOCOM"
console.log(enlaceHermano)

document.addEventListener('dblclick', (e)=>{
    console.log(e)
})