let icon = document.querySelector('.nav-icon')
let bar = document.querySelectorAll('.bar')
let nav = document.querySelector('.mob-nav')


icon.addEventListener("click", ()=> {
    icon.classList.toggle("active")
    nav.classList.toggle("active-nav")
})