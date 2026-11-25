function menuShow() {
    let menu = document.querySelector('.menu-mobile');
    if(menu.classList.contains('abrir')) {
        menu.classList.remove('abrir')
    } else {
        menu.classList.add('abrir')
    }
}