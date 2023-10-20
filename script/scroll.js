

window.addEventListener('scroll', () => {
    const botaoUp = document.getElementById('botaoUp');
    botaoUp.classList.toggle('scroll', window.scrollY > 550);
})