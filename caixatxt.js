const search = document.querySelector(".caixatexto")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input-text") 

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})


