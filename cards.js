const fundos = document.querySelectorAll('.fundo')

fundos.forEach(fundo =>{
fundo.addEventListener('mouseenter', () => {
removerclasseativa()
fundo.classList.add('ativo')
})
})

fundo.addEventListener('mouseleave', () => {
    removerclasseativa()
})

function removerclasseativa (){
    fundos.forEach(fundo =>{
        fundo.classList.remove('ativo')
    })
}
