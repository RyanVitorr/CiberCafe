window.addEventListener('scroll', () => {
    const botaoUp = document.getElementById('botaoUp');
    botaoUp.classList.toggle('scroll', window.scrollY > 550);

    const header = document.getElementById('containerHeader');
    header.classList.toggle('scroll', window.scrollY > 10);
})



