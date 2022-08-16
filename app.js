let navToggleBtn = document.querySelector ('.header__togglenav')
let navToggleBtnImg = document.querySelector ('.header__togglenav-img')
let hiddenNav = document.querySelector ('.hidding__nav')
let overlay = document.querySelector('.overlay')

let icon = true

navToggleBtn.addEventListener('click',function(){
hiddenNav.classList.toggle ('shownav') 
overlay.classList.toggle  ('shownav')

if (icon) {
    navToggleBtnImg.src = 'image/toggler-close.svg'
} else {
    navToggleBtnImg.src = 'image/toggler-open@1xrr.png'
}

icon = !icon

})



