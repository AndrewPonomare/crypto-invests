let main = document.getElementById('main');
let footer = document.querySelector('footer')
let dropdown = document.getElementById('dropdown')
let language = document.getElementById('btn-language')
let contact  = document.getElementById('contact')


language.addEventListener('click', () => {
    main.style.filter = 'blur(5px)'
})

dropdown.addEventListener('click', () => {
    main.style.display = "none"
    footer.style.display = "none"
    contact.style.display = 'block'
})