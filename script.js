const menuIcon = document.getElementById('menu-icon')
const menu = document.getElementById('menu')
const closeIcon = document.getElementById('close-icon')
const links = document.querySelectorAll('.nav-link')

const validateForm = () => {
    const name = document.querySelector('.input-name')

    const email = document.querySelector('.input-email')

    const message = document.querySelector('.input-message')

    if (name.value == ''){
        name.classList.add('error-input')
        
    } else {
        name.classList.add('success-input')
    }

    if (email.value == ''){
        email.classList.add('error-input')
       
    } else {
        email.classList.add('success-input')
    }
   
    if (message.value == ''){
        message.classList.add('error-input')
        return false
    } else {
        message.classList.add('success-input')
    }
}

menuIcon.addEventListener('click', () => {
    menu.style.transform = 'translate3d(0vw, 0, 0)'
})

closeIcon.addEventListener('click', () => {
    menu.style.transform = 'translate3d(100vw, 0, 0)'
})

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', () => {
        menu.style.transform = 'translate3d(100vw, 0, 0)'
    })
}




