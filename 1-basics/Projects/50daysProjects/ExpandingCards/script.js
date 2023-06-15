const cards = document.querySelectorAll('.single-card')

function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses()
        card.classList.add('active')
    })
})