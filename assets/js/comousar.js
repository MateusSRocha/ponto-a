function UsarApp() {
    const usarapp = document.getElementById('usarapp')
    usarapp.classList.add('abrir')

    usarapp.addEventListener('click', (e) => {
        if (e.target.id == 'usarapp') {
            usarapp.classList.remove('abrir')
        }
    })
}