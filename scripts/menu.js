window.addEventListener('scroll', function() {
    let nav = document.querySelector('.nav')
    
    if (window.scrollY > 100) {
        nav.classList.add('scrolled')  
    } else {
        nav.classList.remove('scrolled')
    }
})
