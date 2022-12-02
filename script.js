
const btn = document.getElementsByClassName('menu')[0]
const link = document.getElementsByClassName('navbar-links')[0]
const con = document.getElementsByClassName('container')[0]
let logo = document.getElementById('logo')

btn.addEventListener('click', () => {
    link.classList.toggle('active')
    btn.classList.toggle('active')
    logo.classList.toggle('logo')
})
