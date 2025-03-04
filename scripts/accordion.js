document.querySelectorAll('.about__experience-list-item-button').forEach(function(button, index) {
    button.addEventListener('click', function() {
        const panel = button.nextElementSibling

        document.querySelectorAll('.about__experience-list-item-panel').forEach(function(otherPanel) {
            if (otherPanel !== panel) {
                otherPanel.style.maxHeight = null
            }
        })

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
})

const firstPanel = document.querySelector('.about__experience-list-item-panel')
if (firstPanel) {
    firstPanel.style.maxHeight = firstPanel.scrollHeight + 'px'
}