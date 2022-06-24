// HAMBURGER MENU
const hamBurger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const logo = document.querySelector('.logo-container');

hamBurger.addEventListener('click', ()=>{
    hamBurger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('active');
    logo.classList.toggle('active')
})

document.querySelectorAll('.link').forEach(n=>n.addEventListener('click', ()=>{
    hamBurger.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('active');
    logo.classList.remove('active')
}))




// POPUP

const openButton = document.querySelectorAll('[data-popup-target]');
const closeButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function popupFunction(){
    openButton.forEach(div =>{
        div.addEventListener('click', ()=>{
            const popup = document.querySelector(div.dataset.popupTarget)
            openPopup(popup)
        })
    })
    overlay.addEventListener('click',()=>{
        const popup = document.querySelectorAll('.popup.active');
        popup.forEach(popup=>{
            closePopup(popup)
        })
    } )
    closeButton.forEach(div =>{
        div.addEventListener('click', ()=>{
            const popup = div.closest('.popup')
            closePopup(popup)
        })
    })
    
    function openPopup(popup){
        if (popup == null) return
        popup.classList.add('active');
        overlay.classList.add('active')
    }
    function closePopup(popup){
        if (popup == null) return
        popup.classList.remove('active');
        overlay.classList.remove('active')
    }
}
