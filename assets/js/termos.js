function termos() {
    const termos = document.getElementById('termos')
    termos.classList.add('abrir')

    termos.addEventListener('click', (e) => {
        if (e.target.id == 'termos') {
            termos.classList.remove('abrir')
        }
    })
}