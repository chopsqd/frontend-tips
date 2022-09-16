const buttons = document.querySelectorAll('.button')
const cards = document.querySelectorAll('.card')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const currentCategory = button.dataset.filter
        filter(currentCategory, cards)
    })
})

function filter(category, items) {
    items.forEach(item => { 
        /* 
        !item.classList.contains(category) && !(category.toLowerCase() === 'all') ? 
            item.classList.add('hide') 
            : item.classList.remove('hide') 
        */
        if(!item.classList.contains(category) && !(category.toLowerCase() === 'all')) {
            item.classList.add('hide')
        } else {
            item.classList.remove('hide')
        }
    })

}
