const caixas = document.querySelectorAll('.caixa')

window.addEventListener('scroll', checarcaixas)

function checarcaixas(){
    const gatilhobaixo = window.innerHeight / 5 * 4

    caixas.forEach(caixa => {
        const topocaixa = caixa.getBoundingClientRect().top

        if(topocaixa < gatilhobaixo){
            caixa.classList.add('mostrar')
        } else {
            caixa.classList.remove('mostrar')
        }
    })
}